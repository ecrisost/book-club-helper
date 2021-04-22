import 'firebase/firestore';

const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARFjH3dYMUsxqkRZR2TCNMIrPUpxHLIJY",
    authDomain: "book-club-helper.firebaseapp.com",
    projectId: "book-club-helper",
    storageBucket: "book-club-helper.appspot.com",
    messagingSenderId: "89725692543",
    appId: "1:89725692543:web:5fa680538eb0ef1d966d4a",
    measurementId: "G-MKMJR3PWF6"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

$('#btnClick').click(function(){
	db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}) 