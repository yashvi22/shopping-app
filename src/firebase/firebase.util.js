import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBw19ZjDLPsh47vvUXSh0QHwBVZfzp8whg",
  authDomain: "crwn-db-cf052.firebaseapp.com",
  databaseURL: "https://crwn-db-cf052-default-rtdb.firebaseio.com",
  projectId: "crwn-db-cf052",
  storageBucket: "crwn-db-cf052.appspot.com",
  messagingSenderId: "3782603976",
  appId: "1:3782603976:web:851fa8148f25b810a2a1fd",
  measurementId: "G-6LYLYJ9HDR",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
