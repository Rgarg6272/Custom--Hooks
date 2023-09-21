import React, { useState } from "react";
import DynamicTable from "./component/DynamicTable";

const App = () => {
  const [columns, setColumns] = useState([
    {
      title: "ID",
      field: "id",
      align: "center",
      cellStyle: {
        textDecoration: "underline",
      },
    },
    { title: "Name", field: "name", align: "center" },
    { title: "Age", field: "age", type: "numeric", align: "center" },
    { title: "Gender", field: "gender", type: "string", align: "center" },
    { title: "Phone", field: "phone", type: "numeric", align: "center" },
  ]);

  const [data, setData] = useState([
    { id: 8358083, name: "John", age: 30, gender: "Male", phone: 9876789901 },
    { id: 8358084, name: "Jone", age: 20, gender: "Male", phone: 9876789901 },
    { id: 8358085, name: "Krish", age: 23, gender: "Male", phone: 9876789901 },
    { id: 8358086, name: "Max", age: 43, gender: "Male", phone: 9876789901 },
  ]);
  return (
    <div>
      <DynamicTable columns={columns} data={data} />
    </div>
  );
};

export default App;
