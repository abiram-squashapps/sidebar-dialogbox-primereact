import React from "react";
import { Button } from "primereact/button";

function Navbar({ toggleSideBar }) {
  return (
    <div className="navbar">
      <Button
        type="button"
        onClick={toggleSideBar}
        icon="pi pi-bars"
        className="p-mr-2"
      />
    </div>
  );
}

export default Navbar;
