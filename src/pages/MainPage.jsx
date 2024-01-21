/* eslint-disable */
import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Col, Button, Checkbox } from "antd";
import { getRoomsState } from "../redux/selectors";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../redux/action/actionCreator";

const MainPage = () => {
  const rooms = useSelector(getRoomsState);
  const { users } = useSelector((state) => state);
  const [currentUser, setCurrentUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const localUser = localStorage.getItem("user");
      const currentUser = Object.values(users).find(
        (user) => user.name === localUser
      );
      setCurrentUser(currentUser);
      if (currentUser && currentUser.image) {
        dispatch(getCurrentUser(currentUser.image));
      }
    }
  }, [currentUser, users]);

  const [isChecked, setIsChecked] = useState(false);

  const guestsOptions = useMemo(
    () =>
      isChecked
        ? rooms
            .filter((room) => !room.guest)
            .map((room) => ({ text: "Empty", value: "Empty" }))
        : rooms
            .filter((room) => room.guest)
            .map((room) => ({ text: room.guest, value: room.guest })),
    [rooms, isChecked]
  );

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleTableChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      width: "20%",
      filteredValue: null,
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
          text: "Deluxе",
          value: "deluxe",
        },
      ],
      onFilter: (type, record) => record.type === type,
      filteredValue: filteredInfo.type || null,
      width: "18%",
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
      onFilter: (occupancy, record) => record.occupancy === occupancy,
      filteredValue: filteredInfo.occupancy || null,
      width: "10%",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      width: "15%",
      sortOrder: sortedInfo.field === "price" && sortedInfo.order,
    },
    {
      title: "Guest",
      dataIndex: "guest",
      filters: guestsOptions,
      onFilter: (text, record) => record.guest.startsWith(text),
      filteredValue: filteredInfo.guest || null,
      width: "20%",
    },
    {
      title: "",
      dataIndex: "",
      width: "17%",
      render: (text, record) => (
        <Link to={`/content/room/${record.id}`}>
          <button className="btn btn-primary">More information</button>
        </Link>
      ),
      filteredValue: null,
    },
  ];

  const filteredRooms = isChecked ? rooms.filter((room) => !room.guest) : rooms;

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
    setIsChecked(false);
  };

  return (
    <div className="main_content">
      <div className="main_header_wrap">
        <Col span={2}>
          <Button onClick={clearAll} type="primary">
            Clear all filters
          </Button>
        </Col>
        <Col span={6}>
          <Checkbox
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          >
            Free rooms only
          </Checkbox>
        </Col>
      </div>

      <Table
        columns={columns}
        dataSource={filteredRooms.sort((a, b) => a.number - b.number)}
        rowKey="id"
        onChange={handleTableChange}
      />
    </div>
  );
};
export default MainPage;
