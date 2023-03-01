// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase/compat/app';
// import 'firebase/database';


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
// const databaseRef = firebase.database().ref();
// export const roomsRef = databaseRef.child("Rooms");

// export const getRoomsFirebase = async () => {
//   const dbRooms = await roomsRef.once("value");
//   return dbRooms.val().reduce((acc, room) => ({ ...acc, [room.id]: room }), {})
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);