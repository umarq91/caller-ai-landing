"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Features", href: "#about-us" },
  { name: "Demos", href: "#voice-section" },
  { name: "Contact", href: "#contact-section" },

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
      <nav className="flex items-center gap-2 px-4 py-2" role="navigation" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium",
              "text-neutral-400 hover:text-white",
              "hover:bg-white/10 transition-all",
              "focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black",
            )}
            aria-label={`Navigate to ${item.name} section`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
