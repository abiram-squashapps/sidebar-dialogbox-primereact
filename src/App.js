import "./App.css";
import SidebarPrime from "./components/SidebarPrime";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TablePrimeReact from "./components/TablePrimeReact";
import DialogBox from "./components/DialogBox";

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
      <Navbar toggleSideBar={toggleSideBar} />
      <DialogBox dialog={dialog} toggleDialog={toggleDialog} />
      <div className="sidebarContainer">
        <SidebarPrime sidebar={sideBar} toggleSideBar={toggleSideBar} />
      </div>
      <div className={sideBar ? "tableContainerSmall" : "tableContainerFull"}>
        <TablePrimeReact toggleDialog={toggleDialog} />
      </div>
    </div>
  );
}

export default App;
