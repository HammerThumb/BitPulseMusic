// app/glossary/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Cinzel_Decorative, Crimson_Pro } from "next/font/google";

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: ["400", "700", "900"] });
const crimson = Crimson_Pro({ subsets: ["latin"], weight: ["400", "500", "700"] });

type CardProps = {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  children: React.ReactNode;
};

function GlossaryCard({ title, subtitle, image, alt, children }: CardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm max-w-2xl mx-auto">
      <div className="flex flex-col items-center py-8">
        <div className="relative w-80 h-80 mb-6">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <h3 className="text-3xl font-semibold mb-2 text-center">{title}</h3>
        {subtitle ? <p className="text-lg text-white/80 mb-4 text-center">{subtitle}</p> : null}
      </div>
      <div className={`${crimson.className} p-4 text-white/90 leading-relaxed`}>
        {children}
      </div>
    </article>
  );
}

export default function GlossaryPage() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0b1022] via-[#141a2f] to-[#0b1022]" />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-b from-black/25 via-transparent to-black/40" />

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6">
          <Link href="/" className="underline opacity-90 hover:opacity-100">
            ← Home
          </Link>
        </div>

        <h1
          className={`${cinzel.className} text-center text-5xl md:text-7xl font-bold tracking-wide
                      text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-300 to-pink-300`}
        >
          Glossary
        </h1>
        <p className="mt-3 text-center text-white/85">People, places, and things from Sonaris.</p>

        {/* GRID */}
        <div className="mt-10 flex justify-center">
          {/* Trebble (centered) */}
          <GlossaryCard
            title="Trebble"
            subtitle="Familiar of the Staff Temple of Mirae"
            image="/images/glossary/trebble.png"
            alt="Trebble, a bioluminescent pink axolotl with lilac frills, glowing softly."
          >
            <p>
              A one-of-a-kind familiar: a pale dawn-pink axolotl with lilac glow and translucent frills.
              Trebble “swims” through air, chirps in musical intervals, and can carry pages of the First Song within her.
              First appears in <em>Debassy</em> (the Water Temple).
            </p>
            <p className="mt-2 text-white/70">
              Traits: bioluminescent, curious, protective; can amplify tones and perform Cantor-like spells (slipstreams and bridges).
            </p>
            <div className="mt-3">
              <Link
                href="/lore/debassy"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-1.5 text-sm hover:border-white/40"
              >
                Read the Debassy chapter →
              </Link>
            </div>
          </GlossaryCard>
        </div>
      </section>
    </main>
  );
}
