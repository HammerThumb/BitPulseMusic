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

        {/* Section subtitle */}
        <p className="mt-3 text-center text-white/85">
          Stories, places, and artifacts from Sonaris.
        </p>

        {/* --- BEFORE THE SWELL --- */}
        <h2
          className="mt-10 text-center text-sm uppercase tracking-[0.25em] text-white/70"
          aria-label="Before the Swell"
        >
          Before the Swell
        </h2>

        {/* Card grid: BEFORE THE SWELL */}
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {/* Riverside */}
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
                <h3 className="text-2xl font-semibold">Riverside</h3>
                <p className="mt-1 text-white/80 text-sm">
                  Aria’s riverside memory and the first hint she may be a Cantor.
                </p>
              </div>
            </div>
          </Link>

          {/* Squeaky Pedal */}
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
                <h3 className="text-2xl font-semibold">
                  Squeaky Pedal <em>(Rails to Remos)</em>
                </h3>
                <p className="mt-1 text-white/80 text-sm">
                  Three musicians ride the Sonorail to Remos for a final rehearsal before auditions.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/15" />

        {/* --- PRESENT DAY --- */}
        <h2
          className="mt-6 text-center text-sm uppercase tracking-[0.25em] text-white/70"
          aria-label="Present Day"
        >
          Present Day
        </h2>

        {/* Card grid: PRESENT DAY */}
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {/* Debassy */}
          <Link
            href="/lore/debassy"
            className="group block overflow-hidden rounded-xl border border-white/20
                       shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_rgba(0,200,255,0.12)] transition sm:col-span-2"
          >
            <div className="relative aspect-[16/7] w-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url(/images/debassy-hero-2400x1600.jpg)" }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h3 className="text-2xl font-semibold">Debassy</h3>
                <p className="mt-1 text-white/80 text-sm">
                  The Water Temple of Mirae—Ecko, Lysa, and Trebble claim the first page.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* --- Glossary Section --- */}
      <section className="relative z-10 mx-auto max-w-4xl px-4 py-12 mt-12 border-t border-white/15">
        <h2
          className="text-center text-2xl md:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-pink-300 to-indigo-200 mb-6"
        >
          Glossary
        </h2>
        <p className="text-center text-white/80 mb-8">
          Explore the world of Sonaris. Tap an entry to see its image or description.
        </p>
        <div className="flex items-center justify-center py-12">
          <span className="text-lg text-white/70 italic">Coming soon</span>
        </div>
      </section>
    </main>
  );
}
