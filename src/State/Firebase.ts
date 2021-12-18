import { getFirestore, connectFirestoreEmulator, enableIndexedDbPersistence } from '@firebase/firestore'
import { getAuth, connectAuthEmulator } from '@firebase/auth'
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyCRVdm-z96dUlLrt94zXxYyf4_p--ygvpI",
    authDomain: "self-elite.firebaseapp.com",
    projectId: "self-elite",
    storageBucket: "self-elite.appspot.com",
    messagingSenderId: "1079852537445",
    appId: "1:1079852537445:web:f45748e9310d4db9ab988c",
    measurementId: "G-NLEECQ1FV7"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore()
// connectFirestoreEmulator(db, 'localhost', 8080)

const _auth = getAuth()
// connectAuthEmulator(_auth, 'http://localhost:9099')

////////////////////////////////////////////////
// Uncomment below in production              //
////////////////////////////////////////////////

// Import the functions you need from the SDKs you need
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const analytics = getAnalytics(app);
export const auth = _auth


enableIndexedDbPersistence(db).catch((err) => {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
    }
})

export const DB = db