// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiJNMQ2FdeJGW0Z7F81sSsn8rP9AUME7E",
  authDomain: "laboratory-2-52bca.firebaseapp.com",
  projectId: "laboratory-2-52bca",
  storageBucket: "laboratory-2-52bca.appspot.com",
  messagingSenderId: "411898430795",
  appId: "1:411898430795:web:24053fea61bc03b56794ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);