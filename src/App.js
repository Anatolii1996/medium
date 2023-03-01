/* eslint-disable */
import React from 'react';
import './App.scss';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase';
// import axios from 'axios';
// import {   doc, setDoc } from 'firebase/firestore';

function App() {
  // <>
  {/* Получение массива комнат
const [rooms, SetRooms] = useState([]);

  Запись массива комнат в Firebase
  Fconst createAccount =  () => {
     rooms.map((el) => {
     setDoc(doc(db, "Rooms", el.id), {...el})      

    })

  }


  Запрос данных из localhost
  useEffect(() => {
    axios("http://localhost:3001/posts")
      .then(resp => {
        SetRooms(resp.data[0].Rooms)
      }
      )

  }, []); */}

  // </>
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "Rooms"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let roomsArr = [];
      querySnapshot.forEach((doc) => {
        roomsArr.push({ ...doc.data(), id: doc.id })
      })
      setRooms(roomsArr);

    })
    return () => unsubscribe
  }, []);
  useEffect(() => {
    const q = query(collection(db, "Accounts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let usersArr = [];
      querySnapshot.forEach((doc) => {
        usersArr.push({ ...doc.data(), id: doc.id })
      })
      setUsers(usersArr);

    })
    return () => unsubscribe
  }, []);

  return (
    <div className="App">

      {/*Вызов функции записи данных в firebase
       <button onClick={()=>{
        createAccount()
      }}>Получить данные</button>
      
      {console.log(rooms)} */}
      {console.log(rooms)}
      {console.log(users)}
    </div>
  );
}

export default App;
