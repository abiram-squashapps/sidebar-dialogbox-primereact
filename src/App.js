import "./App.css";
import SidebarPrime from "./components/SidebarPrime";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TablePrimeReact from "./components/TablePrimeReact";
import DialogBox from "./components/DialogBox";
import TableDataContextProvider from "./context/TableDataContextProvider";
import { useRef } from "react";
import { Toast } from "primereact/toast";

function App() {
  const [sideBar, setSideBar] = useState(true);
  const [dialog, setDialog] = useState(true);
  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success Message",
      detail: "Message Content",
      life: 3000,
    });
  };
  const toggleSideBar = () => {
    setSideBar((prev) => !prev);
  };
  const toggleDialog = () => {
    setDialog((prev) => !prev);
  };
  return (
    <div className="App">
      <Toast ref={toast} />
      <TableDataContextProvider>
        <Navbar toggleSideBar={toggleSideBar} />
        {dialog && (
          <DialogBox
            dialog={dialog}
            toggleDialog={toggleDialog}
            showSuccess={showSuccess}
          />
        )}
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
