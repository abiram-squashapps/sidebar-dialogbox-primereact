import React from "react";
import { Dialog } from "primereact/dialog";
import AddEventForm from "./AddEventForm";
function DialogBox({ dialog, toggleDialog }) {
  return (
    <div>
      <Dialog visible={dialog} onHide={toggleDialog}>
        <AddEventForm />
      </Dialog>
    </div>
  );
}

export default DialogBox;
