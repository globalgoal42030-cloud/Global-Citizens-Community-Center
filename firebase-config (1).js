/* GCCC — Firebase project config
   Replace these placeholder values with the ones from:
   Firebase Console → Project Settings → General → "Your apps" → SDK setup and config
   (Console: https://console.firebase.google.com)

   This file is safe to be public / committed — these are client identifiers,
   not secrets. Access control is enforced by Firebase Auth + custom claims
   (see auth.js) and by your Firestore/Storage security rules, not by hiding
   this config. */
export const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_PROJECT.firebaseapp.com",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_PROJECT.appspot.com",
  messagingSenderId: "REPLACE_WITH_YOUR_SENDER_ID",
  appId: "REPLACE_WITH_YOUR_APP_ID"
};
