/* eslint-disable */
import React, { useState } from 'react';
import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRooms, getUsers } from './redux/action/actionCreator';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from './firebase';
import LoginPage from './pages/LoginPage';

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
const [rooms, setRooms]=useState([])
const [users, setUsers]=useState([]);
const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "Rooms"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let roomsArr = [];
      querySnapshot.forEach((doc) => {
        roomsArr.push({ ...doc.data(), id: doc.id })
      })
      setRooms(roomsArr);
    })
    
    return () => unsubscribe()
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
    
    return () => unsubscribe()
  }, []);
   
  useEffect(() => {
    dispatch(getRooms(rooms))
  }, [rooms]);

  useEffect(() => {
    dispatch(getUsers(users))
  }, [users]);

  return (
    <div className="App">

      {/*Вызов функции записи данных в firebase
       <button onClick={()=>{
        createAccount()
      }}>Получить данные</button>*/}
      
      {/* {console.log(rooms)}  */}

      <LoginPage/>
    </div>
  );
}

export default App;
