// app/page.tsx
import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Gradient backdrop (behind the image) */}
      <div
        className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0b1022] via-[#141a2f] to-[#0b1022]"
        aria-hidden="true"
      />

      {/* Optional noise texture */}
      <div
        className="fixed inset-0 -z-10 opacity-15 pointer-events-none bg-[url('/images/noise.png')] bg-[length:300px_300px] mix-blend-overlay"
        aria-hidden="true"
      />

      {/* Responsive hero image (unchanged) */}
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/Hero_mobile.png" />
        <source media="(max-width: 1600px)" srcSet="/images/hero-desktop-1920x1080.png" />
        <img
          src="/images/hero-desktop-2560x1440.png"
          alt="Bit Pulse Hero Background"
          className="
            hero-img fixed inset-0 w-screen h-screen
            object-cover object-[center_10%]
            translate-y-2 md:translate-y-4 xl:translate-y-0
            transform origin-center
          "
        />
      </picture>

      {/* Soft vignette (unchanged) */}
      <div
        className="fixed inset-0 pointer-events-none bg-gradient-to-b from-black/25 via-transparent to-black/40"
        aria-hidden="true"
      />

      {/* Foreground content */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-24 text-center">
        {/* TITLE: stands alone, no blur behind it */}
        <h1
          className={`${cinzelDecorative.className}
            text-6xl md:text-8xl lg:text-9xl font-bold tracking-wide
            text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-300 to-pink-300
            glow-pulse`}
        >
          Bit Pulse
        </h1>

        {/* BODY: “invisible” glass for readability (uses .glass-vanish from globals.css) */}
        <div className="glass-vanish bp-edge-fade relative z-10 mx-auto mt-6 max-w-3xl rounded-3xl p-6 md:p-10">
          <h2 className="text-[1.375rem] sm:text-[1.5rem] text-white/95 font-extrabold leading-snug">
  Songs from Sonaris. Stories that glow in the dark.
          </h2>


          <p className="mt-6 text-xl text-white/95 font-bold">
            <span className="font-bold text-cyan-300">Bit Pulse</span> is where music and story meet — a living archive of
            songs and tales from <span className="font-semibold text-purple-300">Sonaris</span>.
          </p>

          <div className="mt-6 max-w-2xl mx-auto space-y-4 text-xl leading-relaxed text-white/95 font-bold">
            <p>Each track is a new chapter or short story told in non-linear fashion.</p>
            <p>This site is a library, keeping the journey connected as the world grows.</p>
          </div>

          {/* CTA */}
          <div className="mt-8 inline-flex flex-wrap gap-3 justify-center">
            <a
              href="/lore"
              className="btn-magic inline-flex items-center gap-2 rounded-2xl px-6 py-3
                         bg-[#0b1022]/80 hover:bg-[#111735]/80
                         text-white font-semibold transition
                         shadow-lg shadow-indigo-500/20"
            >
              <span className="text-white/95">Explore LORE</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
