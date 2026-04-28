"use client";

import { useReveal } from "@/hooks/useReveal";
import Atmosphere from "./Atmosphere";

export default function CTASection() {
  const titleRef = useReveal<HTMLHeadingElement>();
  const metaRef = useReveal<HTMLDivElement>();

  return (
    <div className="cta-wrap">
      <div id="contact" className="cta-section">
        <Atmosphere variant="dusk" grain />
        <div className="cta-content">
          <h2 ref={titleRef} className="cta-title reveal-blur">
            Growing fruit, vines, or berries — <em>anywhere?</em>
            <br />
            We want to hear from you.
          </h2>
          <div ref={metaRef} className="cta-meta reveal">
            <p>
              We&rsquo;re shipping first prototypes on June 10, 2026, and
              we&rsquo;re recruiting pilot orchards, vineyards, and growers in
              Aotearoa right now. If you&rsquo;d like to be one — or you&rsquo;re
              a grower anywhere who&rsquo;d want one of the next prototypes —
              please reach out.
            </p>
            <p>
              <a href="mailto:[email protected]">
                [email protected]
              </a>
              <br />
              <a href="#" target="_blank" rel="noopener">
                LinkedIn
              </a>
              <br />
              Christchurch · Aotearoa New Zealand
            </p>
            <a href="mailto:[email protected]" className="cta-btn">
              Email the founders <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
