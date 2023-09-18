// import { initializeApp, cert } from "firebase-admin/app";
import admin from 'firebase-admin';
// const admin = require('firebase-admin')
import { getAuth } from "firebase-admin/auth";
console.log('erwerwer')
const serviceAccount = {
  projectId: process.env.FIREBASE_PROEJCT_ID, 
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_PROEJCT_ID,
}

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const auth = getAuth(app);
export default auth;


