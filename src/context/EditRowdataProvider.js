import React from "react";
import { createContext } from "react";

export const EditRowdataContext = createContext();

//const EditrowReducer

function EditRowdataProvider({ children }) {
  return <EditRowdataContext.Provider>{children}</EditRowdataContext.Provider>;
}

export default EditRowdataProvider;
