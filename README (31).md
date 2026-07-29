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
| `login.html` / `register.html` / `forgot-password.html` | Member auth flow — real accounts via Firebase Authentication (see **Authentication** below) |
| `dashboard.html` | Member dashboard; requires any signed-in account (no role needed) |

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

**Current GlowBag partners:**
- **TherapyBinder** (`therapybinder.com`) — IEP viewer/tracker, listed in both Adult and Kids GlowBag
- **Symplify** (`symplifyapp.com/free`) — free learning-style tool for parents/educators, listed in Kids GlowBag
- **The Great World Race** (`thegreatworldrace.com`) — 7-marathons/7-continents/7-days event, listed in Adult GlowBag
  - *Note:* `index.html` also references a fundraiser partner called "World's Greatest Race" tied to the No Kid Hungry bake sale — this looks like the same event under a different name and should be reconciled for consistent branding.
- **CAVI Caviar** (personal referral link via `loox.io`) — listed in both Adult and Kids GlowBag
  - ⚠️ **Time-sensitive:** currently showing a 24-hour "free 30g tin with $199+ purchase, code VIPCAVIDAY" promo. This needs to be swapped back to the standard "$15 off, $89 minimum" copy once the 24-hour window passes, or the card will advertise an expired deal.
- **FIFA World Cup Final Watch Party** (Global Citizen) — free lottery for tickets to the Central Park watch party, listed in both Adult and Kids GlowBag
  - ⚠️ **Time-sensitive:** lottery registration closes July 16, 2026 (event is July 19). Remove or update this card after that date.
- AnnoDominiNation (music gift), Insight Timer, Medito, Smiling Mind, UCLA Mindful, Project Gutenberg, Rocket Money, Empower, Lemontree Food Helpline — all in "More Free Resources"

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

### Intake forms
| File | Purpose |
|---|---|
| `membership-intake.html` | Single form handling all paid/free membership tiers, sponsorships, and event/volunteer signups — driven by a `?tier=` query param (`home-town-heroes`, `community-leaders`, `global-ambassadors`, `org-membership`, `sponsor`, `volunteer`, `sgt-tour`, `summit-2026`). Paid tiers gate the Submit button behind a PayPal payment step. Submits to Formspree. Most site-wide "Join Free" / "Create Free Account" links (nav, footers, room pages, GlowBag, Kids Club, referral links) intentionally link here with **no** `?tier=` set, so the visitor lands on the form and picks their own tier. The one exception is the Home Town Heroes card's own "Start for Free" button inside the `index.html` pricing table, which — like its sibling tier cards — deep-links straight to `?tier=home-town-heroes`. |
| `complaint-intake.html` | Staff-facing form (linked from the Back Office dropdown) for logging a community member's concern and the official channel it was referred to. Submits to Formspree. |

### Business tools
| File | Purpose |
|---|---|
| `founders-toolkit.html` | Founder's Toolkit — templates for starting/running/growing a business |
| `bake-sale-fundraiser-kit.html`, `bake-sale-kit.html` | Bake sale fundraiser kit (co-branded with No Kid Hungry) |
| `global-coin-exchange-demo.html` | Global Coin exchange demo |

### Staff & security portals
Both portals are role-gated on top of the same Firebase project members use — see **Authentication** below for how roles are assigned.

| File | Purpose | Requires role |
|---|---|---|
| `back-office-sign-in.html` | Back office sign-in | — |
| `back-office-dashboard.html` | Back office dashboard (LMS, HR/payroll, enrollment, docs); **Security** tab only visible to `admin` | `admin` or `staff` |
| `security-sign-in.html` | Security portal sign-in | — |
| `security-dashboard.html` | Security dashboard (Incident Log, Visitor Log, Access Control — currently static UI, not yet wired to Firestore) | `admin` or `security` |

### Shared assets
| File | Purpose |
|---|---|
| `gccc.css` | Shared stylesheet |
| `countries-data.js` | Shared list of the 193 UN member states used by the country explorer |
| `country-explorer.js` | Renders the searchable country grid + modal used on room pages; the modal's "Employment" tab links out to G-P's Globalpedia for country-level hiring/employment-law info |

### Civic education & complaint-routing resources
Linked from `virtual-glowbag.html`'s "Know Your Rights & Government Guide" section.

| File | Purpose |
|---|---|
| `gccc-civic-curriculum-expanded.docx` | Free downloadable guide: how government works at every level (international, federal, state, local, police) and how to file a complaint with the correct body |
| `gccc-country-routing-templates-192.zip` | One fill-in-the-blank routing worksheet per country, 192 of the 193 UN member states — **the United States is currently missing** from the zip; every other apparent gap (Russia, Türkiye, Viet Nam, North/South Korea, Côte d'Ivoire) is just a different file-name slug and is actually present. Worth adding a US template before this goes live, since GCCC is US-based. |

### Authentication
Real accounts via **Firebase Authentication** (Email/Password). One Firebase project backs all three surfaces — members, back office, and security — and access to the latter two is controlled by a `role` custom claim (`admin`, `staff`, or `security`) on the user's ID token. Regular members have no role claim, which is expected.

| File | Purpose |
|---|---|
| `firebase-config.js` | Client-side Firebase project config (public identifiers, safe to commit — see the file's own header comment) |
| `auth.js` | Shared helper loaded by every auth-aware page: sign in/up/out, password reset, `gcccWatchAuth`, `gcccRequireRole` (page gating), and friendly error messages |
| `set-user-role.js` | **Run locally, never deployed to the site.** Node script using the Firebase Admin SDK to grant/remove the `admin` / `staff` / `security` role on an account. Custom claims can only be set server-side, so this is the only way to promote an account. |
| `FIREBASE-SETUP.md` | Step-by-step guide: create the Firebase project, enable Email/Password sign-in, create the first accounts, and assign roles with `set-user-role.js` |

`set-user-role.js` requires a Firebase service-account key (`GOOGLE_APPLICATION_CREDENTIALS`) — **never commit that key file to this repo.** Everything else here is static client-side JS and deploys the same way as the rest of the site.

---

## Brand system

- **Colors:** navy `#0B1F3A`, teal `#1B8A8A`, gold `#E8B84B`, coral `#FF6B5B`, cream `#F5EFE2`
- **Fonts:** Bebas Neue (display), JetBrains Mono (UI), Newsreader (body)

---

## Outstanding technical work

- Auth is now real (Firebase) for members, back office, and security — see **Authentication** above and `FIREBASE-SETUP.md` for the one-time project setup + role assignment steps
- Member profile data collected at signup (country, referral source, referral code) isn't persisted anywhere yet — it's captured in `register.html` but needs a Firestore write
- The Security dashboard's Incident Log, Visitor Log, and Access Control tabs are static UI with no data behind them yet — needs a Firestore collection
- Password strength/verification emails, account deletion, and an admin user-management UI (vs. hand-creating accounts in the Firebase Console) aren't built yet
- GitHub Pages custom domain (`globalcitizenscommunitycenter.org`) not yet configured — no `CNAME` file in the repo
- No `.nojekyll` file — add one if any folder names start with `_` in the future, or if Jekyll processing ever interferes with raw HTML
- Reconcile "The Great World Race" vs. "World's Greatest Race" naming between `virtual-glowbag.html` and `index.html`
- Confirm repo **Settings → Pages** is pointed at `main` / root — previously the live site was showing README content instead of the site, which usually means Source/Branch is misconfigured or pointed at a stale branch

## Deploying

This site is served via GitHub Pages from the `main` branch, root folder. In repo **Settings → Pages**, confirm:
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

No build step — it's static HTML/CSS/JS, so whatever is on `main` is what's live.
