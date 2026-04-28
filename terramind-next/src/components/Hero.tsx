import Atmosphere from "./Atmosphere";
import HeroHeadline from "./HeroHeadline";
import HeroArtwork from "./HeroArtwork";

export default function Hero() {
  return (
    <section className="hero">
      <Atmosphere variant="meadow" grain />
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">
              <span className="dot" />
              Built in Aotearoa &nbsp;·&nbsp; First prototypes · June 10, 2026
            </div>
            <HeroHeadline />
            <p className="lede">
              TerraMind is an agricultural intelligence platform for the
              world&rsquo;s horticulture growers — orchards, vineyards, berry
              farms, and beyond. First prototypes ship June 10, 2026, from
              Aotearoa New Zealand.
            </p>
            <div className="cta-row">
              <a href="#contact" className="btn btn-primary">
                Talk to us <span className="arrow">→</span>
              </a>
              <a href="#what" className="btn btn-ghost">
                See the platform
              </a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </div>
    </section>
  );
}
