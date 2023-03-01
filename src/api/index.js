import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';


export const getRooms =  () => {
    const q = query(collection(db, "Rooms"));
    const unsubscribe =  onSnapshot(q, (querySnapshot) => {
        let roomsArr = [];
        querySnapshot.forEach((doc) => {
            roomsArr.push({ ...doc.data(), id: doc.id })
        })
    })
    return () => unsubscribe
};

// export const getUsers=()=>{
//     const q = query(collection(db, "Accounts"));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       let usersArr = [];
//       querySnapshot.forEach((doc) => {
//         usersArr.push({ ...doc.data(), id: doc.id })
//       })
//           })
//     return () => unsubscribe
// }