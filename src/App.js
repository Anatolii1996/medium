/* eslint-disable */
import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms, getUsers } from './redux/action/actionCreator';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from './firebase';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from "react-router";
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import { useNavigate } from "react-router";

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
  // const [userAvatar, setUserAvatar] = useState("https://firebasestorage.googleapis.com/v0/b/laboratory-2-52bca.appspot.com/o/44562.png?alt=media&token=ccd67ba1-6de2-4dab-b934-8f97335d8c65")
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

  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state);
  useEffect(() => {
    if (currentUser == "") {
      navigate("/");
    }
  }, [])

  return (

    // {/*Вызов функции записи данных в firebase
    //    <button onClick={()=>{
    //     createAccount()
    //   }}>Получить данные</button>*/}
    <Routes>

      <Route path="/" element={<LoginPage />}></Route>
      <Route path='/content' element={<Header />}>
        <Route path='/content' element={<MainPage />}></Route>
      </Route>
      <Route path='/error' element={<ErrorPage />}></Route>
    </Routes>






  );
}

export default App;
