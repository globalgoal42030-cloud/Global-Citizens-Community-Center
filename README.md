# 🌍 GCCC — Global Citizens Community Center
### Unified Web Build

A single-file, self-contained web application for the **Global Citizens Community Center** — a New York–based nonprofit hub serving immigrants, refugees, and global citizens through language, career, and community programs aligned with the UN's 17 Sustainable Development Goals (SDGs).

---

## Overview

`index.html` is a fully self-contained web build that bundles six originally separate HTML pages into one file. All original markup, styling, and script logic is preserved. The unified wrapper adds cross-page navigation and rewrites internal filename links (e.g. `back-office-login.html`) into dynamically generated blob URLs so links work seamlessly inside a single file.

The file loads each page as a base64-encoded payload and renders them inside an `<iframe>` — no server, no build step, no dependencies.

---

## Pages Included

| Nav Label | Description |
|---|---|
| **Home** | Public-facing homepage with SDG dashboard, programs, impact stats, campaigns, and fundraiser info |
| **Sign In / Member Portal** | Member authentication and portal entry |
| **Member Dashboard** | Dashboard for logged-in community members |
| **Start a Fundraiser** | Fundraiser creation flow |
| **Back Office Sign In** | Staff/admin login gate |
| **Back Office Dashboard** | Internal admin dashboard |

---

## Features

- **Doomsday Clock banner** — live analog clock and digital countdown referencing the Bulletin of Atomic Scientists' 85-seconds-to-midnight warning
- **Sustainability Hour** — global movement section with live pledge counter, countdown timer, and sign-up modal for the Sustainability Global Tour
- **17 SDG Goals grid** — color-coded, linked to official UN SDG pages
- **World Data section** — key global metrics (poverty rate, hunger, warming, literacy, clean water, clean energy)
- **Economic Data by Region** — World Bank GNI comparisons with animated bar charts
- **Critical Threats section** — existential risk cards sourced from the Bulletin of Atomic Scientists
- **Global Citizen Campaigns** — active petition and action campaigns with progress bars
- **GCCC Rooms** — 20+ specialized community spaces (Learning Center, Business Lounge, Global Auditorium, Dev Dojo, Freedom Cove, GloMart, etc.)
- **Membership tiers** — Free through $350,000 organizational tiers
- **Sponsorship packages** — Bronze through Platinum levels
- **GlowBags** — emergency care bag sponsorship program for people in crisis
- **Donations** — tabbed donation panels with impact descriptions and subscription options
- **GCCC Live Network** — embedded Jitsi Meet video room with PIN-gated access
- **SDG Guardian Game** — browser-based game where players complete all 17 SDGs before a countdown clock reaches zero
- **Start Your Own Center** — step-by-step guide to launching a GCCC chapter
- **Sustainability Global Tour** — 7-continent fundraiser in partnership with No Kid Hungry

---

## Tech Stack

- **Pure HTML/CSS/JavaScript** — zero frameworks, zero build tools
- **Jitsi Meet** (external CDN) — live video rooms
- **Google Fonts** — Bebas Neue, Inter, DM Serif Display, Playfair Display, JetBrains Mono
- **Canvas API** — animated analog Doomsday Clock and globe rendering
- **Base64 page encoding** — all sub-pages embedded as `text/plain` script tags and decoded at runtime into blob URLs

---

## Demo Credentials

The unified build includes demo login credentials for testing the gated pages. These are injected into the Back Office and Member Portal login forms and match the demo accounts from the original `gccc-complete` reference build.

---

## Usage

Open `gccc-unified.html` directly in any modern browser. No server required.

```bash
# Clone and open
git clone https://github.com/your-org/gccc-unified.git
open gccc-unified/index.html
```

Or serve locally for a cleaner experience:

```bash
npx serve .
# then visit http://localhost:3000/index.html
```

---

## File Structure

```
index.html               ← Everything. One file.
README.md
```

The original source files this unified build was compiled from:

```
home.html
gccc-pages.html          ← Sign In / Member Portal
community-center.html    ← Member Dashboard
fundraiser.html
back-office-login.html
back-office-dashboard.html
```

---

## Partners & Affiliations

Inspired by and aligned with:

- [un.org](https://un.org) — United Nations
- [globalcitizen.org](https://globalcitizen.org)
- [globalgoals.org](https://globalgoals.org)
- [thebulletin.org](https://thebulletin.org) — Bulletin of Atomic Scientists
- [ourworldindata.org](https://ourworldindata.org)
- [worldbank.org](https://worldbank.org)
- National Action Network
- No Kid Hungry
- NYPD · HDS · Brooklyn Family Court · Family Affair Organization · Four Walls Entertainment

*GCCC is not affiliated with the United Nations or any named organizations. Educational and advocacy use only.*

---

## License

© 2026 Global Citizens Community Center · Global Hive · New York  
All rights reserved. Contact the organization for licensing and reuse inquiries.
