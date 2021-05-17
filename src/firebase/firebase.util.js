import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw19ZjDLPsh47vvUXSh0QHwBVZfzp8whg",
  authDomain: "crwn-db-cf052.firebaseapp.com",
  projectId: "crwn-db-cf052",
  storageBucket: "crwn-db-cf052.appspot.com",
  messagingSenderId: "3782603976",
  appId: "1:3782603976:web:851fa8148f25b810a2a1fd",
  measurementId: "G-6LYLYJ9HDR"
};

firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();
console.log(firebase.auth)
export const firestore = firebase.firestore();
//console.log(firebase.auth)
const provider = new firebase.auth.GoogleAuthProvider()
// console.log(Provider)
provider.setCustomParameters({ prompt: "select_account" });


export const signInWithGoogle=()=> auth.signInWithPopup(provider)

export default firebase
