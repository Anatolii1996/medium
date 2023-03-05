/* eslint-disable */
import React, {useState, useEffect} from "react";
import MyTable from "../components/MyTable";
import { useSelector } from "react-redux";

const MainPage=()=>{
    const [data, setData] = useState();
    // const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 10,
        },
      });

    const { rooms } = useSelector((state) => state)
  useEffect(() => {
    setData(rooms);
    setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: 20,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

return <div className="main_content">
    <MyTable data={data} />
</div>
};
export default MainPage;