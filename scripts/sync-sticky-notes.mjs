import { copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const notesRoot = path.join(repoRoot, "public", "notes");
const notesUrlRoot = "/notes/";

const legalFiles = [
  "eula.html",
  "legal.css",
  "licenses.html",
  "privacy.html",
  "refund.html",
  "terms.html",
];

const exactRuntimeFiles = [
  "vendor/purify.min.js",
  "Icon/Stickie.png",
  "Icon/Stickie_colors_cut_edit.png",
  "Game/avatar/base/intact.png",
  "Game/avatar/base/held.png",
  ...legalFiles.map((name) => `legal/${name}`),
];

const runtimeDirectories = [
  { relativePath: "fonts", extension: ".woff2" },
  { relativePath: "Game/items", extension: ".png" },
  { relativePath: "Game/avatar/items", extension: ".png" },
];

const runtimePrefixes = [
  "Game/avatar/items/",
  "Game/avatar/base/",
  "Game/items/",
  "fonts/",
  "vendor/",
  "legal/",
  "Icon/",
];

function fail(message) {
  throw new Error(`[notes] ${message}`);
}

function parseArguments(argv) {
  let source;
  let verify = false;

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--verify") {
      verify = true;
    } else if (argument === "--source") {
      source = argv[index + 1];
      if (!source || source.startsWith("--")) {
        fail("--source requires a directory path");
      }
      index += 1;
    } else if (argument.startsWith("--source=")) {
      source = argument.slice("--source=".length);
      if (!source) fail("--source requires a directory path");
    } else {
      fail(`unknown argument: ${argument}`);
    }
  }

  if (verify && source) fail("--verify cannot be combined with --source");
  return { verify, source: source ?? process.env.STICKY_NOTES_SOURCE };
}

async function getStats(targetPath) {
  try {
    return await stat(targetPath);
  } catch (error) {
    if (error?.code === "ENOENT") return null;
    throw error;
  }
}

async function requireDirectory(targetPath, label) {
  const stats = await getStats(targetPath);
  if (!stats?.isDirectory()) fail(`${label} is missing or is not a directory: ${targetPath}`);
}

async function requireFile(targetPath, label) {
  const stats = await getStats(targetPath);
  if (!stats?.isFile()) fail(`${label} is missing: ${targetPath}`);
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isExternalReference(value) {
  return (
    value.startsWith("#") ||
    value.startsWith("//") ||
    /^[a-z][a-z\d+.-]*:/i.test(value)
  );
}

function rewriteHtmlAttributes(content, relativeFile) {
  const baseDirectory = path.posix.dirname(relativeFile);
  return content.replace(
    /\b(href|src|poster)\s*=\s*(["'])([^"']+)\2/gi,
    (match, attribute, quote, rawValue) => {
      const value = rawValue.trim();
      if (!value || value.startsWith("/") || isExternalReference(value)) return match;

      const suffixIndex = value.search(/[?#]/);
      const pathname = suffixIndex >= 0 ? value.slice(0, suffixIndex) : value;
      const suffix = suffixIndex >= 0 ? value.slice(suffixIndex) : "";
      const resolved = path.posix.normalize(path.posix.join(baseDirectory, pathname));
      if (resolved === ".." || resolved.startsWith("../")) {
        fail(`runtime reference escapes the notes bundle in ${relativeFile}: ${rawValue}`);
      }
      return `${attribute}=${quote}${notesUrlRoot}${resolved}${suffix}${quote}`;
    },
  );
}

function rewriteRuntimePrefixes(content) {
  let rewritten = content;
  for (const prefix of runtimePrefixes) {
    // Runtime paths in the app are string/attribute values or CSS url(...)
    // values. Requiring that boundary avoids changing prose and external URLs
    // such as https://github.com/google/fonts/.
    const pattern = new RegExp("([(\\\"'`])" + escapeRegExp(prefix), "g");
    rewritten = rewritten.replace(pattern, (_match, boundary) => `${boundary}${notesUrlRoot}${prefix}`);
  }
  return rewritten;
}

function injectRobotsMeta(content) {
  const robots = '<meta name="robots" content="noindex,nofollow,noarchive">';
  if (/<meta\s+[^>]*name=["']robots["'][^>]*>/i.test(content)) {
    return content.replace(/<meta\s+[^>]*name=["']robots["'][^>]*>/i, robots);
  }
  if (!/<head(?:\s[^>]*)?>/i.test(content)) fail("HTML entry point has no <head> element");
  return content.replace(/<head(?:\s[^>]*)?>/i, (head) => `${head}\n${robots}`);
}

function transformHtml(content, relativeFile) {
  // The application keeps HTML-looking patterns inside its inline JavaScript
  // (for example, sanitizing /src="..."/ regexes). Restrict generic attribute
  // rewriting to the script-free legal pages and use the runtime prefix
  // allowlist for the application entry point.
  const attributesRewritten = relativeFile === "index.html"
    ? content
    : rewriteHtmlAttributes(content, relativeFile);
  return injectRobotsMeta(rewriteRuntimePrefixes(attributesRewritten));
}

async function listFlatRuntimeFiles(sourceRoot, rule) {
  const sourceDirectory = path.join(sourceRoot, ...rule.relativePath.split("/"));
  await requireDirectory(sourceDirectory, `runtime asset directory ${rule.relativePath}`);
  const entries = await readdir(sourceDirectory, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && path.extname(entry.name).toLowerCase() === rule.extension)
    .map((entry) => `${rule.relativePath}/${entry.name}`)
    .sort();
  if (files.length === 0) fail(`no ${rule.extension} runtime assets found in ${sourceDirectory}`);
  return files;
}

function collectSourceRuntimeReferences(html) {
  const references = new Set(exactRuntimeFiles);
  const literalPattern = /(?:fonts|vendor|legal|Icon|Game\/items|Game\/avatar\/base|Game\/avatar\/items)\/[A-Za-z0-9_.-]+/g;
  for (const match of html.matchAll(literalPattern)) references.add(match[0]);

  const avatarIdPattern = /stickieAvatarMetadata\(\s*["']([a-z0-9_-]+)["']/g;
  for (const match of html.matchAll(avatarIdPattern)) {
    if (match[1] === "sticky_fringe") {
      references.add("Game/avatar/items/sticky_fringe-rear.png");
      references.add("Game/avatar/items/sticky_fringe-front.png");
    } else {
      references.add(`Game/avatar/items/${match[1]}.png`);
    }
  }
  return [...references].sort();
}

async function validateSource(sourceRoot, html) {
  await requireDirectory(sourceRoot, "sticky-notes source");
  await requireFile(path.join(sourceRoot, "sticky-notes.html"), "sticky-notes entry point");
  for (const relativePath of collectSourceRuntimeReferences(html)) {
    await requireFile(
      path.join(sourceRoot, ...relativePath.split("/")),
      `referenced runtime asset ${relativePath}`,
    );
  }
}

async function copyRuntimeFile(sourceRoot, relativePath) {
  const sourcePath = path.join(sourceRoot, ...relativePath.split("/"));
  const destinationPath = path.join(notesRoot, ...relativePath.split("/"));
  await requireFile(sourcePath, `runtime asset ${relativePath}`);
  await mkdir(path.dirname(destinationPath), { recursive: true });
  await copyFile(sourcePath, destinationPath);
}

async function walkFiles(root, current = root) {
  const entries = await readdir(current, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(current, entry.name);
    if (entry.isDirectory()) files.push(...(await walkFiles(root, fullPath)));
    else if (entry.isFile()) files.push(toPosix(path.relative(root, fullPath)));
  }
  return files.sort();
}

function isAllowedBundleFile(relativePath) {
  if (relativePath === "index.html") return true;
  if (exactRuntimeFiles.includes(relativePath)) return true;
  return runtimeDirectories.some(({ relativePath: directory, extension }) => {
    const prefix = `${directory}/`;
    const remainder = relativePath.startsWith(prefix) ? relativePath.slice(prefix.length) : "";
    return remainder !== "" && !remainder.includes("/") && path.posix.extname(remainder).toLowerCase() === extension;
  });
}

function localAttributeReferences(content) {
  const references = [];
  const pattern = /\b(?:href|src|poster)\s*=\s*(["'])([^"']+)\1/gi;
  for (const match of content.matchAll(pattern)) references.push(match[2].trim());
  return references;
}

function cssUrlReferences(content) {
  const references = [];
  const pattern = /url\(\s*(["']?)([^)'"\s]+)\1\s*\)/gi;
  for (const match of content.matchAll(pattern)) references.push(match[2].trim());
  return references;
}

function notesReferences(content) {
  return [...content.matchAll(/\/notes\/[A-Za-z0-9_./-]*/g)].map((match) => match[0]);
}

async function validateNotesReference(reference, fromFile) {
  const withoutSuffix = reference.split(/[?#]/, 1)[0];
  let decoded;
  try {
    decoded = decodeURIComponent(withoutSuffix);
  } catch {
    fail(`invalid URL encoding in ${fromFile}: ${reference}`);
  }
  const relativePath = path.posix.normalize(decoded.slice(notesUrlRoot.length));
  if (!relativePath || relativePath === ".") return;
  if (relativePath === ".." || relativePath.startsWith("../")) {
    fail(`reference escapes the notes bundle in ${fromFile}: ${reference}`);
  }
  const target = path.join(notesRoot, ...relativePath.split("/"));
  const stats = await getStats(target);
  if (!stats) fail(`referenced bundle asset is missing in ${fromFile}: ${reference}`);
}

function verifyInlineJavaScript(html) {
  // The application script contains a sanitizer regex with escaped script-tag
  // text, so delimit it the same way as the source repo's syntax-check helper:
  // after the vendor script and before the document's final closing tag.
  const vendorMarker = html.indexOf(`${notesUrlRoot}vendor/purify.min.js`);
  const openingTag = html.indexOf("<script>", vendorMarker);
  const closingTag = html.lastIndexOf("</script>");
  if (vendorMarker < 0 || openingTag < 0 || closingTag <= openingTag) {
    fail("index.html inline application script was not found");
  }
  const script = html.slice(openingTag + "<script>".length, closingTag);
  try {
    new vm.Script(script, { filename: "public/notes/index.html:inline.js" });
  } catch (error) {
    fail(`inline JavaScript syntax error: ${error.message}`);
  }
}

async function verifyDynamicAvatarAssets(indexHtml) {
  const avatarIdPattern = /stickieAvatarMetadata\(\s*["']([a-z0-9_-]+)["']/g;
  for (const match of indexHtml.matchAll(avatarIdPattern)) {
    const filenames = match[1] === "sticky_fringe"
      ? ["sticky_fringe-rear.png", "sticky_fringe-front.png"]
      : [`${match[1]}.png`];
    for (const filename of filenames) {
      const relativePath = `Game/avatar/items/${filename}`;
      await requireFile(path.join(notesRoot, ...relativePath.split("/")), `dynamic avatar asset ${relativePath}`);
    }
  }
}

async function verifyBundle() {
  await requireDirectory(notesRoot, "committed notes bundle");
  const files = await walkFiles(notesRoot);
  const unexpected = files.filter((file) => !isAllowedBundleFile(file));
  if (unexpected.length > 0) {
    fail(`authoring-only or unexpected files found in public/notes:\n  ${unexpected.join("\n  ")}`);
  }

  for (const required of ["index.html", ...exactRuntimeFiles]) {
    await requireFile(path.join(notesRoot, ...required.split("/")), `required bundle file ${required}`);
  }

  const indexPath = path.join(notesRoot, "index.html");
  const indexHtml = await readFile(indexPath, "utf8");
  if (!/<meta\s+name=["']robots["']\s+content=["']noindex,nofollow,noarchive["']\s*\/?>/i.test(indexHtml)) {
    fail("index.html is missing the noindex,nofollow,noarchive robots meta tag");
  }
  verifyInlineJavaScript(indexHtml);
  await verifyDynamicAvatarAssets(indexHtml);

  const textFiles = files.filter((file) => /\.(?:html|css|js)$/i.test(file));
  for (const relativeFile of textFiles) {
    const content = await readFile(path.join(notesRoot, ...relativeFile.split("/")), "utf8");
    let referenceMarkup = content;
    if (relativeFile === "index.html") {
      const inlineStart = content.indexOf("<script>", content.indexOf(`${notesUrlRoot}vendor/purify.min.js`));
      const inlineEnd = content.lastIndexOf("</script>");
      if (inlineStart >= 0 && inlineEnd > inlineStart) {
        referenceMarkup = `${content.slice(0, inlineStart + "<script>".length)}${content.slice(inlineEnd)}`;
      }
    }
    const localReferences = [
      ...localAttributeReferences(referenceMarkup),
      ...(relativeFile.endsWith(".css") || relativeFile === "index.html" ? cssUrlReferences(referenceMarkup) : []),
    ];
    for (const reference of localReferences) {
      if (!reference || isExternalReference(reference)) continue;
      if (!reference.startsWith(notesUrlRoot)) {
        fail(`relative runtime path remains in ${relativeFile}: ${reference}`);
      }
    }

    for (const reference of new Set(notesReferences(content))) {
      await validateNotesReference(reference, relativeFile);
    }
  }

  const relativeRuntimeLiteral = /(["'`])((?:fonts|vendor|legal|Icon|Game\/items|Game\/avatar\/base|Game\/avatar\/items)\/[^"'`\s]+)/g;
  const relativeLiteral = relativeRuntimeLiteral.exec(indexHtml);
  if (relativeLiteral) fail(`relative runtime path remains in index.html: ${relativeLiteral[2]}`);

  let totalBytes = 0;
  for (const file of files) totalBytes += (await stat(path.join(notesRoot, ...file.split("/")))).size;
  console.log(`[notes] verified ${files.length} files (${(totalBytes / 1024 / 1024).toFixed(2)} MiB)`);
}

async function syncBundle(sourceArgument) {
  if (!sourceArgument) {
    fail('no source supplied; use --source "<sticky-notes-repo>" or set STICKY_NOTES_SOURCE');
  }
  const sourceRoot = path.resolve(sourceArgument);
  await requireDirectory(sourceRoot, "sticky-notes source");
  const sourceHtmlPath = path.join(sourceRoot, "sticky-notes.html");
  await requireFile(sourceHtmlPath, "sticky-notes entry point");
  const sourceHtml = await readFile(sourceHtmlPath, "utf8");
  await validateSource(sourceRoot, sourceHtml);

  const directoryFiles = [];
  for (const rule of runtimeDirectories) {
    directoryFiles.push(...(await listFlatRuntimeFiles(sourceRoot, rule)));
  }

  await rm(notesRoot, { recursive: true, force: true });
  await mkdir(notesRoot, { recursive: true });

  for (const relativePath of [...exactRuntimeFiles, ...directoryFiles]) {
    if (relativePath.startsWith("legal/") && relativePath.endsWith(".html")) continue;
    await copyRuntimeFile(sourceRoot, relativePath);
  }

  for (const legalFile of legalFiles.filter((name) => name.endsWith(".html"))) {
    const relativePath = `legal/${legalFile}`;
    const legalHtml = await readFile(path.join(sourceRoot, "legal", legalFile), "utf8");
    const destination = path.join(notesRoot, "legal", legalFile);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, transformHtml(legalHtml, relativePath), "utf8");
  }

  await writeFile(path.join(notesRoot, "index.html"), transformHtml(sourceHtml, "index.html"), "utf8");
  await verifyBundle();
  console.log(`[notes] synced from ${sourceRoot}`);
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.verify) await verifyBundle();
  else await syncBundle(options.source);
}

main().catch((error) => {
  console.error(error?.message ?? error);
  process.exitCode = 1;
});
