// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from  "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBwBQNuT9sOQ1R0vom_NMPHD_WiXRrqULc",
  authDomain: "fir-learn-f38f5.firebaseapp.com",
  projectId: "fir-learn-f38f5",
  storageBucket: "fir-learn-f38f5.appspot.com",
  messagingSenderId: "438925473088",
  appId: "1:438925473088:web:fefa864c22bae85dcab6a5",
  measurementId: "G-13XQSDL2Z7"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const goggleProvider=new GoogleAuthProvider()


export const db=getFirestore(app)
