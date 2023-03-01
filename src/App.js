/* eslint-disable */
import React from 'react';
import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRooms } from './api';
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
  
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRooms())
  }, []);
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
