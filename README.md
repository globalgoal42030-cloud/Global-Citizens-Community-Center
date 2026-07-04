# Global Citizens Community Center (GCCC) — Website

A static, multi-page website for the Global Citizens Community Center. Built with plain **HTML, CSS, and JavaScript only** — no build step, no framework, no backend required.

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
├── virtual-glowbag.html           # Free "Virtual GlowBag" claim page (guide PDF + music + resources)
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
├── assets/
│   └── glowbag/
│       ├── virtual-glowbag.pdf     # The GlowBag guide (5-Day Music & Journaling Retreat + resources page)
│       └── music/
│           ├── dream-on.mp3
│           ├── death-row.mp3
│           └── what-you-waiting-for.mp3
│
├── gccc-proposal.pdf              # Downloadable proposal document linked from the homepage
└── README.md                      # This file
```

Note: `index.html` has its own styles and scripts embedded directly in the page (it doesn't use `gccc.css`), while every other page links out to the shared `gccc.css`, `countries-data.js`, and `country-explorer.js` files.

## How the Pages Connect

- The nav bar and footer on every page link to `index.html` and its section anchors (`#programs`, `#rooms`, `#goals`, `#campaigns`, `#membership`, `#summit`, `#donate`).
- `login.html`, `register.html`, and `dashboard.html` link to each other and to the room pages.
- All 13 room pages share the same header/footer and load `countries-data.js` + `country-explorer.js` for the searchable country grid.
- **"Start a Fundraiser"** buttons across the homepage, dashboard, and nav all point to `bake-sale-kit.html`, a landing page for the No-Bake Vegan/GF Bake Sale campaign. Its 5th step, **"Get Your Kit,"** links to `bake-sale-fundraiser-kit.html` — the full kit with checklists, an event guide, a business-outreach script, sponsor stickers, and the physical-kit order form. The landing page's own "Register" CTA hands off to our OneCause fundraising partner page.
- **"Claim your free Virtual GlowBag"** links (in the homepage toast notifications, hero section, and dashboard resources list) point to `virtual-glowbag.html`, which serves the GlowBag PDF, streams the three campaign tracks, and lists free wellness/budgeting/crisis-support resources.
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
