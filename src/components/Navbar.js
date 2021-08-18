import React from "react";
import { Button } from "primereact/button";
import ProfileIcon from "./ProfileIcon";

function Navbar({ toggleSideBar }) {
  return (
    <div className="navbar  flex justify-content-between">
      <Button
        type="button"
        onClick={toggleSideBar}
        icon="pi pi-bars"
        className="p-mr-2 "
      />
      <ProfileIcon />
    </div>
  );
}

export default Navbar;
