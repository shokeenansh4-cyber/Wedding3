"use client";

import { useEffect, useState } from "react";

const DIYA =
  "https://static.prod-images.emergentagent.com/jobs/7465af2a-0e4a-4095-99bc-0ca49140c220/images/6323406a172ea22ddc50a539f2f13d966c8aabcedc4e6772c56b5d474f76c2ba.jpeg";

// Section ids in page order; lamps alternate 1 -> 3 -> 1 -> 3 ... per section
const SECTION_IDS = ["home", "invitation", "countdown", "family", "venue", "footer"];
const LAMP_COUNTS = [1, 3, 1, 3, 1, 3];

const TOPS = ["12%", "44%", "76%"];

export default function SideLamps() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setCount(LAMP_COUNTS[idx]);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const lamp = (i: number, side: "left" | "right") => {
    // middle lamp (index 1) shows when count >= 1; top/bottom only when count === 3
    const on = i === 1 ? count >= 1 : count === 3;
    return (
      <div
        key={i}
        className={`lamp-medallion ${on ? "is-on" : ""}`}
        style={
          {
            top: TOPS[i],
            ["--flicker-delay" as string]: `${i * 0.7 + (side === "right" ? 0.35 : 0)}s`,
          } as React.CSSProperties
        }
      >
        <span className="lamp-glow" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={DIYA} alt="" className="lamp-image" />
        <span className="lamp-frame" />
      </div>
    );
  };

  return (
    <>
      <div
        className="side-lamps side-lamps-left"
        aria-hidden="true"
        data-testid="side-lamps-left"
      >
        {[0, 1, 2].map((i) => lamp(i, "left"))}
      </div>
      <div
        className="side-lamps side-lamps-right"
        aria-hidden="true"
        data-testid="side-lamps-right"
      >
        {[0, 1, 2].map((i) => lamp(i, "right"))}
      </div>
    </>
  );
}
