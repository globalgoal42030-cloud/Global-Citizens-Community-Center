# Global Citizens Community Center (GCCC)

A grassroots nonprofit web platform aligned with the UN 2030 Agenda and all 17 Sustainable Development Goals. GCCC connects members to community resources, mutual aid, learning, and a membership "universe" of rooms — plus a kids' version of the experience.

**Live site:** https://globalgoal42030-cloud.github.io/Global-Citizens-Community-Center/
**Custom domain (planned):** globalcitizenscommunitycenter.org

---

## Site map

### Entry points
| File | Purpose |
|---|---|
| `index.html` | Main landing page (adult site) |
| `kids-index.html` | Kids' version of the site, COPPA-compliant age-gated signup |
| `login.html` / `register.html` / `forgot-password.html` | Auth flow (front-end only, no backend yet) |
| `dashboard.html` | Member dashboard after signup/login |

### Member "rooms" (Global Hive universe)
| File | Room |
|---|---|
| `room-business-lounge.html` | Business Lounge |
| `room-dev-dojo.html` | Dev Dojo |
| `room-emergency-services.html` | Emergency Services |
| `room-freedom-cove.html` | Freedom Cove |
| `room-global-cafe.html` | Global Café |
| `room-global-counsel.html` | Global Counsel |
| `room-global-exchange.html` | Global Exchange |
| `room-glomart.html` | GloMart / Let's Trade marketplace |
| `room-health-spa.html` | Health Spa |
| `room-learning-center.html` | Learning Center |
| `room-magazine.html` | Magazine / Press Room |
| `room-ministry.html` | Ministry |
| `room-rec-suite.html` | Rec Suite |
| `room-studio.html` | Studio |

### GlowBag (emergency swag bag) system
| File | Purpose |
|---|---|
| `virtual-glowbag.html` | Interactive digital GlowBag — curated free resources for adults, kids, and pets (mindfulness apps, e-books, crisis lines, partner gifts, referral tool) |
| `virtual-glowbag.pdf` | Printable/PDF companion version |
| `founders_toolkit_glowbag_card_matched.html` | Founder's Toolkit GlowBag insert card |

### Prizes & engagement
| File | Purpose |
|---|---|
| `gccc_prize_wheel.html` | Prize wheel |
| `gccc_bingo_caller.html` | Bingo caller |
| `gccc_bingo_card_A.html` – `gccc_bingo_card_D.html` | Bingo cards |
| `gccc_scratch_glowbag.html`, `gccc_scratch_membership.html`, `gccc_scratch_virtualcare.html`, `gccc_scratch_codingclass.html` | Scratch-off ticket games |
| `save-the-planet-game.html` | SDG completion game |

### Crisis & emergency support
| File | Purpose |
|---|---|
| `gccc-crisis-hotline.html` | Crisis hotline / 988 + Crisis Text Line info |
| `emergency-funding.html` | Emergency funding resources |
| `harbor-emergency-housing.html` | Emergency housing resources |

### Media & publications
| File | Purpose |
|---|---|
| `gccc_global_hive_magazine.html` | Global Citizens Magazine — adult edition ("The Global Hive") |
| `gccc-proposal.pdf` | GCCC investor/partnership overview |
| `dream-on.mp3`, `death-row.mp3`, `what-you-waiting-for.mp3` | AnnoDominiNation partner music gift (embedded in GlowBag) |

### Business tools
| File | Purpose |
|---|---|
| `founders-toolkit.html` | Founder's Toolkit — templates for starting/running/growing a business |
| `bake-sale-fundraiser-kit.html`, `bake-sale-kit.html` | Bake sale fundraiser kit (co-branded with No Kid Hungry) |
| `global-coin-exchange-demo.html` | Global Coin exchange demo |

### Back office
| File | Purpose |
|---|---|
| `back-office-sign-in.html` | Back office sign-in |
| `back-office-dashboard.html` | Back office dashboard (LMS, HR/payroll, enrollment, docs) |

### Shared assets
| File | Purpose |
|---|---|
| `gccc.css` | Shared stylesheet |
| `countries-data.js`, `country-explorer.js` | Country/SDG data used across the site |

---

## Brand system

- **Colors:** navy `#0B1F3A`, teal `#1B8A8A`, gold `#E8B84B`, coral `#FF6B5B`, cream `#F5EFE2`
- **Fonts:** Bebas Neue (display), JetBrains Mono (UI), Newsreader (body)

---

## Outstanding technical work

- No backend yet — auth, dashboard, and referral flows are front-end only (see notes in `register.html` / `dashboard.html`)
- Member name persistence via `localStorage` not yet implemented
- GitHub Pages custom domain (`globalcitizenscommunitycenter.org`) not yet configured — no `CNAME` file in the repo
- No `.nojekyll` file — add one if any folder names start with `_` in the future, or if Jekyll processing ever interferes with raw HTML

## Deploying

This site is served via GitHub Pages from the `main` branch, root folder. In repo **Settings → Pages**, confirm:
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

No build step — it's static HTML/CSS/JS, so whatever is on `main` is what's live.
