import firebase from "firebase";
import 'firebase/firestore';
import "firebase/auth";


var firebaseConfig = {
  apiKey: "AIzaSyCXnHR016euHOgQQk8b2tctfPcEqbrIpxY",
  authDomain: "mercantil-a3a0c.firebaseapp.com",
  projectId: "mercantil-a3a0c",
  storageBucket: "mercantil-a3a0c.appspot.com",
  messagingSenderId: "362116112831",
  appId: "1:362116112831:web:c675afcd1400515d34410a"
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

