/* eslint-disable */
import React, { useState, useEffect } from "react";
// import MyTable from "../components/MyTable";
import { useSelector } from "react-redux";
import { Table } from "antd";
const columns = [
  {
    title: "Number",
    dataIndex: "number",
    width: "20%",
  },
  {
    title: "Type",
    dataIndex: "type",
    filters: [
      {
        text: "Standart",
        value: "standard",
      },
      {
        text: "Suite",
        value: "suite",
      },
      {
        text: "Delux",
        value: "delux",
      },
    ],
    onFilter: (value, record) => record.type.indexOf(value) === 0,
  
    width: "20%",
  },
  {
    title: "Occupancy",
    dataIndex: "occupancy",
    filters: [
      {
        text: 2,
        value: 2,
      },
      {
        text: 3,
        value: 3,
      },
      {
        text: 4,
        value: 4,
      },
    ],
    onFilter: (value, record) => record.occupancy === value,
    width: "20%",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Guest",
    dataIndex: "guest",
  },
];


const MainPage = () => {
  const { rooms } = useSelector((state) => state);
  const [roomsItems, setRoomsItems] = useState([]);

  useEffect(() => {
    const roomsArr = Object.entries(rooms)
      .map(([key, value]) => ({
        key,
        ...value,
      }))
      .sort((a, b) => {
        return a.number - b.number;
      });

    setRoomsItems(roomsArr);
  }, [rooms]);
  
  
  return (
    <Table
      columns={columns}
      dataSource={roomsItems}
    />
   
  );
};
export default MainPage;
