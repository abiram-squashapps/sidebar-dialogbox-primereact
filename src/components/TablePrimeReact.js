import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import options from "../assets/images/options.svg";
import { TableDataContext } from "../context/TableDataContextProvider";
import { useContext, useEffect } from "react";
import {
  imageBodyTemplate,
  venueBodyTemplate,
} from "./DatatableTemplates/tableTemplates";
import { Card } from "primereact/card";

function TablePrimeReact({ toggleDialog, setEditRowData }) {
  const { state, dispatch } = useContext(TableDataContext);

  const [showDropDown, setDropDown] = useState({ show: true, id: "" });

  const actionsBodyTemplate = (rowData) => {
    return (
      <div
        onClick={(e) => {
          setDropDown((prev) => ({ show: !prev.show, id: rowData.id }));
        }}
        className="menu"
      >
        <div className="menu">
          <img src={options} alt="o" />
          {showDropDown.show && showDropDown.id === rowData.id ? (
            <div>
              <Card className="w-7rem p-1 dropdown ">
                <Button
                  label="edit"
                  className="w-full mb-1"
                  onClick={(e) => {
                    console.log(rowData);
                    dispatch({ type: "EDITING", payload: rowData });
                    toggleDialog();
                  }}
                />
                <Button label="delete" className="w-full" />
              </Card>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  useEffect(() => {
    for (let i in state.tableData) {
      state.tableData[i].slNo = parseInt(i) + 1;
    }
  }, [state]);

  return (
    <Card>
      <div className="flex justify-content-between mb-1 align-items-center">
        <h4>Events</h4>
        <Button label="Add Event" onClick={toggleDialog} />
      </div>
      <DataTable
        value={state.tableData}
        editMode="row"
        dataKey="id"
        className="ml-2"
        stripedRows
        paginator
        rows={6}
      >
        <Column field="slNo" header="Sl no" className="w-1"></Column>
        <Column
          field="eventImage"
          header="eventImage"
          body={imageBodyTemplate}
        ></Column>
        <Column field="eventName" header="Event Name"></Column>
        <Column field="fromDate" header="fromDate"></Column>

        <Column field="toDate" header="toDate"></Column>

        <Column field="timing" header="timing"></Column>

        <Column
          field="venue.hallName"
          className="columns "
          header="Venue"
          body={venueBodyTemplate}
        ></Column>
        <Column className="w-1rem" body={actionsBodyTemplate}></Column>
      </DataTable>
    </Card>
  );
}

export default TablePrimeReact;
