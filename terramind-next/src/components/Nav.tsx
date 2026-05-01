"use client";

import Image from "next/image";
import { useScrolled } from "@/hooks/useScrolled";

export default function Nav() {
  const scrolled = useScrolled();

  return (
    <nav id="topnav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <a href="#" className="brand" aria-label="TerraMind home">
          <Image
            src="/logo-icon.png"
            alt="TerraMind"
            width={36}
            height={30}
            className="brand-mark"
            priority
          />
          <span className="brand-name">TerraMind</span>
        </a>
        <div className="nav-links">
          <a href="#what">Platform</a>
          <a href="#who">Who it&rsquo;s for</a>
          <a href="#vision">Vision</a>
          <a href="#contact" className="nav-cta">
            Talk to us
          </a>
        </div>
      </div>
    </nav>
  );
}
