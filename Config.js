import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBIMh2h024AqC61ZlyGZq9ZTcG7mGSJtkI",
    authDomain: "booksanta-18711.firebaseapp.com",
    databaseURL: "https://booksanta-18711.firebaseio.com",
    projectId: "booksanta-18711",
    storageBucket: "booksanta-18711.appspot.com",
    messagingSenderId: "633543495431",
    appId: "1:633543495431:web:dfcf8577cb7a030619ffa2",
    measurementId: "G-QDWNHDMCXP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();