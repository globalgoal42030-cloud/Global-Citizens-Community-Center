# 🌍 Global Citizens Community Center (GCCC)
### GlobalHive — A Civic Action & Advocacy Platform

> Aligned with the UN 2030 Agenda · 17 Sustainable Development Goals · New York

---

## Overview

GCCC is a multi-page static website and community platform connecting global citizens around civic action, fundraising, and advocacy. Fully static HTML — no build tools or server required. Deploy directly to GitHub Pages, Netlify, or any static host.

---

## File Structure

```
/
├── index.html                  # Main homepage (GlobalHive)
├── gccc-pages.html             # Member portal — Sign In, Dashboard, Rooms
├── fundraiser.html             # Fundraiser hub — campaign types & launch form
├── community-center.html       # Community Center app (member-gated)
├── back-office-login.html      # Back Office sign-in gate (staff login)
├── back-office-dashboard.html  # Back Office dashboard (session-protected)
└── README.md                   # This file
```

> ⚠️ There are **two** back-office files. They are separate pages that work together:
> - `back-office-login.html` — the sign-in screen. On success, redirects to the dashboard.
> - `back-office-dashboard.html` — the full staff app. Redirects back to login if no session is found.

---

## Pages

### `index.html` — Homepage
The main public-facing site. Includes:
- Live ticker, impact stats, and global data dashboard
- Programs: ESL, Job Readiness, Youth After School, Citizenship Prep, Community Dinners
- Global Rooms navigator
- All 17 SDG (Sustainable Development Goals) tracker
- World Data section (poverty, climate, conflict, health)
- Critical Threats panel (Doomsday Clock, AI Risk, etc.)
- 🌿 Sustainability Hour initiative
- Take Action / Campaigns section
- Global Summit info
- Membership tiers (Free → Ambassador → Org)
- Sponsor packages
- Plan & Game — interactive sustainability simulation
- **Nav links to:** `gccc-pages.html`, `fundraiser.html`, `community-center.html`, `back-office-login.html`

### `gccc-pages.html` — Member Portal
Single-page app with internal routing. Includes:
- Sign In / Join gate
- Member Dashboard
- Room detail pages (12+ topic rooms: Climate, Health, Education, etc.)
- External resource links per room
- **Routes to:** `index.html` (for home sections)

### `fundraiser.html` — Fundraiser Hub
Campaign launch page. Includes:
- Fundraiser type cards: Bake Sale, Walk/Run, Raffle, Live Stream, Corporate Match, Monthly Subscription
- How It Works — 4-step process
- Campaign submission form (name, goal, SDG alignment, story)
- **Links to:** `index.html`, `gccc-pages.html`, `community-center.html`, `back-office-login.html`

### `community-center.html` — Community Center App
Member-gated application (name + email + PIN). Includes:
- Room booking system
- Program schedule viewer
- Community announcements
- **Gate:** localStorage-based membership check
- **Links to:** `index.html`, `gccc-pages.html`, `fundraiser.html`, `back-office-login.html`

### `back-office-login.html` — Back Office Sign-In
Staff login page. Features:
- Staff/volunteer ID + access code form
- On successful login → stores session in `sessionStorage` → redirects to `back-office-dashboard.html`
- If session already exists → redirects straight to dashboard (no re-login needed)
- "← Back to main site" link → `index.html`

### `back-office-dashboard.html` — Back Office Dashboard
Full staff admin interface. Features:
- **Session guard:** redirects to `back-office-login.html` if no valid session
- **Dashboard** — announcements, quick stats, staff on-shift overview
- **Schedule** — weekly program grid (Mon–Fri)
- **Staff & Employers** — roster with roles, departments, shift status, training badges
- **Rooms** — room management with Employment Room detail view (schedule, equipment, issues tabs)
- **Training Hub** — staff certification and module tracker
- **Staff Lounge** — internal team message feed
- **Announcements** — org-wide notices
- **Sign Out** button — clears session, redirects to login
- **Sidebar links to:** `index.html`, `gccc-pages.html`, `community-center.html`, `fundraiser.html`

---

## Navigation & Auth Flow

```
index.html ──────────────────────────────────────────────────────┐
  ├── gccc-pages.html     (Sign In nav)                          │
  ├── fundraiser.html     (Start Fundraiser nav + hero CTA)      │
  ├── community-center.html (Community nav)                      │
  └── back-office-login.html (footer)                            │
                                                                  │
gccc-pages.html                                                   │
  └── index.html (navigate() routes home)                        │
                                                                  │
fundraiser.html                                                   │
  └── index.html / gccc-pages.html / community-center.html       │
      / back-office-login.html (footer)                          │
                                                                  │
community-center.html                                             │
  └── index.html / gccc-pages.html / fundraiser.html             │
      / back-office-login.html (footer)                          │
                                                                  │
back-office-login.html ──[on success]──► back-office-dashboard.html
  └── index.html (gate back link)         └── [no session] ──► back-office-login.html
                                           └── sidebar: index / gccc-pages
                                               / community-center / fundraiser
                                           └── Sign Out ──► back-office-login.html
```

---

## Deployment — GitHub Pages

1. **Create a new GitHub repository** (e.g., `gccc-website`)
2. **Upload all 6 HTML files + README.md** to the root of `main`
3. Go to **Settings → Pages → Source → Deploy from branch → main / (root)**
4. Click **Save**
5. Live at: `https://<your-username>.github.io/gccc-website/`

### Git CLI

```bash
git init
git add .
git commit -m "Initial GCCC site deployment"
git branch -M main
git remote add origin https://github.com/<your-username>/gccc-website.git
git push -u origin main
```

Then enable GitHub Pages in repository Settings.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Vanilla CSS (CSS custom properties) |
| Fonts | Google Fonts — Bebas Neue, Inter, DM Serif Display, JetBrains Mono |
| Scripting | Vanilla JavaScript (no frameworks) |
| Member auth | `localStorage` (community center gate) |
| Staff auth | `sessionStorage` (back office login → dashboard) |
| Hosting | Any static host — GitHub Pages, Netlify, Vercel |

---

## Design Tokens (Shared Color System)

```css
--navy:   #050D1A   /* Background */
--navy2:  #0A1628   /* Alternate dark bg */
--slate:  #122040   /* Card backgrounds */
--teal:   #00D4B4   /* Primary accent */
--gold:   #FFD166   /* Secondary accent / CTAs */
--chalk:  #F0F4FF   /* Primary text */
--mist:   #8A9BBE   /* Secondary text */
--coral:  #FF6B6B   /* Alert / Live indicator */
```

---

## Disclaimer

Not affiliated with the United Nations or any named partner organizations. All SDG references are for educational and advocacy purposes only.

---

© 2026 Global Citizens Community Center · GlobalHive · New York
