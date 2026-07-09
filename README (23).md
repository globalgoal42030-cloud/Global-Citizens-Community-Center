# Virtual GlowBag — Refer a Friend

## What changed

`virtual-glowbag.html` now has a **Refer a Friend** section near the bottom of the
page (above the closing note). A member enters their own name and a friend's
name, taps **Generate Referral Link**, and the page automatically creates:

- **Referral code** — the member's name slugified (first 6 letters, A–Z/0–9
  only) plus a random 5-character suffix, e.g. `JAMIE-7X2QK`
- **Referral link** — `register.html?ref=<code>&friend=<friend name>`,
  built relative to wherever `virtual-glowbag.html` is hosted
- **Share message** — a pre-written note addressed to the friend, with the
  link already inserted

Each of the three outputs has its own **Copy** button (clipboard API, with a
`document.execCommand('copy')` fallback for older browsers).

## Where the code lives

All in `virtual-glowbag.html`:

| Piece | Location |
|---|---|
| Styles | `.refer`, `.refer-row`, `.refer-field`, `.refer-btn`, `.refer-result`, `.refer-code-row`, `.refer-link-row`, `.refer-copy`, `.refer-msg`, `.refer-note` (in `<style>`) |
| Markup | `<div class="refer">…</div>`, right before the closing `<p class="note">` |
| Logic | `slugifyName()`, `randomSuffix()`, `generateReferral()`, `copyReferField()` (in `<script>`) |

## register.html — receiving end

`register.html` now reads `ref` and `friend` from the query string on load
(see the `initReferral()` IIFE at the bottom of the file):

- Shows a teal banner above the signup form acknowledging the referral
  (wording adapts depending on whether `ref`, `friend`, or both are present)
- Pre-fills **First Name** with the friend's first name, if given
- Pre-selects **"Referred by a member"** in the "How did you hear about us?"
  dropdown
- Stores the referral code in a hidden `#regReferralCode` field
- On submit, `handleRegister()` carries that code forward to
  `dashboard.html?ref=<code>` — so it survives the placeholder redirect
  and is visible on the next page, ready for a backend to pick up

## Important limitation — still no backend

Everything happens **client-side, in the visitor's browser**. That means:

- Referral codes are **not saved anywhere durable** — no database, no
  `localStorage`. They only exist in the URL/hidden field for the current
  session. If the flow breaks anywhere (closed tab, no JS, etc.) the code
  is lost.
- Nobody is validating codes or checking they belong to a real member.
  Two members could coincidentally generate the same 5-character suffix.
- `handleRegister()` still has a `setTimeout` placeholder instead of a real
  auth/database call — see the `TODO` comment right above it.

## Outstanding work

To make this a real referral program rather than a copy-paste link
generator + a query-param handoff, someone needs to:

1. Replace the `setTimeout` placeholder in `handleRegister()` with a real
   call to your auth backend (Memberful, Stripe, custom API, etc.), sending
   `referralCode` along with the rest of the signup payload
2. Persist `(referral code) → (new member)` somewhere durable so the
   referring member can actually be credited
3. Optionally validate the code format/existence server-side before
   accepting it
4. Decide what `dashboard.html` should do with the `?ref=` param it now
   receives (right now nothing reads it there)

Only `virtual-glowbag.html` and `register.html` have been uploaded so far.
Send over `dashboard.html` (and any other files you want kept in sync, e.g.
a shared header/footer, `gccc.css`) and I'll extend this and update the
README to match.
