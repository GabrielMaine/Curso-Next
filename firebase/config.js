// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcTs3EMNM0XGuUKLjFzXut8bi5eH1WlIg",
  authDomain: "ecommerce-66400.firebaseapp.com",
  projectId: "ecommerce-66400",
  storageBucket: "ecommerce-66400.appspot.com",
  messagingSenderId: "300367508269",
  appId: "1:300367508269:web:6f381e99015f1dbf01d9a4",
  measurementId: "G-ESR50PXVT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)