// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUH3xVvvirFvI_g98f8dGRgD6VCizCLmE",
    authDomain: "thepantryapp-b9a35.firebaseapp.com",
    projectId: "thepantryapp-b9a35",
    storageBucket: "thepantryapp-b9a35.appspot.com",
    messagingSenderId: "229490784987",
    appId: "1:229490784987:web:2f2911cabd117b29562afe"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export { firestore };