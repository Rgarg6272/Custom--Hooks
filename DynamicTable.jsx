import React from "react";
import MaterialTable from "material-table";
import { useState } from "react";

const DynamicTable = ({ columns, data }) => {
  return (
    <div>
      <div className="tableStyle">
        <MaterialTable
          title="Dynamic Material Table"
          columns={columns.map((column) => ({
            title: column.title,
            field: column.field,
            type: column.type,
            align: column.align,
            cellStyle: column.cellStyle,
          }))}
          data={data.map((item) => {
            return {
              id: item.id,
              name: item.name,
              age: item.age,
              gender: item.gender,
              phone: item.phone,
            };
          })}
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
