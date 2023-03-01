/* eslint-disable */
import React from 'react';
import './App.scss';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import {   doc, setDoc } from 'firebase/firestore';
// import { db } from './firebase';

function App() {
  //Получение массива комнат
  // const [rooms, SetRooms] = useState([]);

  //Запись массива комнат в Firebase
  // const createAccount =  () => {
  //    rooms.map((el) => {
  //    setDoc(doc(db, "Rooms", el.id), {...el})      

  //   })

  // }


  //Запрос данных из localhost
  // useEffect(() => {
  //   axios("http://localhost:3001/posts")
  //     .then(resp => {
  //       SetRooms(resp.data[0].Rooms)
  //     }
  //     )

  // }, []);


  return (
    <div className="App">

      {/*Вызов функции записи данных в firebase
       <button onClick={()=>{
        createAccount()
      }}>Получить данные</button>
      
      {console.log(rooms)} */}
    </div>
  );
}

export default App;
