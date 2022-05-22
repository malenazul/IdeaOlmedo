// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJbBdquta3MIa9ZpHOM0xJBBJ95iBA6dQ",
  authDomain: "turismo-14.firebaseapp.com",
  projectId: "turismo-14",
  storageBucket: "turismo-14.appspot.com",
  messagingSenderId: "59001976023",
  appId: "1:59001976023:web:86dbc78fabfb3c6fc0ac92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);