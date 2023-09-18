// import { initializeApp, cert } from "firebase-admin/app";
import admin from 'firebase-admin';
// const admin = require('firebase-admin')
import { getAuth } from "firebase-admin/auth";
import {serviceAccountKey} from './serviceAccountKey.js'

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
});

const auth = getAuth(app);
export default auth;


