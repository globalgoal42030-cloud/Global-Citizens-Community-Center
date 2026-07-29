/* GCCC — assign a role to a Firebase Auth user via custom claims.
   Custom claims can ONLY be set from a trusted server environment (the
   Admin SDK), never from client-side JS — that's why this is a separate
   script you run yourself, not something in auth.js.

   SETUP (one-time):
     1. npm install firebase-admin
     2. Firebase Console → Project Settings → Service Accounts →
        "Generate new private key" → save the JSON file somewhere safe,
        OUTSIDE your public repo (never commit it).
     3. Set an env var pointing to it:
          export GOOGLE_APPLICATION_CREDENTIALS="/path/to/serviceAccountKey.json"

   USAGE:
     node set-user-role.js someone@gccc.org admin
     node set-user-role.js someone@gccc.org staff
     node set-user-role.js someone@gccc.org security
     node set-user-role.js someone@gccc.org --remove   (clears the role claim)

   After running this, the user must sign out and back in (or wait for their
   ID token to refresh — auth.js forces a refresh on every load, so a normal
   page reload after a few minutes also works). */

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const VALID_ROLES = ['admin', 'staff', 'security'];

async function main() {
  const [, , email, roleArg] = process.argv;

  if (!email || !roleArg) {
    console.error('Usage: node set-user-role.js <email> <admin|staff|security|--remove>');
    process.exit(1);
  }

  const user = await admin.auth().getUserByEmail(email).catch(() => null);
  if (!user) {
    console.error(`No Firebase Auth user found for ${email}. Create the account first (Console → Authentication → Add user), then run this script.`);
    process.exit(1);
  }

  if (roleArg === '--remove') {
    await admin.auth().setCustomUserClaims(user.uid, { role: null });
    console.log(`Removed role claim from ${email}.`);
    return;
  }

  if (!VALID_ROLES.includes(roleArg)) {
    console.error(`Invalid role "${roleArg}". Must be one of: ${VALID_ROLES.join(', ')}`);
    process.exit(1);
  }

  await admin.auth().setCustomUserClaims(user.uid, { role: roleArg });
  console.log(`Set role="${roleArg}" for ${email} (uid: ${user.uid}).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
