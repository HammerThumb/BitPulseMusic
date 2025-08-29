// app/music/page.tsx
import Link from "next/link";
import { Cinzel_Decorative, Crimson_Pro } from "next/font/google";

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: ["400","700","900"] });
const crimson = Crimson_Pro({ subsets: ["latin"], weight: ["400","500","700"] });

export const metadata = {
  title: "Music — Coming Soon",
  description: "Original tracks from Sonaris — coming soon.",
};

export default function MusicComingSoon() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background gradient + soft vignette (matches your site vibe) */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0b1022] via-[#141a2f] to-[#0b1022]" />
      <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black/25 via-transparent to-black/40" />

      <section className="relative z-10 mx-auto max-w-3xl px-6 py-24 md:py-28 text-center">
        <h1
          className={`${cinzel.className} text-4xl md:text-6xl font-bold tracking-wide
                      text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-300 to-pink-300`}
        >
          Music
        </h1>

        <p className={`${crimson.className} mt-4 text-lg text-white/85`}>
          Coming soon. We’re tuning the set so it lands just right.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
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
        </div>

        {/* Optional: tiny “pulse” to imply life */}
        <div className="mt-10 inline-flex items-center gap-2 text-white/60">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
          <span className={`${crimson.className}`}>Tracking, mixing, and mastering in progress.</span>
        </div>
      </section>
    </main>
  );
}
