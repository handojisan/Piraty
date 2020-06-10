import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASWnnn8WdAWe6SWXVML9sRoL7HFcT936Y",
  authDomain: "piraty-project.firebaseapp.com",
  databaseURL: "https://piraty-project.firebaseio.com",
  projectId: "piraty-project",
  storageBucket: "piraty-project.appspot.com",
  messagingSenderId: "391108259767",
  appId: "1:391108259767:web:c78b146ea9623eb83d8232",
  measurementId: "G-GY8XV8SM6S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth(); // auth.currentUser で現在のユーザーが取得できる
export const db = firebase.firestore();
export const storage = firebase.storage();

export const createDocObject = doc => {
  return {
    id: doc.id,
    ...doc.data()
  };
};

export const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signOut = () => {
  return firebase.auth().signOut();
};
