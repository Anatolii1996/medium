/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query,  doc, setDoc, updateDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiJNMQ2FdeJGW0Z7F81sSsn8rP9AUME7E",
  authDomain: "laboratory-2-52bca.firebaseapp.com",
  projectId: "laboratory-2-52bca",
  storageBucket: "laboratory-2-52bca.appspot.com",
  messagingSenderId: "411898430795",
  appId: "1:411898430795:web:24053fea61bc03b56794ce"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export const roomsRef = query(collection(db, "Rooms"));
// export const getRoomsFirebase = async () => {
//   const querySnapshot = await getDocs(collection(db, "Rooms"));
  
//   // const dbRooms = await roomsRef.once("value");
//   // return querySnapshot.reduce((acc, room) => ({ ...acc, [room.id]: room }), {})
// };

// export const refRoom = collection(db, "Rooms");
export const updateRoomFirestore = async (id, data) => {
  const roomRef = doc(db, "Rooms", id);
  await updateDoc(roomRef, data);
};


// export const usersRef = query(collection(db, "Accounts"));
// export const getUsersFirebase = async () => {
//   const querySnapshot = await getDocs(collection(db, "Accounts"));
//   // return querySnapshot;
//   // const dbUsers = await usersRef.once("value");
//   return querySnapshot.val().reduce((acc, room) => ({ ...acc, [room.id]: room }), {})
// };