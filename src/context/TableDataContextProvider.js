import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { events } from "../constant/customerData";

export const TableDataContext = createContext();

const initialState = events.data;

const DataTableReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return [...state, action.payload];
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
