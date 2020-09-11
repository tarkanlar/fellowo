import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyDwEC3ZwJv41-9xx_WYcXfiZCzf9Vu4Nx0",
  authDomain: "fellowo.firebaseapp.com",
  databaseURL: "https://fellowo.firebaseio.com",
  projectId: "fellowo",
  storageBucket: "fellowo.appspot.com",
  messagingSenderId: "367022280095",
  appId: "1:367022280095:web:1fccde5ad258dbc07201aa",
  measurementId: "G-0G9WY4SZBR",
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
  GoogleAuthProvider,
};
