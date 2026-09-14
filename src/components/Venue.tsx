"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const venueName = "Riwaaz Banquet & Party Lawn";
const venueAddress = "Sector 07, Dwarka, New Delhi 110045";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Riwaaz+Banquet+%26+Party+Lawn%2C+Sector+07%2C+Dwarka%2C+New+Delhi+110045";

export default function Venue() {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    const generateQR = async () => {
      try {
        const generatedQR = await QRCode.toDataURL(mapsUrl, {
          width: 420,
          margin: 2,
          errorCorrectionLevel: "H",
        });
        setQrCode(generatedQR);
      } catch (error) {
        console.error("Unable to generate QR code:", error);
      }
    };
    generateQR();
  }, []);

  return (
    <section className="venue-section theme-red" data-testid="venue-section">
      <div className="venue-mandala venue-mandala-1" />
      <div className="venue-mandala venue-mandala-2" />
      <div className="venue-mandala venue-mandala-3" />

      <div className="venue-top-ornament" data-reveal>
        <span>•</span>
        <span>•</span>
        <div className="venue-lotus">❧</div>
        <div className="venue-ornament-line" />
      </div>

      <div className="venue-content">
        <p className="venue-kicker" data-reveal style={{ ["--d" as string]: "0.05s" }}>
          JOIN US AT
        </p>

        <h2 className="venue-title" data-reveal style={{ ["--d" as string]: "0.15s" }}>
          The Celebration
        </h2>

        <div className="venue-divider" data-reveal style={{ ["--d" as string]: "0.25s" }}>
          <span />
          <b>❧</b>
          <span />
        </div>

        <div className="venue-card" data-reveal="scale" style={{ ["--d" as string]: "0.3s" }}>
          <div className="venue-information">
            <div className="venue-icon">
              <MapPin size={27} strokeWidth={1.3} />
            </div>
            <p className="venue-label">WEDDING VENUE</p>
            <h3>{venueName}</h3>
            <div className="venue-gold-line" />
            <p className="venue-address">{venueAddress}</p>
            <p className="venue-city">DELHI</p>

            <a
              className="venue-directions"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="venue-directions-link"
            >
              <Navigation size={16} strokeWidth={1.5} />
              <span>GET DIRECTIONS</span>
              <ExternalLink size={13} strokeWidth={1.5} />
            </a>
          </div>

          <div className="venue-qr-area">
            <div className="venue-qr-frame">
              {qrCode ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={qrCode}
                  alt="QR code for wedding venue directions"
                  className="venue-qr"
                />
              ) : (
                <div className="venue-qr-loading">
                  <span />
                </div>
              )}
            </div>
            <p className="venue-qr-title">FIND YOUR WAY</p>
            <p className="venue-qr-text">
              Scan the QR code
              <br />
              for directions
            </p>
          </div>
        </div>

        <div className="venue-date" data-reveal style={{ ["--d" as string]: "0.4s" }}>
          <span>FRIDAY</span>
          <b>04</b>
          <span>DECEMBER 2026</span>
          <i>07:00 PM</i>
        </div>

        <div className="venue-bottom-ornament">
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
      </div>
    </section>
  );
}
