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
      {/* Optional noise texture (place a tiny PNG at /public/images/noise.png or remove this div) */}
      <div
        className="fixed inset-0 -z-10 opacity-15 pointer-events-none bg-[url('/images/noise.png')] bg-[length:300px_300px] mix-blend-overlay"
        aria-hidden="true"
      />

      {/* Responsive hero image */}
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/Hero_mobile.png" />
        <source media="(max-width: 1600px)" srcSet="/images/hero-desktop-1920x1080.png" />
        <img
  src="/images/hero-desktop-2560x1440.png"
  alt="Bit Pulse Hero Background"
  className="
    hero-img                            /* <-- new class hooks into globals.css */
    fixed inset-0 w-screen h-screen
    object-cover                        /* default: cinematic full-bleed */
    object-[center_10%]                 /* nudge crop on normal screens */
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
          className={`${cinzelDecorative.className} text-6xl md:text-8xl lg:text-9xl font-bold tracking-wide 
            drop-shadow-[0_0_20px_rgba(0,200,255,0.55)]`}
        >
          Bit Pulse
        </h1>

        <p className="mt-4 text-lg md:text-xl opacity-90">
          Songs from Sonaris. Stories that glow in the dark.
        </p>

        <div className="mt-8 inline-flex flex-wrap gap-3 justify-center">
          <a
            href="/lore"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold 
                       shadow-lg shadow-indigo-500/30 transition"
          >
            Explore LORE
          </a>
          <a
            href="/reap"
            className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-semibold 
                       shadow-lg shadow-pink-500/30 transition"
          >
            Open REAP
          </a>
        </div>
      </section>
    </main>
  );
}
