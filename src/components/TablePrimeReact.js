import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import placeholder from "../assets/images/petersmith.png";
import { Button } from "primereact/button";
import { TableDataContext } from "../context/TableDataContextProvider";
import { useContext } from "react";

function TablePrimeReact({ toggleDialog }) {
  const { state } = useContext(TableDataContext);

  /* const statusBodyTemplate = (rowData) => (
    <span className={`pill ${rowData.status}`}>{rowData.status}</span>
  ); */

  const imageBodyTemplate = (rowData) => (
    <div className="p-grig">
      <img
        className="p-col-2 product-image"
        src={rowData.eventImage}
        onError={(e) => (e.target.src = { placeholder })}
        alt={rowData.eventImage}
        width="100px"
        height="60px"
      />
    </div>
  );

  return (
    <div>
      <div className="flex justify-content-between mb-1 align-items-center">
        <h4>Events</h4>
        <Button label="Add Event" onClick={toggleDialog} />
      </div>
      <DataTable value={state} className="ml-2" stripedRows paginator rows={6}>
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
        ></Column>
      </DataTable>
    </div>
  );
}

export default TablePrimeReact;
