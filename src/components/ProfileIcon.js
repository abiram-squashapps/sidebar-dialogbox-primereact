import React from "react";
import profileIcon from "../assets/images/prifile.png";
import { SplitButton } from "primereact/splitbutton";
import { useRef } from "react";
import { Toast } from "primereact/toast";

function ProfileIcon() {
  const toast = useRef();
  const items = [
    {
      label: "Login",
      icon: "pi pi-user",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Logged in!!",
          detail: "user Loged in",
        });
      },
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => {
        toast.current.show({
          severity: "error",
          summary: "Logged out!!",
          detail: "user Loged out",
        });
      },
    },
  ];
  return (
    <div className="flex w-10rem justify-content-around align-items-center">
      <Toast ref={toast} position="bottom-right" />
      <img src={profileIcon} alt="profileIcon" />

      <SplitButton
        label="jhon doe"
        className="min-w-max bg-primary-reverse mx-1"
        model={items}
      ></SplitButton>
    </div>
  );
}

export default ProfileIcon;
