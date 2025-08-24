export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Responsive hero image */}
      <picture>
        {/* Mobile portrait */}
        <source
          media="(max-width: 768px)"
          srcSet="/images/Hero_mobile.png"
        />
        {/* Medium desktop/laptop */}
        <source
          media="(max-width: 1600px)"
          srcSet="/images/hero-desktop-1920x1080.png"
        />
        {/* Large displays */}
        <img
          src="/images/hero-desktop-2560x1440.png"
          alt="Bit Pulse Hero Background"
          className="fixed inset-0 h-screen w-screen object-cover"
        />
      </picture>

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/55" aria-hidden="true" />

      {/* Foreground content */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Bit Pulse</h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          Songs from Sonaris. Stories that glow in the dark.
        </p>
        <div className="mt-8 inline-flex gap-3">
          <a href="/lore" className="px-5 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
            Explore LORE
          </a>
          <a href="/reap" className="px-5 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
            Open REAP
          </a>
        </div>
      </section>
    </main>
  );
}
