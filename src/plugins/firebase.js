import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyAjGOq57t_MDhKwflbyuHDPBePpcEej7kc",
  authDomain: "vesile5.firebaseapp.com",
  databaseURL: "https://vesile5.firebaseio.com",
  projectId: "vesile5",
  storageBucket: "vesile5.appspot.com",
  messagingSenderId: "1008617261293",
  appId: "1:1008617261293:web:5d74e0279d23861104e4e4",
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
