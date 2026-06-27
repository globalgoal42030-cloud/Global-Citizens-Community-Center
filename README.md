# GCCC — Global Citizens Community Center
### Member Dashboard (`gccc-pages.html`)

This file is the **Member Dashboard** page for the Global Citizens Community Center (GCCC) — a community organization aligned with all 17 UN Sustainable Development Goals (SDGs), operating across 14 themed rooms.

---

## Overview

`gccc-pages.html` is a single-file HTML application that serves as the member-facing portal for the GCCC platform. It includes the landing experience, all 14 SDG room pages, and a full member dashboard — all rendered dynamically from a shared JavaScript data structure.

---

## Features

- **14 SDG-Aligned Rooms** — dynamically rendered from a rooms data array, each with its own theme, accent color, features, and resources
- **Member Dashboard** — six tabbed sections:
  - Overview
  - Activity
  - Donation History
  - Event Calendar
  - GlowBag Sponsorship
  - Video Call
- **Membership Tiers**
  - 🏠 Home Town Heroes (Free)
  - 🦸 Metropolis Avengers
  - 🌐 Global Guardians
  - 🏆 World Champions
- **GlowBag Program** — emergency care packages (Woman's, Man's, Girl's, and Boy's bags) provided free to people in crisis
- **Responsive navigation** with smooth scroll and mobile hamburger menu
- **Single-file architecture** — no build tools or dependencies required; open directly in a browser

---

## Usage

Open `gccc-pages.html` directly in any modern browser — no server required.

This file is designed to be embedded as the **Member Dashboard** tab inside the GCCC unified build (`gccc-unified.html`), but it also runs standalone.

---

## Part of the GCCC Project

The full GCCC website consists of several files working together:

| File | Purpose |
|------|---------|
| `gccc-unified.html` | Unified wrapper that embeds all pages via base64 |
| `gccc-pages.html` | Member dashboard (this file) |
| `community-center.html` | Community center dashboard |
| `fundraiser.html` | Fundraiser / campaign page |
| `back-office-login.html` | Staff/admin login |
| `back-office-dashboard.html` | Staff/admin dashboard |

The live site is hosted at [globalcitizencommunitycenter.univer.se](https://globalcitizencommunitycenter.univer.se).

---

## Partners & Integrations

- Global Scholars School
- Global Cafe
- NYPD Family Benches
- HDS
- Brooklyn Family Court
- Family Affair Organization

---

## SDGs Supported

This project is aligned with all **17 United Nations Sustainable Development Goals**.

---

## License

© 2026 Global Citizens Community Center. All rights reserved.
