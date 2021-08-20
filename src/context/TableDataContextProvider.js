import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { events } from "../constant/customerData";

export const TableDataContext = createContext();

const initialState = { tableData: events.data, editStatus: "" };

const DataTableReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return { ...state, tableData: [...state.tableData, action.payload] };
    case "EDIT_EVENT":
      let foundIndex = state.tableData.findIndex(
        (item) => item.id === action.payload.id
      );
      let tableArr = [...state.tableData];
      tableArr[foundIndex] = action.payload;

      return {
        ...state,
        tableData: tableArr,
      };

    case "DELETE":
      return {
        ...state,
        tableData: state.tableData.filter((item) => item.id !== action.payload),
      };
    case "EDITING":
      return { ...state, editStatus: action.payload };
    case "DONE_EDITING":
      return { ...state, editStatus: "" };
    default:
      return state;
  }
};

function TableDataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataTableReducer, initialState);
  return (
    <TableDataContext.Provider value={{ state, dispatch }}>
      {children}
    </TableDataContext.Provider>
  );
}

export default TableDataContextProvider;
