import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDUqR0PyBqRVHB6t1xkIGebatTqAjDLK0I",
    authDomain: "biohackers-waller.firebaseapp.com",
    projectId: "biohackers-waller",
    storageBucket: "biohackers-waller.appspot.com",
    messagingSenderId: "916301897599",
    appId: "1:916301897599:web:83a3e1b356986ba700444a",
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore(); 


export const docIdFieldPath = firebase.firestore.FieldPath.documentId();