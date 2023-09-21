import React from "react";
import MaterialTable from "material-table";
import { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { tableData } from "./memberData";

const DynamicTable = () => {
  const [columns, setColumns] = useState([
    { title: "ID", field: "id", align: "center" },
    { title: "Name", field: "name", align: "center" },
    { title: "Age", field: "age", align: "center" },
  ]);

  const [data, setData] = useState([
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jone", age: 20 },
    { id: 3, name: "Krish", age: 23 },
    { id: 4, name: "Max", age: 43 },
    { id: 5, name: "Dan", age: 25 },
    { id: 6, name: "Raj", age: 23 },
  ]);

  return (
    <div>
      <div className="tableStyle">
        <MaterialTable
          title="Dynamic Material Table"
          columns={columns}
          data={data}
          options={{
            search: false,
            paging: false,
            headerStyle: {
              backgroundColor: "#01579b",
              color: "#FFF",
              border: "1px solid black",
            },
            rowStyle: {
              border: "1px solid black",
            },
          }}
        />
      </div>
    </div>
  );
};

export default DynamicTable;
