// import firebase from "firebase";
// import 'firebase/firestore';
// import "firebase/auth";


// var firebaseConfig = {
//   apiKey: "AIzaSyCXnHR016euHOgQQk8b2tctfPcEqbrIpxY",
//   authDomain: "mercantil-a3a0c.firebaseapp.com",
//   projectId: "mercantil-a3a0c",
//   storageBucket: "mercantil-a3a0c.appspot.com",
//   messagingSenderId: "362116112831",
//   appId: "1:362116112831:web:c675afcd1400515d34410a"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// export default {
//     db, firebase
// }
// -----------
// SEGUNDO BANCO
// var firebaseConfig = {
//   apiKey: "AIzaSyCXnHR016euHOgQQk8b2tctfPcEqbrIpxY",
//   authDomain: "mercantil-a3a0c.firebaseapp.com",
//   projectId: "mercantil-a3a0c",
//   storageBucket: "mercantil-a3a0c.appspot.com",
//   messagingSenderId: "362116112831",
//   appId: "1:362116112831:web:c675afcd1400515d34410a"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// export default {
//     db, firebase, auth
// }

import firebase from "firebase";
import 'firebase/firestore';
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDHT9c44DGmH9TU1OyKzZKCLbo0OlzJWuo",
  authDomain: "soulcode-67d79.firebaseapp.com",
  projectId: "soulcode-67d79",
  storageBucket: "soulcode-67d79.appspot.com",
  messagingSenderId: "762492731560",
  appId: "1:762492731560:web:16ce3eaa4d79a5d49e429d",
  measurementId: "G-S24L02M755"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//porta de entrada para a base de dados do projeto
const db = firebase.firestore();

//Constante que permite o uso das funções do auth
const auth = firebase.auth();

export default {

  db, firebase, auth
}

