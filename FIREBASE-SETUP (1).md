# GCCC — Firebase Auth Setup Guide

This covers taking the code in this batch (already wired to call Firebase) and
connecting it to a real Firebase project. You said you have a Firebase
account but haven't created the project yet — start at Step 1.

---

## 1. Create the Firebase project

1. Go to https://console.firebase.google.com
2. **Add project** → name it (e.g. `gccc-production`) → follow the prompts
   (Google Analytics is optional, skip it if you don't need it yet).
3. Once created, click the **Web** icon (`</>`) to register a web app —
   name it something like `GCCC Site`. You do **not** need Firebase Hosting;
   the site stays on GitHub Pages.
4. Firebase will show you a config object that looks like:
   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "gccc-production.firebaseapp.com",
     projectId: "gccc-production",
     storageBucket: "gccc-production.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef"
   };
   ```
   Copy these six values into `firebase-config.js` in this batch, replacing
   the `REPLACE_WITH_...` placeholders. This file is safe to commit publicly
   — these are client identifiers, not secrets.

## 2. Turn on Email/Password sign-in

Console → **Build → Authentication → Get started → Sign-in method** →
enable **Email/Password** (the plain one, not the passwordless link option,
unless you want that too).

## 3. Create your first accounts

Console → **Authentication → Users → Add user**. Create one for yourself as
admin, e.g. `you@gccc.org`, plus any staff/security accounts you already
know you need. (Members who register through `register.html` create their
own accounts automatically — you only need to hand-create back-office /
security accounts here.)

Every account created this way has **no role** until you run the script in
Step 5 — signing in at `back-office-sign-in.html` or `security-sign-in.html`
before that will correctly reject them with "not authorized."

## 4. Get a service account key (needed for Step 5 only — keep this private)

Console → **Project Settings (gear icon) → Service accounts → Generate new
private key**. This downloads a JSON file. **Do not commit this to the
repo or share it** — it's a full admin credential for your Firebase project.
Store it somewhere local and safe.

## 5. Assign roles with `set-user-role.js`

This script is the only way to set the `admin` / `staff` / `security` role,
because custom claims can only be written server-side (never from browser
JS — that would let anyone grant themselves admin).

```bash
npm install firebase-admin
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/the/serviceAccountKey.json"

node set-user-role.js you@gccc.org admin
node set-user-role.js someone@gccc.org staff
node set-user-role.js guard@gccc.org security
```

After running it, that user needs to sign out and back in (or just reload —
`auth.js` refreshes the token on every page load, so it picks up within a
few minutes either way).

To remove a role: `node set-user-role.js someone@gccc.org --remove`

## 6. Test the flows

- `login.html` / `register.html` → `dashboard.html` — any account, no role
  needed.
- `back-office-sign-in.html` → `back-office-dashboard.html` — only works for
  `admin` or `staff` roled accounts. The **Security** tab only appears for
  `admin`.
- `security-sign-in.html` → `security-dashboard.html` — only works for
  `admin` or `security` roled accounts.
- Try signing in to the wrong portal with the wrong role (e.g. a `security`
  account at `back-office-sign-in.html`) — it should reject with a message
  pointing to the correct portal, not silently let them in.

## 7. Deploying

No build step needed — `firebase-config.js` and `auth.js` are just static
JS files like everything else on the site. Push all the files in this batch
to `main` alongside your existing pages and it's live. Since GitHub Pages
serves everything statically, Firebase Auth works fine there — Firebase
Auth is entirely client-side except for the one-time role assignment script.

## What's still a placeholder after this

- The Security Portal's Incident Log, Visitor Log, and Access Control tabs
  are static UI with no data behind them yet — they need a Firestore
  collection (or similar) to become live. Enable **Firestore** in the
  Console when you're ready for that and I can wire it up.
- Member profile data (country, referral source, etc. from `register.html`)
  isn't persisted anywhere yet — it's collected in the form but not written
  to a database. Also a Firestore job.
- Password strength/verification emails, account deletion, and admin user
  management UI (vs. hand-creating accounts in the Console) aren't built —
  let me know if/when those become priorities.
