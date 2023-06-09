// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnKXUvp-mac4ahxLiAzn57s0o3Ah-dWuk",
  authDomain: "app-restaurante-eb219.firebaseapp.com",
  projectId: "app-restaurante-eb219",
  storageBucket: "app-restaurante-eb219.appspot.com",
  messagingSenderId: "497509327900",
  appId: "1:497509327900:web:34eddf665030284168abd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);