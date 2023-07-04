import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID } from '$env/static/private';
import { initializeApp, getApp, getApps } from 'firebase-admin/app';
import pkg from 'firebase-admin';

const firebaseApp = getApps().length ? getApp() : initializeApp({
    credential: pkg.credential.cert({
        projectId: FB_PROJECT_ID,
        clientEmail: FB_CLIENT_EMAIL,
        privateKey: FB_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
});

export const adminDB = getFirestore(firebaseApp);
export const adminAuth = getAuth(firebaseApp);