"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cinzel_Decorative } from "next/font/google";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative group text-sm uppercase tracking-wider"
    >
      <span>{children}</span>
      <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-0 bg-white/80 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export default function NavBar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className={`nav-glass ${solid ? "solid" : ""}`}>
        <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 text-white">
          <Link
            href="/"
            className={`${cinzelDecorative.className} text-xl tracking-wide transition-opacity hover:opacity-90`}
            aria-label="Bit Pulse home"
          >
            Bit Pulse
          </Link>

          <div className="ml-auto flex items-center gap-5">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/lore">Lore</NavLink>
            <NavLink href="/music">Music</NavLink>
            <a
  href="https://ko-fi.com/bit_pulse"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-xl px-3 py-2
             border border-white/15 text-white/80 hover:text-white
             hover:border-white/35 hover:bg-white/5 transition"
  aria-label="Support on Ko-fi"
>
  {/* tiny cup icon */}
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M3 7h13v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V7Zm13 1h3a3 3 0 0 1 0 6h-2.1a6.97 6.97 0 0 0 .9-3V8Zm-9 9h4a4 4 0 0 0 4-4V9H4v4a4 4 0 0 0 4 4Z"/>
  </svg>
  <span className="hidden sm:inline">Support</span>
</a>

            {/* REAP removed for now */}
          </div>
        </nav>
      </div>
      <div className="nav-hairline" />
    </div>
  );
}
