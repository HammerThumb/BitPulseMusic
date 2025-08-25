"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: ["700"] });

export default function NavBar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full ${solid ? "nav-glass solid" : "nav-glass"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className={`${cinzel.className} text-xl tracking-wide text-white/90 hover:text-white`}>
          Bit Pulse
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="relative text-white/85 hover:text-white transition after:absolute after:-bottom-1 after:left-0
                       after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-indigo-400 after:to-cyan-300
                       hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </Link>
          <Link
            href="/lore"
            className="relative text-white/85 hover:text-white transition after:absolute after:-bottom-1 after:left-0
                       after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-violet-300
                       hover:after:w-full after:transition-all after:duration-300"
          >
            LORE
          </Link>
        </nav>
      </div>
      <div className="nav-hairline" />
    </header>
  );
}
