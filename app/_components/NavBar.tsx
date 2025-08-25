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
            {/* REAP removed for now */}
          </div>
        </nav>
      </div>
      <div className="nav-hairline" />
    </div>
  );
}
