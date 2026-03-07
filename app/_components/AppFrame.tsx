"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

export default function AppFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isGameRoute = pathname === "/game" || pathname.startsWith("/game/");

  return (
    <>
      {!isGameRoute && <NavBar />}
      <main className={isGameRoute ? "" : "pt-16"}>{children}</main>
    </>
  );
}
