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

      {/* Optional noise texture (safe to remove if you’re not using it) */}
      <div
        className="fixed inset-0 -z-10 opacity-15 pointer-events-none bg-[url('/images/noise.png')] bg-[length:300px_300px] mix-blend-overlay"
        aria-hidden="true"
      />

      {/* Responsive hero image (uses .hero-img ultrawide rule in globals.css) */}
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

      {/* Soft vignette to blend edges & boost contrast */}
      <div
        className="fixed inset-0 pointer-events-none bg-gradient-to-b from-black/25 via-transparent to-black/40"
        aria-hidden="true"
      />

      {/* Foreground content */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-24 text-center">
        <h1
          className={`${cinzelDecorative.className} 
            text-6xl md:text-8xl lg:text-9xl font-bold tracking-wide
            text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-300 to-pink-300
            glow-pulse`}
        >
          Bit Pulse
        </h1>

        {/* Intro copy – replace your current <p> block with this */}
<section className="relative z-10 text-center px-4">
  <h2 className="mt-4 text-lg md:text-xl text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
    Songs from Sonaris. Stories that glow in the dark.
  </h2>

  <div className="mt-6 max-w-2xl mx-auto space-y-4 text-lg leading-relaxed text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
    <p>
      <span className="font-bold text-cyan-300">Bit Pulse</span> is where music and story meet — a living
      archive of songs and tales from <span className="font-semibold text-purple-300">Sonaris</span>.
    </p>
    <p>
      Each track is a chapter, each release a landmark on the map.
    </p>
    <p>
      This site is both library and compass, keeping the journey connected as the world grows.
    </p>
  </div>
</section>


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


          {/* If you want to see the REAP button locally again later, 
             uncomment this block and it will only show in development.
          {process.env.NODE_ENV === 'development' && (
            <a
              href=\"/reap\"
              className=\"px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-semibold 
                         shadow-lg shadow-pink-500/30 transition\"
            >
              Open REAP
            </a>
          )} */}
        </div>
      </section>
    </main>
  );
}
