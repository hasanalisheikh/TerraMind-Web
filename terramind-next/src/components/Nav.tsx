"use client";

import { useScrolled } from "@/hooks/useScrolled";

export default function Nav() {
  const scrolled = useScrolled();

  return (
    <nav id="topnav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <a href="#" className="brand" aria-label="TerraMind home">
          <svg
            className="brand-mark"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="14" stroke="#2D5E3E" strokeWidth="1.4" />
            <circle
              cx="16"
              cy="16"
              r="9"
              stroke="#2D5E3E"
              strokeWidth="1.2"
              opacity="0.55"
            />
            <circle cx="16" cy="16" r="4" stroke="#1B2845" strokeWidth="1.4" />
            <circle cx="16" cy="16" r="1.5" fill="#1B2845" />
          </svg>
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
