"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const weddingDate = new Date("2026-12-04T19:00:00+05:30");
  const difference = weddingDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  return (
    <section className="countdown-section theme-red" data-testid="countdown-section">
      <div className="countdown-mandala countdown-mandala-1" />
      <div className="countdown-mandala countdown-mandala-2" />

      <div className="countdown-content">
        <div className="countdown-ornament" data-reveal>
          ❧
        </div>

        <p className="countdown-kicker" data-reveal style={{ ["--d" as string]: "0.05s" }}>
          THE COUNTDOWN
        </p>

        <h2 className="countdown-title" data-reveal style={{ ["--d" as string]: "0.15s" }}>
          Until we begin our
          <br />
          <span>forever together</span>
        </h2>

        <div className="countdown-divider" data-reveal style={{ ["--d" as string]: "0.25s" }}>
          <span />
          <b>❧</b>
          <span />
        </div>

        <div className="countdown-grid">
          {countdownItems.map((item, index) => (
            <div
              key={item.label}
              className="countdown-item"
              data-reveal="scale"
              style={{ ["--d" as string]: `${0.3 + index * 0.1}s` }}
              data-testid={`countdown-${item.label.toLowerCase()}`}
            >
              <div className="countdown-number">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="countdown-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="countdown-date" data-reveal style={{ ["--d" as string]: "0.5s" }}>
          <span>FRIDAY</span>
          <b>04</b>
          <span>DECEMBER 2026</span>
          <i>7:00 PM</i>
        </div>

        <div className="countdown-bottom-ornament" data-reveal>
          • &nbsp; • &nbsp; •
        </div>
      </div>
    </section>
  );
}
