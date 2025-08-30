// app/music/page.tsx
import Link from "next/link";
import { Cinzel_Decorative, Crimson_Pro } from "next/font/google";

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: ["400","700","900"] });
const crimson = Crimson_Pro({ subsets: ["latin"], weight: ["400","500","700"] });

export const metadata = {
  title: "Music — Bit Pulse",
  description: "Original tracks from Sonaris.",
};

export default function Music() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background gradient + soft vignette (matches site) */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0b1022] via-[#141a2f] to-[#0b1022]" />
      <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black/25 via-transparent to-black/40" />

      <section className="relative z-10 mx-auto max-w-3xl px-6 py-24 md:py-28 text-center">
        {/* Glowing title */}
        <h1
          className={`${cinzel.className} text-5xl md:text-6xl font-bold tracking-wide
                      text-transparent bg-clip-text bg-gradient-to-r
                      from-indigo-200 via-cyan-300 to-pink-300 glow-pulse`}
        >
          Music
        </h1>

        <p className={`${crimson.className} mt-4 text-lg text-white/85`}>
          Songs from Sonaris—fresh drops and catalog.
        </p>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-center flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-lg border border-white/20 px-4 py-2 text-white/90 hover:text-white hover:border-white/40 transition"
          >
            ← Back Home
          </Link>
          <Link
            href="/lore"
            className="rounded-lg border border-white/20 px-4 py-2 text-white/90 hover:text-white hover:border-white/40 transition"
          >
            Read the Lore
          </Link>

          {/* Spotify button */}
          <a
            href="https://open.spotify.com/artist/5YevLY489xxDbLARqpQ9A1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3
                       bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold
                       shadow-lg transition"
            aria-label="Open Bit Pulse on Spotify"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path fill="currentColor" d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.512 10.512 0 0 0 12 1.5Zm4.81 15.19a.84.84 0 0 1-1.16.28 11.9 11.9 0 0 0-6.13-1.33c-1.22.06-2.42.28-3.59.65a.84.84 0 1 1-.49-1.61c1.29-.39 2.63-.63 3.99-.7a13.6 13.6 0 0 1 7.03 1.53.84.84 0 0 1 .35 1.18Zm1.23-3a.98.98 0 0 1-1.36.33 14.9 14.9 0 0 0-7.9-1.66 17.2 17.2 0 0 0-4.68.88.98.98 0 1 1-.63-1.86 19.1 19.1 0 0 1 5.23-.99 16.9 16.9 0 0 1 8.94 1.87.98.98 0 0 1 .4 1.43Zm.45-3.19a1.14 1.14 0 0 1-1.6.39 18.7 18.7 0 0 0-9.97-2.02 21.1 21.1 0 0 0-4.9.95 1.14 1.14 0 1 1-.67-2.19 23.2 23.2 0 0 1 5.36-1.03 20.9 20.9 0 0 1 11.11 2.26 1.14 1.14 0 0 1 .67 1.64Z"/>
            </svg>
            Listen on Spotify
          </a>
        </div>

        {/* Responsive Spotify embed */}
        <div className="mt-8 relative w-full max-w-3xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://open.spotify.com/embed/artist/5YevLY489xxDbLARqpQ9A1?utm_source=generator&theme=0"
            width="100%"
            height="100%"
            frameBorder="0"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="absolute inset-0 w-full h-full"
            title="Bit Pulse on Spotify"
          />
        </div>
<div className="mt-6 flex justify-center">
  <a
    href="https://ko-fi.com/bit_pulse"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-2xl px-5 py-3
               border border-white/15 text-white/90 hover:text-white
               hover:border-white/35 hover:bg-white/5 transition"
    aria-label="Support Bit Pulse on Ko-fi"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M3 7h13v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V7Zm13 1h3a3 3 0 0 1 0 6h-2.1a6.97 6.97 0 0 0 .9-3V8Zm-9 9h4a4 4 0 0 0 4-4V9H4v4a4 4 0 0 0 4 4Z"/>
    </svg>
    Lo-Fi sounds better with Ko-Fi
  </a>
</div>

        {/* tiny pulse */}
        <div className="mt-10 inline-flex items-center gap-2 text-white/60">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
          <span className={`${crimson.className}`}>New tracks coming monthly.</span>
        </div>
      </section>
    </main>
  );
}
