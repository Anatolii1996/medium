/* eslint-disable */
import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { getRoomsState } from "../redux/selectors";
import { Link, useParams } from "react-router-dom";
import {  useNavigate } from "react-router";
import { HomeOutlined, CheckOutlined } from "@ant-design/icons";
import { Carousel, Descriptions, List, Button } from "antd";
import CheckOut from "../components/CheckOut";
import CheckIn from "../components/CheckIn";

const SingleRoomPage = () => {
  const { id } = useParams();
  const rooms = useSelector(getRoomsState);
  let currentRoom = {};

  const navigate = useNavigate();

  // const { currentUser } = useSelector((state) => state);
  // useEffect(() => {
  //   if (currentUser == "") {
  //     navigate("/");
  //   }
  // }, [])
  
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
          {currentRoom.gallery? currentRoom.gallery.map((imageUrl) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt={currentRoom.type}
              className="slider-image"
            />
          )): navigate("/")
          }
        </Carousel>
        <div className="description">
          <h3>{`Room ${currentRoom.number}`}</h3>
          <p>
            Type: <span>{currentRoom.type}</span>
          </p>
          <p>
            Occupancy: <span>{currentRoom.occupancy}</span>
          </p>
          <p>
            Price: <span>{currentRoom.price}</span>
          </p>
          <p>
            Guest: <span>{currentRoom.guest}</span>
          </p>
        </div>
        <div className="feature">
          <div className="feature_button_wrap">
            <CheckIn currentRoom={currentRoom}/>
            <CheckOut currentRoom={currentRoom}/>
          </div>
          <Descriptions
            layout="vertical"
            labelStyle={{ fontWeight: 700, color: "black", fontSize: 20 }}
          >
            <Descriptions.Item label="Features">
              <List
                size="small"
                dataSource={currentRoom.features}
                renderItem={(item) => (
                  <List.Item>
                    <CheckOutlined />
                    &nbsp;
                    {item}
                  </List.Item>
                )}
              />
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
      <div className="footer_description">
        <Descriptions
          labelStyle={{ fontWeight: 700, color: "black" }}
          column={2}
        >
          <Descriptions.Item label="Description">
            {currentRoom.description}
          </Descriptions.Item>
        </Descriptions>
      </div>
      
    </div>
  );
};
export default SingleRoomPage;
