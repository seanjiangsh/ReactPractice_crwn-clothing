import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCYZlTMIP3Y3KnlhYaT7i2zQFYA7wPbHy0",
  authDomain: "crwn-db-dd9f6.firebaseapp.com",
  databaseURL: "https://crwn-db-dd9f6.firebaseio.com",
  projectId: "crwn-db-dd9f6",
  storageBucket: "crwn-db-dd9f6.appspot.com",
  messagingSenderId: "245782079625",
  appId: "1:245782079625:web:4b9e5a6e7c2787a8693e58",
  measurementId: "G-QEXLF3249H",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      // Make a new user stored in Firebase database
      await userRef.set({ displayName, email, createAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// login with google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

// in case we need this later
export default firebase;
