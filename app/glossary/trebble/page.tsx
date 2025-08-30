// app/glossary/Trebble/page.tsx
"use client";

import { useState } from "react";
import TrebbleImg from "./Trebble.png";
import Link from "next/link";
import Image from "next/image";
import { Crimson_Pro } from "next/font/google";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function TrebbleGlossaryPage() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className={`min-h-screen text-white flex flex-col items-center justify-center px-4 py-12 ${crimsonPro.className}`}
    >
      {/* Backgrounds */}
      <div
        className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0b1022] via-[#141a2f] to-[#0b1022]"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-b from-black/25 via-transparent to-black/40"
        aria-hidden="true"
      />

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6">
          <Link href="/lore" className="underline opacity-90 hover:opacity-100">
            ← Lore
          </Link>
        </div>

        <div className="max-w-2xl w-full flex flex-col items-center">
          {/* Clickable image for lightbox */}
          <div className="mb-6 w-full cursor-pointer" onClick={() => setOpen(true)}>
            <div className="mx-auto w-full max-w-2xl rounded-2xl overflow-hidden bg-black/20">
              <Image
                src={TrebbleImg}
                alt="Trebble, a bioluminescent pink axolotl with lilac frills, glowing softly."
                width={1600}
                height={2000}
                sizes="(max-width: 768px) 100vw, 640px"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <p className="mt-2 text-sm text-white/60 text-center">
              (Click to enlarge)
            </p>
          </div>

          <h1 className="text-3xl font-bold mb-2 text-center">Trebble</h1>
          <p className="text-lg text-white/80 mb-6 text-center">
            A one-of-a-kind familiar: a pale dawn-pink axolotl with lilac glow and translucent frills.
          </p>

          <div className="bg-black/30 border border-white/10 rounded-lg p-6 w-full">
            <h2 className="text-xl font-semibold mb-2">Traits & Abilities</h2>
            <ul className="list-disc list-inside text-white/70 mb-4">
              <li>Bioluminescent, curious, and protective</li>
              <li>Can use Cantor-like magic</li>
              <li>Swims through the air as if it were water</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Lore</h2>
            <p className="text-white/70">
              Trebble first appears in Debassy, the Staff Temple of Mirae.
            </p>
            <div className="mt-3">
              <Link
                href="/lore/debassy"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-1.5 text-sm hover:border-white/40"
              >
                Read the Debassy chapter →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-w-5xl w-full rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()} // stop close when clicking inside
          >
            <Image
              src={TrebbleImg}
              alt="Trebble enlarged"
              width={2400}
              height={3000}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
