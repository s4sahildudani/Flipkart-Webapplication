import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyD4L9yW4r19fBb6f0t4VH85Mfbbcsl7KPg",
    authDomain: "my-practice-1b832.firebaseapp.com",
    projectId: "my-practice-1b832",
    storageBucket: "my-practice-1b832.appspot.com",
    messagingSenderId: "877379953254",
    appId: "1:877379953254:web:e13463900a7dca899603a7",
    measurementId: "G-B42VYGL4PK"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataref=firebase.database();

  export default firebase;