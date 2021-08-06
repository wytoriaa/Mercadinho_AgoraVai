import firebase from 'firebase';
import 'firebase/firestore';



var firebaseConfig = {
  apiKey: "AIzaSyC2BRtP6nAlxdb4KypnEGgaLhjqEzPLRgM",
  authDomain: "mercearia-62d1b.firebaseapp.com",
  projectId: "mercearia-62d1b",
  storageBucket: "mercearia-62d1b.appspot.com",
  messagingSenderId: "834639952348",
  appId: "1:834639952348:web:b61e16cb03f814c4fa3719",
  measurementId: "G-C77771Z1F8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();


export default {
    db, firebase
}