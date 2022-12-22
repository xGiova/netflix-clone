// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbeFpshGoImftDBXrl0GTFq85r1CNhG2c",
  authDomain: "netflix-clone-44f2c.firebaseapp.com",
  projectId: "netflix-clone-44f2c",
  storageBucket: "netflix-clone-44f2c.appspot.com",
  messagingSenderId: "819282746441",
  appId: "1:819282746441:web:9cefec6f301d16f75d7398",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
