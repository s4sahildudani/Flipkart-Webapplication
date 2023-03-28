// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbpomhfAb40eRo9y4b5jOLrpRHX3gbLE4",
  authDomain: "flipkart-webapp-8632e.firebaseapp.com",
  projectId: "flipkart-webapp-8632e",
  storageBucket: "flipkart-webapp-8632e.appspot.com",
  messagingSenderId: "671086197668",
  appId: "1:671086197668:web:461e5154357fa6768d1f31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);