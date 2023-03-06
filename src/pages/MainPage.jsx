/* eslint-disable */
import React, { useState, useEffect } from "react";
// import MyTable from "../components/MyTable";
import { useSelector } from "react-redux";
import { Table } from "antd";
const columns = [
  {
    title: "Number",
    dataIndex: "number",
    // sorter: true,
    // render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Type",
    dataIndex: "type",
    filters: [
      {
        text: "Standart",
        value: "standart",
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
    width: "20%",
  },
  {
    title: "Occupancy",
    dataIndex: "occupancy",
    filters: [
      {
        text: "2",
        value: "2",
      },
      {
        text: "3",
        value: "3",
      },
      {
        text: "4",
        value: "4",
      },
    ],
    width: "20%",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: true,
  },
  {
    title: "Guest",
    dataIndex: "guest",
  },
];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];

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
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   setData(rooms);
  // }, [rooms]);
  {
    console.log(roomsItems);
  }
  return (
    <Table
      columns={columns}
      dataSource={roomsItems}
      // onChange={onChange}
    />
    // <div className="main_content">
    //   <div className="main_button_wrap">
    //     <button className="btn btn-primary">Clear all filters</button>
    //     <label htmlFor="free_rooms">
    //       {" "}
    //       <input type="checkbox" id="free_rooms" /> Free rooms only
    //     </label>
    //   </div>
    //   <table className="table">
    //     <thead>
    //       <tr>
    //         <th scope="col" className="col-sm-2">
    //           Number
    //         </th>
    //         <th scope="col" className="col-sm-2">
    //           Type
    //         </th>
    //         <th scope="col" className="col-sm-2">
    //           Occupancy
    //         </th>
    //         <th scope="col" className="col-sm-2">
    //           Price
    //         </th>
    //         <th scope="col" className="col-sm-2">
    //           Guest
    //         </th>
    //         <th scope="col"></th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {Object.entries(data)
    //         .sort((a, b) => {
    //           return a[1].number - b[1].number;
    //         }).slice(0, 10)
    //         .map((el) => {
    //           return (
    //             <tr key={el[1].id}>
    //               <td  scope="row">{el[1].number}</td>
    //               <td>{el[1].type}</td>
    //               <td>{el[1].occupancy}</td>
    //               <td>{el[1].price}</td>
    //               <td>{el[1].guest}</td>
    //               <td>
    //                 <button className="btn btn-primary">
    //                   More information
    //                 </button>
    //               </td>
    //             </tr>
    //           );
    //         })}
    //     </tbody>
    //   </table>

    //   <nav aria-label="Page navigation example">
    //     <ul className="pagination">
    //       <li className="page-item">
    //         <a className="page-link" href="#" aria-label="Previous">
    //           <span aria-hidden="true">&laquo;</span>
    //         </a>
    //       </li>
    //       <li className="page-item">
    //         <a className="page-link" href="#">
    //           1
    //         </a>
    //       </li>
    //       <li className="page-item">
    //         <a className="page-link" href="#">
    //           2
    //         </a>
    //       </li>

    //       <li className="page-item">
    //         <a className="page-link" href="#" aria-label="Next">
    //           <span aria-hidden="true">&raquo;</span>
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
};
export default MainPage;
