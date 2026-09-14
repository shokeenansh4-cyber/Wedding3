"use client";

import { useEffect, useState } from "react";

import Envelope from "@/components/Envelope";
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Countdown from "@/components/Countdown";
import Family from "@/components/Family";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";
import FloatingPetals from "@/components/FloatingPetals";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#open") {
      setOpened(true);
    }
  }, []);

  return (
    <main>
      {!opened ? (
        <Envelope onOpen={() => setOpened(true)} />
      ) : (
        <>
          <ScrollReveal />
          <FloatingPetals />

          <div id="home">
            <Hero />
          </div>
          <div id="invitation">
            <Invitation />
          </div>
          <div id="countdown">
            <Countdown />
          </div>
          <div id="family">
            <Family />
          </div>
          <div id="venue">
            <Venue />
          </div>
          <Footer />
        </>
      )}
    </main>
  );
}
