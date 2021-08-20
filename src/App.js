import "./App.css";
import SidebarPrime from "./components/SidebarPrime";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TablePrimeReact from "./components/TablePrimeReact";
import DialogBox from "./components/DialogBox";
import TableDataContextProvider from "./context/TableDataContextProvider";

function App() {
  const [sideBar, setSideBar] = useState(true);
  const [dialog, setDialog] = useState(true);

  const toggleSideBar = () => {
    setSideBar((prev) => !prev);
  };
  const toggleDialog = () => {
    setDialog((prev) => !prev);
  };
  return (
    <div className="App">
      <TableDataContextProvider>
        <Navbar toggleSideBar={toggleSideBar} />
        {dialog && <DialogBox dialog={dialog} toggleDialog={toggleDialog} />}
        <div className="mainContainer">
          <div
            className={sideBar ? "sidebarContainer" : "sidebarContainer-hide"}
          >
            <SidebarPrime sidebar={sideBar} toggleSideBar={toggleSideBar} />
          </div>
          <div
            className={sideBar ? "tableContainerSmall" : "tableContainerFull"}
          >
            <TablePrimeReact toggleDialog={toggleDialog} />
          </div>
        </div>
      </TableDataContextProvider>
    </div>
  );
}

export default App;
