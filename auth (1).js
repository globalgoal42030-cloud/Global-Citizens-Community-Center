/* GCCC — shared Firebase Auth helper
   Loaded by: login.html, register.html, forgot-password.html, dashboard.html,
   back-office-sign-in.html, back-office-dashboard.html,
   security-sign-in.html, security-dashboard.html

   Roles live in the Firebase ID token as a custom claim: { role: "admin" | "staff" | "security" }
   Regular members have NO role claim — role is undefined for them, which is
   expected and fine; role gating only applies to back-office / security pages.
   Custom claims can only be set server-side — see set-user-role.js and
   FIREBASE-SETUP.md for how to assign a role to a staff account. */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/** Sign in an existing user with email + password. Returns a Promise<UserCredential>. */
export function gcccSignIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

/** Create a new member account. Optionally sets their display name. */
export async function gcccSignUp(email, password, displayName) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) {
    await updateProfile(cred.user, { displayName });
  }
  return cred;
}

/** Sign the current user out. */
export function gcccSignOut() {
  return signOut(auth);
}

/** Send a password-reset email. Returns a Promise<void>. */
export function gcccResetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

/**
 * Subscribe to auth state. `callback` is called with either:
 *   null                              — signed out
 *   { user, role }                    — signed in; role is the custom claim
 *                                        (string) or null if none is set.
 * Returns the unsubscribe function.
 */
export function gcccWatchAuth(callback) {
  return onAuthStateChanged(auth, async (user) => {
    if (!user) {
      callback(null);
      return;
    }
    try {
      // `true` forces a refresh so a just-assigned role claim is picked up
      // without the user having to sign out and back in.
      const tokenResult = await user.getIdTokenResult(true);
      callback({ user, role: tokenResult.claims.role || null });
    } catch (err) {
      console.error("GCCC auth: failed to read ID token claims", err);
      callback({ user, role: null });
    }
  });
}

/**
 * Gate a page behind sign-in (and optionally a role allow-list).
 *   allowedRoles: array of role strings the page permits, or null to allow
 *                 any signed-in user regardless of role (used by the member
 *                 dashboard, where most users have no role claim at all).
 *   redirectUrl:  where to send anyone who isn't authorized.
 * Resolves with the { user, role } session once the check passes; the
 * browser is redirected (and the promise never resolves) otherwise.
 */
export function gcccRequireRole(allowedRoles, redirectUrl) {
  return new Promise((resolve) => {
    const unsubscribe = gcccWatchAuth((session) => {
      unsubscribe();
      if (!session) {
        window.location.href = redirectUrl;
        return;
      }
      if (allowedRoles && !allowedRoles.includes(session.role)) {
        window.location.href = redirectUrl;
        return;
      }
      resolve(session);
    });
  });
}

/** Human-readable auth error messages instead of raw Firebase error codes. */
export function gcccFriendlyAuthError(err) {
  const code = err && err.code;
  switch (code) {
    case "auth/invalid-email": return "That email address doesn't look right.";
    case "auth/user-disabled": return "This account has been disabled. Contact an administrator.";
    case "auth/user-not-found": return "No account found with that email.";
    case "auth/wrong-password": return "Incorrect password. Please try again.";
    case "auth/invalid-credential": return "Incorrect email or password.";
    case "auth/email-already-in-use": return "An account with that email already exists.";
    case "auth/weak-password": return "Password must be at least 6 characters.";
    case "auth/too-many-requests": return "Too many attempts. Please wait a moment and try again.";
    case "auth/network-request-failed": return "Network error — check your connection and try again.";
    default: return "Something went wrong. Please try again.";
  }
}
