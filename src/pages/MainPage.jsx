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
            <th scope="col" className="col-sm-2">
              Number
            </th>
            <th scope="col" className="col-sm-2">
              Type
            </th>
            <th scope="col" className="col-sm-2">
              Occupancy
            </th>
            <th scope="col" className="col-sm-2">
              Price
            </th>
            <th scope="col" className="col-sm-2">
              Guest
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data)
            .sort((a, b) => {
              return a[1].number - b[1].number;
            })
            .map((el) => {
              return (
                <tr key={el[1].id}>
                  <td scope="row">{el[1].number}</td>
                  <td>{el[1].type}</td>
                  <td>{el[1].occupancy}</td>
                  <td>{el[1].price}</td>
                  <td>{el[1].guest}</td>
                  <td>
                    <button className="btn btn-primary">
                      More information
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default MainPage;
