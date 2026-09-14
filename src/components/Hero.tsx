"use client";

export default function Hero() {
  return (
    <section className="hero-section theme-red" data-testid="hero-section">
      <div className="hero-mandala hero-mandala-1" />
      <div className="hero-mandala hero-mandala-2" />
      <div className="hero-mandala hero-mandala-3" />

      <div className="hero-top-ornament">
        <span>•</span>
        <span>•</span>
        <span>•</span>
        <div className="hero-lotus">❧</div>
        <div className="hero-ornament-line" />
      </div>

      <div className="hero-content">
        <div className="hero-om" style={{ ["--i" as string]: 0 }}>
          ॐ
        </div>

        <p className="hero-blessing" style={{ ["--i" as string]: 1 }}>
          With the blessings of our families
        </p>

        <div className="hero-small-divider" style={{ ["--i" as string]: 2 }} />

        <div className="hero-names" style={{ ["--i" as string]: 3 }}>
          <span className="hero-name">Rishabh</span>
          <span className="hero-ampersand">&amp;</span>
          <span className="hero-name">Ritul</span>
        </div>

        <p className="hero-invite-text" style={{ ["--i" as string]: 4 }}>
          Together with their families
        </p>

        <p className="hero-celebrate-text" style={{ ["--i" as string]: 5 }}>
          INVITE YOU TO CELEBRATE
        </p>

        <div className="hero-date" style={{ ["--i" as string]: 6 }}>
          <span>04</span>
          <div className="hero-date-middle">
            <span>DECEMBER</span>
            <span>2026</span>
          </div>
          <span>07:00 PM</span>
        </div>

        <div className="hero-divider" style={{ ["--i" as string]: 7 }}>
          <span />
          <b>❧</b>
          <span />
        </div>

        <div className="hero-scroll" style={{ ["--i" as string]: 8 }}>
          <span>SCROLL TO EXPLORE</span>
          <div className="hero-scroll-arrow">↓</div>
        </div>
      </div>

      <div className="hero-bottom-ornament">
        <div className="hero-ornament-line" />
        <div className="hero-lotus">❧</div>
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
    </section>
  );
}
