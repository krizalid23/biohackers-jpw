import firebase from 'firebase/app';
import 'firebase/firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDUqR0PyBqRVHB6t1xkIGebatTqAjDLK0I",
    authDomain: "biohackers-waller.firebaseapp.com",
    projectId: "biohackers-waller",
    storageBucket: "biohackers-waller.appspot.com",
    messagingSenderId: "916301897599",
    appId: "1:916301897599:web:83a3e1b356986ba700444a",
    measurementId: "G-S20M0ZCHZ2"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore(); 