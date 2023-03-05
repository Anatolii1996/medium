/* eslint-disable */
import React, { useState, useEffect } from "react";
// import MyTable from "../components/MyTable";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [data, setData] = useState({});

  const { rooms } = useSelector((state) => state);
  useEffect(() => {
    setData(rooms);
  }, [rooms]);

  return (
    <div className="main_content">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Type</th>
            <th scope="col">Occupancy</th>
            <th scope="col">Price</th>
            <th scope="col">Guest</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map((el) => {
            return (
              <tr>
                <td scope="row">{el[1].number}</td>
                <td>{el[1].type}</td>
                <td>{el[1].occupancy}</td>
                <td>{el[1].price}</td>
                <td>{el[1].guest}</td>
                <td><button className="btn btn-primary">More information</button></td>
              </tr>
            );
          })}

          
        </tbody>
      </table>
    </div>
  );
};
export default MainPage;
