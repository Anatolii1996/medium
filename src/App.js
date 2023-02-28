import React from 'react';
import './App.scss';
import {
  useEffect,
  useState
} from 'react';
import axios from 'axios';

function App() {
  const [rooms, SetRooms] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/posts")
      .then(resp => SetRooms(resp.data));

  }, [])

  return (
    <div className="App">
      {console.log(rooms)}
    </div>
  );
}

export default App;
