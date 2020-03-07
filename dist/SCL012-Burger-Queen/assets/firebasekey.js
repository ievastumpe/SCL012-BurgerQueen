import firebase from 'firebase/app';
import 'firebase/firestore';



firebase.initializeApp({
    apiKey: "",
    authDomain: "theburgerqueen-scl012.firebaseapp.com",
    databaseURL: "",
    projectId: "theburgerqueen-scl012",
    storageBucket: "theburgerqueen-scl012.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  });


let db = firebase.firestore();
export default db;