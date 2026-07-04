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
├── room-business-lounge.html      # Room pages (13 total) — each is a self-contained
├── room-dev-dojo.html             #   destination with its own content and a shared
├── room-emergency-services.html   #   country explorer widget
├── room-freedom-cove.html
├── room-global-cafe.html
├── room-global-counsel.html
├── room-global-exchange.html
├── room-glomart.html
├── room-health-spa.html
├── room-learning-center.html
├── room-magazine.html
├── room-ministry.html
├── room-rec-suite.html
├── room-studio.html
│
├── bake-sale-kit.html             # Bake Sale Fundraiser Kit — GCCC × No Kid Hungry (linked
│                                   #   from every "Start a Fundraiser" button site-wide)
├── virtual-glowbag.html           # Free digital welcome gift — a curated set of genuinely
│                                   #   free resources given to new subscribers/members/donors
├── assets/glowbag/                # Downloadable file(s) bundled into the Virtual GlowBag
│   └── free-5-day-music-journaling-retreat.pdf
│
├── gccc.css                       # Shared stylesheet used by login/register/dashboard/rooms
├── countries-data.js              # Shared list of UN member states (used by country explorer)
├── country-explorer.js            # Renders the searchable country grid used on room pages
│
├── gccc-proposal.pdf              # Downloadable proposal document linked from the homepage
└── README.md                      # This file
```

Note: `index.html` has its own styles and scripts embedded directly in the page (it doesn't use `gccc.css`), while every other page links out to the shared `gccc.css`, `countries-data.js`, and `country-explorer.js` files.

## How the Pages Connect

- The nav bar and footer on every page link to `index.html` and its section anchors (`#programs`, `#rooms`, `#goals`, `#campaigns`, `#membership`, `#summit`, `#donate`).
- `login.html`, `register.html`, and `dashboard.html` link to each other and to the room pages.
- All 13 room pages share the same header/footer and load `countries-data.js` + `country-explorer.js` for the searchable country grid.
- Every "Start a Fundraiser" / "Start Your Fundraiser Now" button site-wide (nav bar, homepage hero, dashboard, Business Lounge, Emergency Services, and Global Cafe & Bake Sale) now links to `bake-sale-kit.html`, the self-contained Bake Sale Fundraiser Kit page, instead of the external OneCause page. Membership sign-up buttons still point to `register.html`.
- `bake-sale-kit.html` is a standalone page (its own styles/scripts, not `gccc.css`) with a slim top bar linking back to `index.html`. It includes classic and vegan/gluten-free checklists, a shopping-list cost calculator, and an outreach script.
- `virtual-glowbag.html` is the free digital welcome gift people receive when they subscribe to the newsletter, join for free, register for membership, or donate. It has a "Her"/"His" bag-style toggle (visual only — the contents are identical) with a tap-to-open animation, then reveals cards for the retreat PDF plus researched, genuinely-free third-party resources (meditation apps, a budgeting tool, a public-domain e-book library, and 988/Crisis Text Line contact info). It's triggered from: the footer newsletter signup, the homepage donate strip's email join, the Sustainability Global Tour signup, and `register.html` (which redirects new members here before the dashboard). It's also linked from the dashboard's Quick Resources and from the "Sponsor a GlowBag" section as a lighter-weight alternative to sponsoring a physical bag.

Everything is relative-path linked, so the site works the same whether it's opened locally or hosted from a subfolder — no absolute URLs to configure.

## Deploying on GitHub Pages

1. **Create a new repository** on GitHub (or use an existing one).
2. **Add these files** to the root of the repository (or to a `/docs` folder — see step 4).
   - Easiest way: unzip this archive and drag all the files into your repo, or use git:
     ```bash
     git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
     cd YOUR-REPO
     # copy all the unzipped files into this folder
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

## Notes & Limitations

- **No backend:** Sign in, registration, and the member dashboard are front-end demos — they don't actually authenticate against a server or store real accounts. All fields are cosmetic/functional in the browser only.
- **`gccc-proposal.pdf`** is a large file (~1.1 MB). GitHub Pages serves it fine, but if you replace it later, keep the filename the same (`gccc-proposal.pdf`) so the "Read the Full GCCC Proposal" button on the homepage keeps working — or update the `href` in `index.html` if you rename it.
- **External links** (SDG data sources, partner sites, the No Kid Hungry registration link inside `bake-sale-kit.html`, the third-party freebies linked from `virtual-glowbag.html`, Jitsi video calling, etc.) require an internet connection and are outside this repo's control. The fundraiser start buttons themselves are now internal (`bake-sale-kit.html`) and work offline. The Virtual GlowBag page itself, and its bundled PDF, also work offline — only the outbound app/resource links need connectivity.
- **Donations:** General "Donate" buttons (subscriptions, GlowBags, the donate strip, and the four "Sponsor Her/His GlowBag" buttons) point to `https://www.paypal.com/paypalme/globalcitizens30`. The meal-specific donation tiers ($35–$25K) point to Save the Children, with a secondary link to No Kid Hungry.
- **Rooms:** Each room page's "Enter Room" button and portal link now scroll to that room's own content on the same page, since there's no separate external destination in this project for most rooms. A few homepage room cards (Missions, GCCC Resorts, Members Cove, Start Your Own Center, Volunteer, Raffle, Run For Office) still point to external placeholder/partner sites because there's no local page for them in this repo.

