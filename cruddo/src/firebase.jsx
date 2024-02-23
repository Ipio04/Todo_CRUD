// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAoCB7sWPvpKU-hr0pEHRF5PSesHe_DtdE",

  authDomain: "crud-222d2.firebaseapp.com",

  projectId: "crud-222d2",

  storageBucket: "crud-222d2.appspot.com",

  messagingSenderId: "299766165373",

  appId: "1:299766165373:web:6a52722ebce2be01586614"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);