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

  // * for log test
  const collectionRef = firestore.collection("users");
  const collectionSnapShop = await collectionRef.get();
  console.log({ collection: collectionSnapShop.docs.map((doc) => doc.data()) });

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    console.log({ userRef: email, displayName, createAt });

    try {
      // Make a new user stored in Firebase database
      await userRef.set({ displayName, email, createAt, ...additionalData });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // * for log test
  const collectionRef = firestore.collection(collectionKey);
  const collectionSnapShop = await collectionRef.get();
  console.log({
    collections: collectionSnapShop.docs.map((doc) => doc.data()),
  });

  if (collectionSnapShop.docs.length !== 0) return;

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// login with google account
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(googleProvider);

// in case we need this later
export default firebase;
