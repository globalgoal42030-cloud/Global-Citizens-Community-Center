# Global Citizens Community Center (GCCC) — Website# Global Citizens Community Center (GCCC) — Website

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
│                                   #   linked from the "Back Office" tab in index.html's nav bar
├── back-office-dashboard.html      # Back office dashboard: schedule, staff & employers, rooms,
│                                   #   training hub, staff lounge, announcements, and integrations —
│                                   #   has its own link back to index.html
│
├── EVENT GIVEAWAY SUITE (community event day — prize game set)
├── ─────────────────────────────────────────────────────────
├── virtual-glowbag.html            # Free "Virtual GlowBag" claim page (guide PDFs + music + resources)
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
page) and the back office pages are also self-contained — each carries
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
- **Back office:** `index.html` has a **"Back Office"** tab in its nav bar
  linking to `back-office-sign-in.html`. The sign-in page checks the
  entered staff ID and access code against a demo credential pair
  (`admin@gccc.org` / `GCCCAdmin2026!`) entirely in the browser, then
  redirects to `back-office-dashboard.html` on success. From the
  dashboard, the **"← Back to Home"** link in the header returns to
  `index.html`, and clicking the user avatar signs out back to
  `back-office-sign-in.html`. The dashboard's sidebar switches between
  its Dashboard, Schedule, Staff & Employers, Rooms, Training Hub, Staff
  Lounge, Announcements, and Integrations panels. This flow is only
  linked from `index.html` — `dashboard.html` (the member dashboard)
  doesn't reference it.
- **Event giveaway suite:** `save-the-planet-game.html` links to
  `virtual-glowbag.html` on completion. `virtual-glowbag.html` links out
  to `dashboard.html`, `index.html`, `gccc_prize_wheel.html`,
  `save-the-planet-game.html`, `gccc_bingo_caller.html`, all four bingo
  cards, and all four scratch tickets — and pulls its two PDFs and three
  MP3s straight from the repo root (no subfolder). `gccc_prize_wheel.html`'s
  QR redemption ticket links out to the GCCC Cognito prize redemption form
  (`https://www.cognitoforms.com/gccc2/gcccprizeredemption3`). The bingo
  cards' QR codes and each scratch ticket's redemption flow point to that
  same Cognito form.
- **"Claim your free Virtual GlowBag"** links (in the homepage toast
  notifications, hero section, and dashboard resources list) point to
  `virtual-glowbag.html`, which serves the GlowBag PDF, streams the three
  campaign tracks, and lists free wellness/budgeting/crisis-support
  resources.
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
5. **Visit the URL** — `index.html` loads automatically as the homepage, and every link/tab across the site should work. The back office can be reached directly at `back-office-sign-in.html`.

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
- **`gccc-proposal.pdf`** is a large file (~1.1 MB) and **`virtual-glowbag.pdf`** plus its three linked `.mp3` tracks (~20 MB total) are also sizeable. GitHub Pages serves all of this fine, but if you ever rename or move these files, update the matching `href`/`src` references in `index.html`, `dashboard.html`, and `virtual-glowbag.html`.
- **External links** (SDG data sources, partner sites, the OneCause fundraiser signup, Jitsi video calling, etc.) require an internet connection and are outside this repo's control.
- **Donations:** General "Donate" buttons (subscriptions, GlowBags, the donate strip, and the four "Sponsor Her/His GlowBag" buttons) point to `https://www.paypal.com/paypalme/globalcitizens30`. The meal-specific donation tiers ($35–$25K) point to Save the Children, with a secondary link to No Kid Hungry.
- **Bake Sale Kit:** `bake-sale-kit.html` is an on-site toolkit/landing page for the campaign; the actual page registration still happens on our OneCause partner site (`p2p.onecause.com`), which the kit page links out to.
- **Rooms:** Each room page's "Enter Room" button and portal link scroll to that room's own content on the same page, since there's no separate external destination in this project for most rooms. A few homepage room cards (Missions, GCCC Resorts, Members Cove, Start Your Own Center, Volunteer, Raffle, Run For Office) still point to external placeholder/partner sites because there's no local page for them in this repo.
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
│                                   #   linked from the nav bar + footer on index.html and dashboard.html
├── back-office-dashboard.html      # Back office dashboard: schedule, staff & employers, rooms,
│                                   #   training hub, staff lounge, announcements, and integrations
│
├── EVENT GIVEAWAY SUITE (community event day — prize game set)
├── ─────────────────────────────────────────────────────────
├── virtual-glowbag.html            # Free "Virtual GlowBag" claim page (guide PDFs + music + resources)
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
page) and the back office pages are also self-contained — each carries
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
- **Back office:** `index.html` and `dashboard.html` both link to
  `back-office-sign-in.html` from their nav bar and footer ("Back Office").
  The sign-in page checks the entered staff ID and access code against a
  demo credential pair (`admin@gccc.org` / `GCCCAdmin2026!`) entirely in
  the browser, then redirects to `back-office-dashboard.html` on success.
  The dashboard's sidebar switches between its Dashboard, Schedule,
  Staff & Employers, Rooms, Training Hub, Staff Lounge, Announcements, and
  Integrations panels, and clicking the user avatar signs out back to
  `back-office-sign-in.html`.
- **Event giveaway suite:** `save-the-planet-game.html` links to
  `virtual-glowbag.html` on completion. `virtual-glowbag.html` links out
  to `dashboard.html`, `index.html`, `gccc_prize_wheel.html`,
  `save-the-planet-game.html`, `gccc_bingo_caller.html`, all four bingo
  cards, and all four scratch tickets — and pulls its two PDFs and three
  MP3s straight from the repo root (no subfolder). `gccc_prize_wheel.html`'s
  QR redemption ticket links out to the GCCC Cognito prize redemption form
  (`https://www.cognitoforms.com/gccc2/gcccprizeredemption3`). The bingo
  cards' QR codes and each scratch ticket's redemption flow point to that
  same Cognito form.
- **"Claim your free Virtual GlowBag"** links (in the homepage toast
  notifications, hero section, and dashboard resources list) point to
  `virtual-glowbag.html`, which serves the GlowBag PDF, streams the three
  campaign tracks, and lists free wellness/budgeting/crisis-support
  resources.
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
5. **Visit the URL** — `index.html` loads automatically as the homepage, and every link/tab across the site should work. The back office can be reached directly at `back-office-sign-in.html`.

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
- **`gccc-proposal.pdf`** is a large file (~1.1 MB) and **`virtual-glowbag.pdf`** plus its three linked `.mp3` tracks (~20 MB total) are also sizeable. GitHub Pages serves all of this fine, but if you ever rename or move these files, update the matching `href`/`src` references in `index.html`, `dashboard.html`, and `virtual-glowbag.html`.
- **External links** (SDG data sources, partner sites, the OneCause fundraiser signup, Jitsi video calling, etc.) require an internet connection and are outside this repo's control.
- **Donations:** General "Donate" buttons (subscriptions, GlowBags, the donate strip, and the four "Sponsor Her/His GlowBag" buttons) point to `https://www.paypal.com/paypalme/globalcitizens30`. The meal-specific donation tiers ($35–$25K) point to Save the Children, with a secondary link to No Kid Hungry.
- **Bake Sale Kit:** `bake-sale-kit.html` is an on-site toolkit/landing page for the campaign; the actual page registration still happens on our OneCause partner site (`p2p.onecause.com`), which the kit page links out to.
- **Rooms:** Each room page's "Enter Room" button and portal link scroll to that room's own content on the same page, since there's no separate external destination in this project for most rooms. A few homepage room cards (Missions, GCCC Resorts, Members Cove, Start Your Own Center, Volunteer, Raffle, Run For Office) still point to external placeholder/partner sites because there's no local page for them in this repo.├── gccc_scratch_glowbag.html       # Scratch-off ticket — GlowBag prize
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
page) is also self-contained — each page carries its own embedded styles
and scripts rather than using `gccc.css`.

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
- **Event giveaway suite:** `save-the-planet-game.html` links to
  `virtual-glowbag.html` on completion. `virtual-glowbag.html` links out
  to `dashboard.html`, `index.html`, `gccc_prize_wheel.html`,
  `save-the-planet-game.html`, `gccc_bingo_caller.html`, all four bingo
  cards, and all four scratch tickets — and pulls its two PDFs and three
  MP3s straight from the repo root (no subfolder). `gccc_prize_wheel.html`'s
  QR redemption ticket links out to the GCCC Cognito prize redemption form
  (`https://www.cognitoforms.com/gccc2/gcccprizeredemption3`). The bingo
  cards' QR codes and each scratch ticket's redemption flow point to that
  same Cognito form.
- **"Claim your free Virtual GlowBag"** links (in the homepage toast
  notifications, hero section, and dashboard resources list) point to
  `virtual-glowbag.html`, which serves the GlowBag PDF, streams the three
  campaign tracks, and lists free wellness/budgeting/crisis-support
  resources.
- `room-glomart.html`'s **"Let's Trade"** section links to `register.html`
  to start bartering.

Everything is relative-path linked, so the site works the same whether it's opened locally or hosted from a subfolder — no absolute URLs to configure.

## Deploying on GitHub Pages

1. **Create a new repository** on GitHub (or use an existing one).
2. **Add all files** listed above to the root of the repository (or to a
   `/docs` folder — see step 4). There's no folder structure to preserve
   anymore — every file, including the two PDFs and three MP3s, sits flat
   in the same root as `index.html`.
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
5. **Visit the URL** — `index.html` loads automatically as the homepage, and every link/tab across the site should work.

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
- **`gccc-proposal.pdf`** is a large file (~1.1 MB) and **`virtual-glowbag.pdf`** plus its three linked `.mp3` tracks (~20 MB total) are also sizeable. GitHub Pages serves all of this fine, but if you ever rename or move these files, update the matching `href`/`src` references in `index.html`, `dashboard.html`, and `virtual-glowbag.html`.
- **External links** (SDG data sources, partner sites, the OneCause fundraiser signup, Jitsi video calling, etc.) require an internet connection and are outside this repo's control.
- **Donations:** General "Donate" buttons (subscriptions, GlowBags, the donate strip, and the four "Sponsor Her/His GlowBag" buttons) point to `https://www.paypal.com/paypalme/globalcitizens30`. The meal-specific donation tiers ($35–$25K) point to Save the Children, with a secondary link to No Kid Hungry.
- **Bake Sale Kit:** `bake-sale-kit.html` is an on-site toolkit/landing page for the campaign; the actual page registration still happens on our OneCause partner site (`p2p.onecause.com`), which the kit page links out to.
- **Rooms:** Each room page's "Enter Room" button and portal link scroll to that room's own content on the same page, since there's no separate external destination in this project for most rooms. A few homepage room cards (Missions, GCCC Resorts, Members Cove, Start Your Own Center, Volunteer, Raffle, Run For Office) still point to external placeholder/partner sites because there's no local page for them in this repo.│
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
├── EVENT GIVEAWAY SUITE (community event day — prize game set)
├── ─────────────────────────────────────────────────────────
├── virtual-glowbag.html            # Free "Virtual GlowBag" claim page (guide PDFs + music + resources)
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
├── assets/
│   └── glowbag/
│       ├── virtual-glowbag.pdf                     # Resource guide — currently the Hot Bread Kitchen
│       │                                            #   Community Resources 2020 booklet
│       ├── free-5-day-music-journaling-retreat.pdf # The 5-Day Music & Journaling Retreat guide
│       └── music/
│           ├── dream-on.mp3
│           ├── death-row.mp3
│           └── what-you-waiting-for.mp3
│
└── README.md                       # This file
```

> **Note on `assets/glowbag/`:** the GlowBag claim page pulls in *two*
> separate PDFs, not one combined file — `virtual-glowbag.pdf` (currently
> the Hot Bread Kitchen resource guide) and
> `free-5-day-music-journaling-retreat.pdf` (the retreat guide). The
> on-page description under "Download the GCCC Community Resource Guide"
> was updated to match the Hot Bread Kitchen content. If you swap either
> file's content again later, keep the filenames exactly as they are —
> the page calls them by name — and update that description to match.

Note: `index.html` has its own styles and scripts embedded directly in the
page (it doesn't use `gccc.css`), while every other page links out to the
shared `gccc.css`, `countries-data.js`, and `country-explorer.js` files.
The event giveaway suite (prize wheel, bingo, scratch tickets, GlowBag
page) is also self-contained — each page carries its own embedded styles
and scripts rather than using `gccc.css`.

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
- **Event giveaway suite:** `save-the-planet-game.html` links to
  `virtual-glowbag.html` on completion. `virtual-glowbag.html` links out
  to `dashboard.html`, `index.html`, `gccc_prize_wheel.html`,
  `save-the-planet-game.html`, `gccc_bingo_caller.html`, all four bingo
  cards, and all four scratch tickets — and pulls its two PDFs and three
  MP3s from `assets/glowbag/`. `gccc_prize_wheel.html`'s QR redemption
  ticket links out to the GCCC Cognito prize redemption form
  (`https://www.cognitoforms.com/gccc2/gcccprizeredemption3`). The bingo
  cards' QR codes and each scratch ticket's redemption flow point to that
  same Cognito form.

## Deploying

Every file listed above belongs in the repo **root** — none of the event
giveaway pages use subfolders for HTML, only for the `assets/glowbag/`
media. If any of the event giveaway files are missing from a given
deploy, links between them (and to `index.html`/`dashboard.html`) will
404, so upload the whole set together.├── gccc_scratch_membership.html    # Scratch-off ticket — Membership prize
├── gccc_scratch_virtualcare.html   # Scratch-off ticket — Virtual Care prize
├── gccc_scratch_codingclass.html   # Scratch-off ticket — Coding Class prize
│
├── assets/
│   └── glowbag/
│       ├── virtual-glowbag.pdf                     # Resource guide — currently the Hot Bread Kitchen
│       │                                            #   Community Resources 2020 booklet
│       ├── free-5-day-music-journaling-retreat.pdf # The 5-Day Music & Journaling Retreat guide
│       └── music/
│           ├── dream-on.mp3
│           ├── death-row.mp3
│           └── what-you-waiting-for.mp3
│
└── README.md                       # This file
```

> **Note on `assets/glowbag/`:** the GlowBag claim page pulls in *two*
> separate PDFs, not one combined file — `virtual-glowbag.pdf` (currently
> the Hot Bread Kitchen resource guide) and
> `free-5-day-music-journaling-retreat.pdf` (the retreat guide). If you
> swap either file's content again later, keep the filenames exactly as
> they are — the page calls them by name.

Note: `index.html` has its own styles and scripts embedded directly in the
page (it doesn't use `gccc.css`), while every other page links out to the
shared `gccc.css`, `countries-data.js`, and `country-explorer.js` files.
The event giveaway suite (prize wheel, bingo, scratch tickets, GlowBag
page) is also self-contained — each page carries its own embedded styles
and scripts rather than using `gccc.css`.

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
- **Event giveaway suite:** `save-the-planet-game.html` links to
  `virtual-glowbag.html` on completion. `virtual-glowbag.html` links out
  to `dashboard.html`, `index.html`, `gccc_prize_wheel.html`,
  `save-the-planet-game.html`, `gccc_bingo_caller.html`, all four bingo
  cards, and all four scratch tickets — and pulls its two PDFs and three
  MP3s from `assets/glowbag/`. `gccc_prize_wheel.html`'s QR redemption
  ticket links out to the GCCC Cognito prize redemption form
  (`https://www.cognitoforms.com/gccc2/gcccprizeredemption3`). The bingo
  cards' QR codes and each scratch ticket's redemption flow point to that
  same Cognito form.

## Deploying

Every file listed above belongs in the repo **root** — none of the event
giveaway pages use subfolders for HTML, only for the `assets/glowbag/`
media. If any of the event giveaway files are missing from a given
deploy, links between them (and to `index.html`/`dashboard.html`) will
404, so upload the whole set together.- **"Claim your free Virtual GlowBag"** links (in the homepage toast notifications, hero section, and dashboard resources list) point to `virtual-glowbag.html`, which serves the GlowBag PDF, streams the three campaign tracks, and lists free wellness/budgeting/crisis-support resources.
- `room-glomart.html`'s new **"Let's Trade"** section links to `register.html` to start bartering.

Everything is relative-path linked, so the site works the same whether it's opened locally or hosted from a subfolder — no absolute URLs to configure.

## Deploying on GitHub Pages

1. **Create a new repository** on GitHub (or use an existing one).
2. **Add these files** to the root of the repository (or to a `/docs` folder — see step 4), keeping the `assets/glowbag/` folder structure intact.
   - Easiest way: unzip this archive and drag all the files into your repo, or use git:
     ```bash
     git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
     cd YOUR-REPO
     # copy all the unzipped files (including the assets/ folder) into this folder
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
5. **Visit the URL** — `index.html` loads automatically as the homepage, and every link/tab across the site should work.

### Optional: Custom Domain

If you want a custom domain (e.g. `www.yourorg.org`) instead of the default `github.io` address:
1. Add a `CNAME` file to the repo root containing just your domain name.
2. Point your domain's DNS to GitHub Pages (GitHub's docs walk through the exact records: Settings → Pages → "Custom domain" has an in-app guide).

If you're using a custom domain, the GlowBag PDF will be served at:
```
https://YOUR-DOMAIN/assets/glowbag/virtual-glowbag.pdf
```
This is the exact URL the GlowBag flyer's QR code points to — as long as the files land at that path, the QR code works with no further changes.

## Notes & Limitations

- **No backend:** Sign in, registration, and the member dashboard are front-end demos — they don't actually authenticate against a server or store real accounts. All fields are cosmetic/functional in the browser only.
- **`gccc-proposal.pdf`** is a large file (~1.1 MB) and **`assets/glowbag/virtual-glowbag.pdf`** plus its three linked `.mp3` tracks (~20 MB total) are also sizeable. GitHub Pages serves all of this fine, but if you ever rename or move these files, update the matching `href`/`src` references in `index.html`, `dashboard.html`, and `virtual-glowbag.html`.
- **External links** (SDG data sources, partner sites, the OneCause fundraiser signup, Jitsi video calling, etc.) require an internet connection and are outside this repo's control.
- **Donations:** General "Donate" buttons (subscriptions, GlowBags, the donate strip, and the four "Sponsor Her/His GlowBag" buttons) point to `https://www.paypal.com/paypalme/globalcitizens30`. The meal-specific donation tiers ($35–$25K) point to Save the Children, with a secondary link to No Kid Hungry.
- **Bake Sale Kit:** `bake-sale-kit.html` is an on-site toolkit/landing page for the campaign; the actual page registration still happens on our OneCause partner site (`p2p.onecause.com`), which the kit page links out to.
- **Rooms:** Each room page's "Enter Room" button and portal link scroll to that room's own content on the same page, since there's no separate external destination in this project for most rooms. A few homepage room cards (Missions, GCCC Resorts, Members Cove, Start Your Own Center, Volunteer, Raffle, Run For Office) still point to external placeholder/partner sites because there's no local page for them in this repo.
