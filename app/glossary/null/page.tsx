// app/glossary/null/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Crimson_Pro } from "next/font/google";

// Co-located image import (same folder)
import NullImg from "./Null.png";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function NullGlossaryPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className={`min-h-screen text-white flex flex-col items-center justify-center px-4 py-12 ${crimsonPro.className}`}>
      {/* Backgrounds */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#0b1022] via-[#141a2f] to-[#0b1022]" aria-hidden />
      <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-b from-black/25 via-transparent to-black/40" aria-hidden />

      <section className="relative z-10 mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6">
          <Link href="/lore" className="underline opacity-90 hover:opacity-100">← Lore</Link>
        </div>

        <div className="max-w-2xl w-full flex flex-col items-center">
          {/* Clickable image for lightbox */}
          <button
            type="button"
            className="mb-6 w-full cursor-zoom-in"
            onClick={() => setOpen(true)}
            aria-label="Enlarge Null image"
          >
            <div className="mx-auto w-full max-w-2xl rounded-2xl overflow-hidden bg-black/20">
              <Image
                src={NullImg}
                alt="Null - a shadowy, humanoid figure in a blue-green void"
                width={1600}
                height={2000}
                sizes="(max-width: 768px) 100vw, 640px"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <p className="mt-2 text-sm text-white/60 text-center">(Click to enlarge)</p>
          </button>

          <h1 className="text-3xl font-bold mb-2 text-center">Null</h1>
          <p className="text-lg text-white/80 mb-6 text-center">
            A shadowy entity that devours sound and light, leaving silence and void in its wake.
          </p>

          <div className="bg-black/30 border border-white/10 rounded-lg p-6 w-full">
            <h2 className="text-xl font-semibold mb-2">Traits & Abilities</h2>
            <ul className="list-disc list-inside text-white/70 mb-4">
              <li>Appears as a shifting, ink-like silhouette with no clear features</li>
              <li>Feeds on sound and musical energy to grow stronger</li>
              <li>Weakens when exposed to strong, harmonized music or light. Enough focused energy can destroy it, often with devastating results</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Lore</h2>
            <p className="text-white/70">
              Nulls are rare but dangerous manifestations in Sonaris, often
              appearing in places where music has faded or been forcibly
              suppressed. Their origin is a mystery.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-w-5xl w-full rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={NullImg}
              alt="Null enlarged"
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
