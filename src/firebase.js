import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmxtgscI6WEJ2nxIy-Mg3xBP0JGXX8qww",
  authDomain: "netflix-clone-77823.firebaseapp.com",
  projectId: "netflix-clone-77823",
  storageBucket: "netflix-clone-77823.appspot.com",
  messagingSenderId: "1033988896051",
  appId: "1:1033988896051:web:dd4b9e04f181952985fa46",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
