import firebase from "firebase";

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
