/* eslint-disable */
import React, { useEffect, useState } from "react";
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
    title: "Occupacy",
    dataIndex: "occupacy",
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



const MyTable = ({data}) => {
  //   const [data, setData] = useState();
  //   // const [loading, setLoading] = useState(false);
  //   const [tableParams, setTableParams] = useState({
  //       pagination: {
  //         current: 1,
  //         pageSize: 10,
  //       },
  //     });

  //   const { rooms } = useSelector((state) => state)
  // useEffect(() => {
  //   setData(rooms);
  //   setTableParams({
  //       ...tableParams,
  //       pagination: {
  //         ...tableParams.pagination,
  //         total: 20,
  //         // 200 is mock data, you should read it from server
  //         // total: data.totalCount,
  //       },
  //     });
  // }, [JSON.stringify(tableParams)]);

  // const handleTableChange = (pagination, filters, sorter) => {
  //   setTableParams({
  //     pagination,
  //     filters,
  //     ...sorter,
  //   });

  //   // `dataSource` is useless since `pageSize` changed
  //   if (pagination.pageSize !== tableParams.pagination?.pageSize) {
  //     setData([]);
  //   }
  // };

 
 

  return (
    <Table
      columns={columns} data={data}
    />
  );};
export default MyTable;
