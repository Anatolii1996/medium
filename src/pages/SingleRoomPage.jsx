/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import { getRoomsState } from "../redux/selectors";
import { useParams } from "react-router-dom";

const SingleRoomPage = () => {
  const { id } = useParams();
  const rooms = useSelector(getRoomsState);

  let currentRoom = {};
  rooms.forEach((el) => {
    if (el.id == id) {
      currentRoom = el;
    }
  });
  return <>
  <h1>TEST</h1>
  {console.log(rooms)}
  </>;
};
export default SingleRoomPage;
