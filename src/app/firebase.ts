import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';

// Initialize Firebase
const app = initializeApp({
    apiKey: 'AIzaSyAOc_mTN86Wa7yCazPGsNPUcmHJdQxaBRI',
    authDomain: 'memo-more.firebaseapp.com',
    projectId: 'memo-more',
    storageBucket: 'memo-more.appspot.com',
    messagingSenderId: '4790993663',
    appId: '1:4790993663:web:3724dd41f6d4fe214042ca',
    measurementId: 'G-TV3SS43Z69',
});

export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
