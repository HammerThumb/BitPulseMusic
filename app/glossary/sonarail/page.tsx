// app/glossary/sonarail/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Crimson_Pro } from "next/font/google";
import SonarailImg from "@/public/images/glossary/Sonarail.png";

const crimsonPro = Crimson_Pro({ subsets: ["latin"], weight: ["400","500","700"] });

export default function SonarailGlossaryPage() {
  return (
    <main className={`min-h-screen text-white flex flex-col items-center justify-center px-4 py-12 ${crimsonPro.className}`}>
      {/* Backgrounds */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0b1022] via-[#141a2f] to-[#0b1022]" aria-hidden />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-b from-black/25 via-transparent to-black/40" aria-hidden />
      <div className="fixed inset-0 -z-10 pointer-events-none bp-noise" aria-hidden />

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6">
          <Link href="/lore" className="underline opacity-90 hover:opacity-100">← Lore</Link>
        </div>

        <div className="max-w-2xl w-full mx-auto flex flex-col items-center">
          {/* Artwork (portrait crop, protect the left side) */}
<div className="relative w-[28rem] h-[36rem] mb-6 rounded-3xl overflow-hidden">
  <Image
    src={SonarailImg}
    alt="The Sonarail — a three-deck, multi-car hover train gliding inches above glyph-lit rails."
    fill
    sizes="(max-width: 768px) 92vw, 28rem"
    className="object-cover object-left"
    // if you want finer control, use a specific focal point:
    // style={{ objectPosition: '15% 50%' }}  // 15% from the left, vertically centered
    priority
  />
</div>

          {/* Title & summary */}
          <h1 className="text-3xl font-bold mb-2 text-center">Sonarail</h1>
          <p className="text-lg text-white/80 mb-6 text-center">
            A continent-spanning, three-deck convoy that hovers inches above luminous glyph-rails—moving thousands
            across Sonaris with quiet resonance.
          </p>

          {/* Details */}
          <div className="bg-black/30 border border-white/10 rounded-lg p-6 w-full">
            <h2 className="text-xl font-semibold mb-2">Traits & Abilities</h2>
            <ul className="list-disc list-inside text-white/70 mb-4">
              <li>Can carry over 3000 passengers at once</li>
              <li>Hovers inches above glyph-lit rails, able to traverse diverse terrains</li>
              <li>The only form of travel that spans all of Sonaris</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Lore</h2>
            <p className="text-white/70">
              The Sonarail is a one of a kind transport system.  There is only one in existence, making it a unique symbol of connectivity across the continent.
            </p>

            <div className="mt-3">
              <Link
                href="/lore/rails-to-remos-squeaky-pedal"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-1.5 text-sm hover:border-white/40"
              >
                Read “Rails to Remos — Squeaky Pedal” →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
