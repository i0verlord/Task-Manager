// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPFyHdwg4Q4srd5ooI8Ohg3BSGLLm64t0",
  authDomain: "task-manager-421112.firebaseapp.com",
  projectId: "task-manager-421112",
  storageBucket: "task-manager-421112.appspot.com",
  messagingSenderId: "615625339971",
  appId: "1:615625339971:web:a2be21d43a0a39e04f90f6",
  measurementId: "G-9T8EELE2YQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);