# Global Citizens Community Center (GCCC) — Website

A static, multi-page website for the Global Citizens Community Center.
Built with plain **HTML, CSS, and JavaScript only** — no build step, no
framework, no backend required.

## File Structure

```
├── index.html                     # Homepage (hero, programs, rooms, SDG goals, campaigns, membership, etc.)
├── login.html                     # Sign in page
├── register.html                  # Create account page
├── forgot-password.html           # Password reset page
├── dashboard.html                 # Member dashboard
│
├── bake-sale-kit.html             # No-Bake Vegan/GF Bake Sale fundraiser landing page (5 "How It Works" steps)
├── bake-sale-fundraiser-kit.html  # Full fundraiser kit (self-styled, own internal tabs): checklists, event
│                                   #   guide, business outreach script, sponsor stickers, and the order form
│
├── emergency-funding.html         # "Need money now?" — emergency funding landing page, links out to
│                                   #   bake-sale-kit.html to start a fundraiser
├── global-coin-exchange-demo.html # Global Coin Exchange — visual concept demo of a community-impact
│                                   #   rewards system (no real money or crypto involved)
│
├── room-business-lounge.html      # Room pages (13 total) — each is a self-contained
├── room-dev-dojo.html             #   destination with its own content and a shared
├── room-emergency-services.html   #   country explorer widget
├── room-freedom-cove.html
├── room-global-cafe.html
├── room-global-counsel.html
├── room-global-exchange.html
├── room-glomart.html              #   now includes the "Let's Trade" community bartering section
├── room-health-spa.html
├── room-learning-center.html
├── room-magazine.html
├── room-ministry.html
├── room-rec-suite.html
├── room-studio.html
│
├── gccc.css                        # Shared stylesheet used by every page except index.html
├── countries-data.js               # Shared list of UN member states (used by country explorer)
├── country-explorer.js             # Renders the searchable country grid used on room pages
│
├── gccc-proposal.pdf               # Downloadable proposal document linked from the homepage
│
├── BACK OFFICE (staff/volunteer admin area)
├── ─────────────────────────────────────────
├── back-office-sign-in.html        # Staff/volunteer login gate (demo credentials, client-side only)
│                                   #   linked from the utility bar's "Back Office" dropdown on index.html
├── back-office-dashboard.html      # Back office dashboard: schedule, staff & employers, rooms,
│                                   #   training hub, staff lounge, announcements, and integrations —
│                                   #   has its own link back to index.html
│
├── EVENT GIVEAWAY SUITE (community event day — prize game set)
├── ─────────────────────────────────────────────────────────
├── virtual-glowbag.html            # Free "Virtual GlowBag" claim page (guide PDFs + music + resources +
│                                   #   emergency funding + Global Coin Exchange demo)
├── gccc_prize_wheel.html           # Spin-to-win prize wheel with QR redemption ticket (Cognito-linked)
├── save-the-planet-game.html       # SDG mini-game; links out to virtual-glowbag.html on completion
├── gccc_bingo_caller.html          # Spin-to-call bingo caller (draws items, no repeats until reset)
├── gccc_bingo_card_A.html          # Bingo Card A (unique term layout, QR redemption)
├── gccc_bingo_card_B.html          # Bingo Card B (unique term layout, QR redemption)
├── gccc_bingo_card_C.html          # Bingo Card C (unique term layout, QR redemption)
├── gccc_bingo_card_D.html          # Bingo Card D (unique term layout, QR redemption)
├── gccc_scratch_glowbag.html       # Scratch-off ticket — GlowBag prize
├── gccc_scratch_membership.html    # Scratch-off ticket — Membership prize
├── gccc_scratch_virtualcare.html   # Scratch-off ticket — Virtual Care prize
├── gccc_scratch_codingclass.html   # Scratch-off ticket — Coding Class prize
│
├── virtual-glowbag.pdf                     # Resource guide — currently the Hot Bread Kitchen
│                                            #   Community Resources 2020 booklet
├── free-5-day-music-journaling-retreat.pdf # The 5-Day Music & Journaling Retreat guide
├── dream-on.mp3                            # AnnoDominiNation track
├── death-row.mp3                           # AnnoDominiNation track
├── what-you-waiting-for.mp3                # AnnoDominiNation track
│
└── README.md                       # This file
```

> **Note on the GlowBag media files:** the GlowBag claim page pulls in *two*
> separate PDFs, not one combined file — `virtual-glowbag.pdf` (currently
> the Hot Bread Kitchen resource guide) and
> `free-5-day-music-journaling-retreat.pdf` (the retreat guide), plus three
> `.mp3` tracks. All five files now live in the **repo root** alongside every
> other page — there is no `assets/` or `assets/glowbag/` subfolder anymore.
> If you swap any file's content again later, keep the filenames exactly as
> they are — the page calls them by name.

Note: `index.html` has its own styles and scripts embedded directly in the
page (it doesn't use `gccc.css`), while every other page links out to the
shared `gccc.css`, `countries-data.js`, and `country-explorer.js` files.
The event giveaway suite (prize wheel, bingo, scratch tickets, GlowBag
page), the back office pages, `emergency-funding.html`, and
`global-coin-exchange-demo.html` are also self-contained — each carries
its own embedded styles and scripts rather than using `gccc.css`.

## How the Pages Connect

- The nav bar and footer on every page link to `index.html` and its
  section anchors (`#programs`, `#rooms`, `#goals`, `#campaigns`,
  `#membership`, `#summit`, `#donate`).
- `login.html`, `register.html`, and `dashboard.html` link to each other
  and to the room pages.
- All 13 room pages share the same header/footer and load
  `countries-data.js` + `country-explorer.js` for the searchable country
  grid.
- **"Start a Fundraiser"** buttons across the homepage, dashboard, and nav
  all point to `bake-sale-kit.html`, a landing page for the No-Bake
  Vegan/GF Bake Sale campaign. Its 5th step, **"Get Your Kit,"** links to
  `bake-sale-fundraiser-kit.html` — the full kit with checklists, an event
  guide, a business-outreach script, sponsor stickers, and the
  physical-kit order form. The landing page's own "Register" CTA hands
  off to our OneCause fundraising partner page.
- **Emergency funding:** `emergency-funding.html` is a standalone landing
  page ("Need money now?") reachable from `virtual-glowbag.html`'s "Money
  & Community Tools" section. Tapping its dollar button links out to
  `bake-sale-kit.html` to start a fundraiser; it also has a "Need
  sponsorship?" mailto link for sponsorship inquiries.
- **Global Coin Exchange:** `global-coin-exchange-demo.html` is a
  standalone visual concept demo (clearly labeled as a design demo, not a
  real financial product) reachable from `virtual-glowbag.html`'s "Money
  & Community Tools" section. It has no links out to the rest of the site.
- **Back office:** `index.html`'s fixed header has a slim utility bar
  above the main nav with a **"🔒 Back Office"** dropdown, containing two
  links — **Staff Sign In** (`back-office-sign-in.html`) and
  **Dashboard** (`back-office-dashboard.html`). This was added because
  the main nav bar was already full; it lives in `#site-header-wrap`
  above `#site-nav`. The sign-in page checks the entered staff ID and
  access code against a demo credential pair (`admin@gccc.org` /
  `GCCCAdmin2026!`) entirely in the browser, then redirects to
  `back-office-dashboard.html` on success. From the dashboard, the
  **"← Back to Home"** link in the header returns to `index.html`, and
  clicking the user avatar signs out back to `back-office-sign-in.html`.
  The dashboard's sidebar switches between its Dashboard, Schedule, Staff
  & Employers, Rooms, Training Hub, Staff Lounge, Announcements, and
  Integrations panels. This flow is only linked from `index.html` —
  `dashboard.html` (the member dashboard) doesn't reference it.
- **Event giveaway suite:** `save-the-planet-game.html` links to
  `virtual-glowbag.html` on completion. `virtual-glowbag.html` links out
  to `dashboard.html`, `index.html`, `gccc_prize_wheel.html`,
  `save-the-planet-game.html`, `gccc_bingo_caller.html`, all four bingo
  cards, all four scratch tickets, `emergency-funding.html`, and
  `global-coin-exchange-demo.html` — and pulls its two PDFs and three
  MP3s straight from the repo root (no subfolder). `gccc_prize_wheel.html`'s
  QR redemption ticket links out to the GCCC Cognito prize redemption form
  (`https://www.cognitoforms.com/gccc2/gcccprizeredemption3`). The bingo
  cards' QR codes and each scratch ticket's redemption flow point to that
  same Cognito form.
- **"Claim your free Virtual GlowBag"** links (in the homepage toast
  notifications, hero section, and dashboard resources list) point to
  `virtual-glowbag.html`, which serves the GlowBag PDF, streams the three
  campaign tracks, lists free wellness/budgeting/crisis-support
  resources, and links out to `emergency-funding.html` and
  `global-coin-exchange-demo.html` under its "Money & Community Tools"
  section.
- `room-glomart.html`'s **"Let's Trade"** section links to `register.html`
  to start bartering.

Everything is relative-path linked, so the site works the same whether it's opened locally or hosted from a subfolder — no absolute URLs to configure.

## Deploying on GitHub Pages

1. **Create a new repository** on GitHub (or use an existing one).
2. **Add all files** listed above to the root of the repository (or to a
   `/docs` folder — see step 4). There's no folder structure to preserve
   anymore — every file, including the two PDFs, three MP3s, and the two
   back office pages, sits flat in the same root as `index.html`.
   - Easiest way: drag all the files into your repo, or use git:
     ```bash
     git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
     cd YOUR-REPO
     # copy all the files into this folder
     git add .
     git commit -m "Add GCCC website"
     git push
     ```
3. **Enable GitHub Pages:**
   - Go to your repository on GitHub → **Settings** → **Pages** (left sidebar).
   - Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
   - Under **Branch**, choose `main` (or `master`) and folder `/ (root)` — or `/docs` if you placed the files in a `docs` folder instead.
   - Click **Save**.
4. **Wait a minute or two.** GitHub will give you a live URL, typically:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO/
   ```
5. **Visit the URL** — `index.html` loads automatically as the homepage, and every link/tab across the site should work. The back office can be reached via the "🔒 Back Office" dropdown in the utility bar, or directly at `back-office-sign-in.html`.

### Optional: Custom Domain

If you want a custom domain (e.g. `www.yourorg.org`) instead of the default `github.io` address:
1. Add a `CNAME` file to the repo root containing just your domain name.
2. Point your domain's DNS to GitHub Pages (GitHub's docs walk through the exact records: Settings → Pages → "Custom domain" has an in-app guide).

If you're using a custom domain, the GlowBag PDF will be served at:
```
https://YOUR-DOMAIN/virtual-glowbag.pdf
```
This is the exact URL the GlowBag flyer's QR code points to — as long as the file lands at that path (repo root), the QR code works with no further changes.

## Notes & Limitations

- **No backend:** Sign in, registration, and the member dashboard are front-end demos — they don't actually authenticate against a server or store real accounts. All fields are cosmetic/functional in the browser only.
- **Back office is also a front-end demo:** `back-office-sign-in.html` checks the staff ID and access code against a single hardcoded demo pair in its own JavaScript — it doesn't call a real server or store real staff accounts. Anyone who views the page source can see the demo credentials; don't rely on it to gate anything sensitive without adding real authentication first.
- **Global Coin Exchange is a visual demo only:** `global-coin-exchange-demo.html` displays a banner stating it's a design demo. No real money or cryptocurrency changes hands, no wallet or blockchain integration exists, and the "Preview" buttons don't submit anything anywhere.
- **`gccc-proposal.pdf`** is a large file (~1.1 MB) and **`virtual-glowbag.pdf`** plus its three linked `.mp3` tracks (~20 MB total) are also sizeable. GitHub Pages serves all of this fine, but if you ever rename or move these files, update the matching `href`/`src` references in `index.html`, `dashboard.html`, and `virtual-glowbag.html`.
- **External links** (SDG data sources, partner sites, the OneCause fundraiser signup, Jitsi video calling, etc.) require an internet connection and are outside this repo's control.
- **Donations:** General "Donate" buttons (subscriptions, GlowBags, the donate strip, and the four "Sponsor Her/His GlowBag" buttons) point to `https://www.paypal.com/paypalme/globalcitizens30`. The meal-specific donation tiers ($35–$25K) point to Save the Children, with a secondary link to No Kid Hungry. `emergency-funding.html`'s dollar button routes to `bake-sale-kit.html` to start a fundraiser rather than taking a donation directly.
- **Bake Sale Kit:** `bake-sale-kit.html` is an on-site toolkit/landing page for the campaign; the actual page registration still happens on our OneCause partner site (`p2p.onecause.com`), which the kit page links out to.
- **Rooms:** Each room page's "Enter Room" button and portal link scroll to that room's own content on the same page, since there's no separate external destination in this project for most rooms. A few homepage room cards (Missions, GCCC Resorts, Members Cove, Start Your Own Center, Volunteer, Raffle, Run For Office) still point to external placeholder/partner sites because there's no local page for them in this repo.

## Changelog

- **Fixed: white background on `index.html`.** The page's embedded
  `<style>` block used CSS custom properties (`var(--navy)`, `var(--teal)`,
  `var(--chalk)`, etc.) throughout, but never defined a `:root{}` block
  containing them. Undefined custom properties make the whole declaration
  they're used in invalid, so backgrounds silently fell back to browser
  default white. Added the missing `:root{}` variable definitions plus the
  base `body{}` rule at the top of `index.html`'s `<style>` block — no
  other code in the file was changed or removed.
- **Added: utility bar + Back Office dropdown on `index.html`.** The main
  nav bar was already full, so a new slim bar (`#utility-bar`) was added
  above it, wrapped together with `#site-nav` inside the previously-unused
  `#site-header-wrap` element. It holds a "🔒 Back Office" dropdown linking
  to `back-office-sign-in.html` and `back-office-dashboard.html`. Hero
  top padding was increased from 80px to 112px to account for the extra
  bar height so content doesn't sit behind the fixed header.
- **Added: "Money & Community Tools" section on `virtual-glowbag.html`.**
  New section between the games and the "More Free Resources" section,
  linking out to two new pages: `emergency-funding.html` and
  `global-coin-exchange-demo.html`.
- **Added: `emergency-funding.html`.** New standalone "Need money now?"
  landing page — tapping the dollar button links to `bake-sale-kit.html`
  to start a fundraiser; also includes a sponsorship inquiry mailto link.
- **Added: `global-coin-exchange-demo.html`.** New standalone visual
  concept demo of "Global Coin," a community-impact rewards system idea.
  Clearly labeled as a design demo — no real money, crypto, or backend
  involved.
