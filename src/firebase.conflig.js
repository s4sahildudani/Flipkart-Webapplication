import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8ljfKVVrJKEFtk0rpHhSUoqFnUkvdN4E",
  authDomain: "flipkart-webapp-5a831.firebaseapp.com",
  databaseURL:
    "https://flipkart-webapp-5a831-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "flipkart-webapp-5a831",
  storageBucket: "flipkart-webapp-5a831.appspot.com",
  messagingSenderId: "213129242742",
  appId: "1:213129242742:web:d076353afedc553cbe9757",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);