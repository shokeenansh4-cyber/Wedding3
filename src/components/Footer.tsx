"use client";

export default function Footer() {
  return (
    <footer className="site-footer" id="footer" data-testid="site-footer">
      <div className="footer-mandala" />
      <div className="footer-inner" data-reveal>
        <span className="footer-om">ॐ</span>
        <h2 className="footer-names">Rishabh &amp; Ritul</h2>
        <div className="footer-divider">
          <span />
          <b>❧</b>
          <span />
        </div>
        <p className="footer-date">04 · 12 · 2026 &nbsp;•&nbsp; Dwarka, New Delhi</p>
        <p className="footer-note">
          With love and gratitude, we await your blessings.
        </p>
        <p className="footer-credit">Made with ♥ for our special day</p>
      </div>
    </footer>
  );
}
