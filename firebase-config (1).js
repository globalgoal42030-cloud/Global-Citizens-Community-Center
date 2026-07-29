/* GCCC — Firebase project config
   Replace these placeholder values with the ones from:
   Firebase Console → Project Settings → General → "Your apps" → SDK setup and config
   (Console: https://console.firebase.google.com)

   This file is safe to be public / committed — these are client identifiers,
   not secrets. Access control is enforced by Firebase Auth + custom claims
   (see auth.js) and by your Firestore/Storage security rules, not by hiding
   this config. */
export const firebaseConfig = {
    apiKey: "AIzaSyBqXeNiek9jFMrNnIfbB83y21f8mRirhIU",
    authDomain: "gccc-production.firebaseapp.com",
    projectId: "gccc-production",
    storageBucket: "gccc-production.firebasestorage.app",
    messagingSenderId: "285079792511",
    appId: "1:285079792511:web:753c7acc80425d118e884a",
    measurementId: "G-4B40SHKKCT"
  };
