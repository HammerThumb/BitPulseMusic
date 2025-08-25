// app/lore/page.tsx
import Link from "next/link";
import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function LoreIndex() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background gradient + optional noise (matches Home) */}
      <div
        className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0b1022] via-[#141a2f] to-[#0b1022]"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 -z-10 opacity-15 pointer-events-none bg-[url('/images/noise.png')] bg-[length:300px_300px] mix-blend-overlay"
        aria-hidden="true"
      />
      {/* Soft vignette for readability */}
      <div
        className="fixed inset-0 pointer-events-none bg-gradient-to-b from-black/25 via-transparent to-black/40"
        aria-hidden="true"
      />

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6">
          <Link href="/" className="underline opacity-90 hover:opacity-100">
            ← Home
          </Link>
        </div>

        {/* LORE title with arcane glow */}
        <h1
          className={`${cinzelDecorative.className}
            text-center text-5xl md:text-7xl font-bold tracking-wide
            text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-300 to-pink-300
            glow-pulse`}
        >
          LORE
        </h1>

        <p className="mt-3 text-center text-white/85">
          Stories, places, and artifacts from Sonaris.
        </p>

        {/* Card grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* --- Riverside card --- */}
          <Link
            href="/lore/riverside"
            className="group block overflow-hidden rounded-xl border border-white/20
                       shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_rgba(0,200,255,0.12)] transition"
          >
            <div className="relative aspect-[16/7] w-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/riverside.jpg)" }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h2 className="text-2xl font-semibold">Riverside</h2>
                <p className="mt-1 text-white/80 text-sm">
                  Aria’s riverside memory and the first hint she may be a Cantor.
                </p>
              </div>
            </div>
          </Link>

          {/* --- Squeaky Pedal card --- */}
          <Link
            href="/lore/rails-to-remos-squeaky-pedal"
            className="group block overflow-hidden rounded-xl border border-white/20
                       shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_rgba(0,200,255,0.12)] transition"
          >
            <div className="relative aspect-[16/7] w-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/squeaky-pedal.jpg)" }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h2 className="text-2xl font-semibold">
                  Squeaky Pedal <em>(Rails to Remos)</em>
                </h2>
                <p className="mt-1 text-white/80 text-sm">
                  Three musicians ride the Sonorail to Remos for a final rehearsal before auditions.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
