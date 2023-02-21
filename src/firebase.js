// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTPBfn-TT9qx8owchrK4-Ux_CfXucKvg0",
  authDomain: "app-restaurante-p4.firebaseapp.com",
  projectId: "app-restaurante-p4",
  storageBucket: "app-restaurante-p4.appspot.com",
  messagingSenderId: "630234523529",
  appId: "1:630234523529:web:c8dce18595501af9186358"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);