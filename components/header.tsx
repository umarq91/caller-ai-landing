"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About Us", href: "#about-us" },
  { name: "Features", href: "#features-section" },
  { name: "Voices", href: "#voice-section" },
];

export function Navbar() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 z-50 mx-auto max-w-fit",
        "rounded-full border border-white/10",
        "bg-black/80 backdrop-blur-md shadow-lg",
      )}
    >
      <nav className="flex items-center gap-2 px-4 py-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium",
              "text-neutral-400 hover:text-white",
              "hover:bg-white/10 transition-all",
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
