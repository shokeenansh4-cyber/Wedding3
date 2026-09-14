# Rishabh & Ritul — Wedding Invitation Website

## Problem Statement
User owns a Next.js 16 wedding invitation site ("Rishabh & Ritul", 4 Dec 2026).
Ask: keep ALL info unchanged, greatly improve the UI, add wedding animations
(rose/flower petals), and build out the previously-empty sections.

## Tech Stack (IMPORTANT — non-standard)
- Next.js 16 (App Router, TypeScript) + React 19 + Tailwind v4, at repo ROOT `/app`.
- NOT create-react-app, NOT the FastAPI template. `/app/backend/server.py` is a
  placeholder only (health endpoint); the site needs no backend.

## Run / Build (READ THIS)
- Supervisor `frontend` program runs a PRODUCTION build via a proxy package.json at
  `/app/frontend/package.json` -> `cd /app && next start -p 3000 -H 0.0.0.0`.
- WHY production: Next 16 **dev (Turbopack)** needs an HMR websocket that returns 502
  through the preview ingress, which blocks hydration; and framer-motion/`motion`
  mount animations were stuck at opacity:0. Production build fixes both.
- Hot reload is OFF. After ANY code/CSS change you MUST rebuild:
    cd /app && ./node_modules/.bin/next build && sudo supervisorctl restart frontend

## Key Architecture Decisions
- Removed dependency on framer-motion/`motion` for entrances (buggy in this env).
- Entrances now: pure CSS keyframes + `ScrollReveal.tsx` (IntersectionObserver adds
  `.is-visible` to `[data-reveal]`, with a 2.5s safety net that force-reveals all).
- Fonts loaded via Google Fonts <link> in layout.tsx (Great Vibes, Cormorant
  Garamond, Montserrat, Playfair Display).
- All new styles live in `/app/src/app/enhancements.css` (imported after globals.css).

## Implemented (2026-06)
- Envelope intro (tap-to-open) -> full one-page site.
- Sections: Hero, Invitation, Countdown (live), Family (both families),
  Venue (QR), Footer. Global: FloatingPetals (rose/gold).
- Verified by testing agent: 100% frontend pass.

## Changes (2026-06, v2)
- REMOVED at user request: Celebrations/Events section, Gallery ("Our Story in
  Frames"), RSVP ("Will You Join Us"), Navbar (site is scroll-only now), and the
  MusicPlayer. Component files deleted: Events.tsx, Gallery.tsx, RSVP.tsx,
  Navbar.tsx, MusicPlayer.tsx.

## Wedding Info (must stay correct)
- Names: Rishabh & Ritul. Date: Friday 04 December 2026, 7:00 PM.
- Venue: Riwaaz Banquet & Party Lawn, Sector 07, Dwarka, New Delhi 110045.
- Families: Mrs. Kalyani Jha & Mr. Rakesh Roshan Jha; Mrs. Pragya Jha & Dr. Mithilesh K. Thakur.

## MOCKED / Placeholders
(RSVP, Music, Events, Gallery were removed in v2 — no longer applicable.)

## Backlog / Next
- P1: Optional enhancements the user may want later (photo slideshow, venue map
  embed, guest wishes wall).

## Bug Fix (2026-06, v3)
- FIXED blank-page bug: ScrollReveal v1 scanned [data-reveal] once at mount;
  Countdown returned null until its timer initialized, so its reveal children
  mounted after the scan and stayed invisible. Fix: ScrollReveal now uses
  MutationObserver (catches late-mounted nodes) + fresh 2.5s safety-net query;
  Countdown renders '00' placeholders immediately instead of returning null.
  Verified by testing agent iteration_2 (100% pass).

## Mobile Support (2026-06, v4)
- Added mobile polish in enhancements.css: halves petals under 640px, tighter
  family/footer padding, smaller section titles, html/body overflow-x hidden.
- globals.css already had breakpoints (600/650/700px) for envelope/hero/
  invitation/countdown/venue.
- Verified at 390x844, 768x1024, 1440x900 by testing agent iteration_3: 100%
  pass, no horizontal overflow at any breakpoint.

## Side Diya Lamps (2026-06, v5)
- Added SideLamps.tsx: 3 circular gold-framed diya medallions per side (left &
  right), fixed position, warm flickering glow + gentle sway, pointer-events
  none, z-index 5, hidden under 1150px. Diya image is AI-generated (JPEG, full
  scene) framed in circles. Verified iteration_4: 100% pass.

## Lamp Visibility Fix (2026-06, v6)
- Bug: user reported lamps not showing — they were hidden under 1150px viewport
  (user's laptop CSS width likely < 1150 due to display scaling). Fix: lamps now
  visible down to 900px (88px medallions 900-1300px, 118px above), hidden only
  under 900px. Verified iteration_5 across 820/1024/1100/1440px: 100% pass.
