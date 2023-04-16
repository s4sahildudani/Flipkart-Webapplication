import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
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
const app = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage(app);
export const auth = firebase.auth(app);
export const db = firebase.firestore();
export default firebase;
