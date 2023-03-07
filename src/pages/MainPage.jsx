/* eslint-disable */
import React, { useState, useEffect, useMemo } from "react";
// import MyTable from "../components/MyTable";
import { useSelector } from "react-redux";
import { Table } from "antd";
import { getRoomsState } from "../redux/selectors";


const MainPage = () => {
  const  rooms  = useSelector(getRoomsState);
  const [roomsItems, setRoomsItems] = useState([]);

  const [isChecked, setIsChecked] = useState(false);

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
  
  const guestsOptions = useMemo(() => (!isChecked
    ? rooms
      .filter((room) => room.guest)
      .map((room) => ({ text: room.guest, value: room.guest }))
    : []
  ), [rooms, isChecked]);

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
      width: "10%",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      width: "15%",
    },
    {
      title: "Guest",
      dataIndex: "guest",
      filters: guestsOptions,
      onFilter: (text, record) => record.guest.startsWith(text),
      width: "20%",
    },
    {
      title: "",
      dataIndex: "",
      render: () => <button className="btn btn-primary">More information</button>,
      
    },
  ];
  
  return (
    <>
     {
      console.log(Object.entries(rooms) )}
    <Table
      columns={columns}
      dataSource={roomsItems}
    />
    </>
   
   
  );
};
export default MainPage;
