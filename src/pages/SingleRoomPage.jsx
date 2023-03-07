/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import { getRoomsState } from "../redux/selectors";
import { Link, useParams } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

const SingleRoomPage = () => {
  const { id } = useParams();
  const rooms = useSelector(getRoomsState);

  let currentRoom = {};
  rooms.forEach((el) => {
    if (el.id == id) {
      currentRoom = el;
    }
  });
  return (
    <div className="main_content single_page">
      <Link to="/">
        <HomeOutlined />
        <p>Back Home</p>
      </Link>
      <div className="single_center">
          <Carousel className="room_img" autoplay>
          {currentRoom.gallery.map((imageUrl) => <img key={imageUrl} src={imageUrl} alt={currentRoom.type} className="slider-image" />)}
          </Carousel>
          <div className="description">
            <h2>{`Room ${currentRoom.number}`}</h2>
          </div>
      </div>
    </div>
  );
};
export default SingleRoomPage;
