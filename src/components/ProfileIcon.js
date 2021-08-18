import React from "react";
import profileIcon from "../assets/images/prifile.png";

function ProfileIcon() {
  return (
    <div className="flex w-10rem justify-content-around align-items-center">
      <img src={profileIcon} alt="profileIcon" />
      <p>jhon doe</p>
    </div>
  );
}

export default ProfileIcon;
