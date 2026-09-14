"use client";

export default function Family() {
  const families = [
    {
      side: "THE GROOM'S FAMILY",
      parents: ["Mrs. Kalyani Jha", "Mr. Rakesh Roshan Jha"],
    },
    {
      side: "THE BRIDE'S FAMILY",
      parents: ["Mrs. Pragya Jha", "Dr. Mithilesh K. Thakur"],
    },
  ];

  return (
    <section className="family-section" data-testid="family-section">
      <div className="family-mandala family-mandala-1" />
      <div className="family-mandala family-mandala-2" />

      <div className="family-content">
        <p className="section-kicker" data-reveal>
          WITH THE BLESSINGS OF
        </p>
        <h2 className="section-title" data-reveal style={{ ["--d" as string]: "0.1s" }}>
          Our Beloved Families
        </h2>
        <div className="section-divider" data-reveal style={{ ["--d" as string]: "0.2s" }}>
          <span />
          <b>❧</b>
          <span />
        </div>

        <div className="family-cards">
          {families.map((f, i) => (
            <div
              key={f.side}
              className="family-card"
              data-reveal
              style={{ ["--d" as string]: `${i * 0.15}s` }}
              data-testid={`family-card-${i}`}
            >
              <span className="family-card-om">ॐ</span>
              <p className="family-card-side">{f.side}</p>
              <div className="family-card-line" />
              {f.parents.map((p) => (
                <p key={p} className="family-card-name">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        <p className="family-quote" data-reveal style={{ ["--d" as string]: "0.3s" }}>
          “Two souls, two families, one beautiful journey —
          <br />
          united with love and blessings.”
        </p>
      </div>
    </section>
  );
}
