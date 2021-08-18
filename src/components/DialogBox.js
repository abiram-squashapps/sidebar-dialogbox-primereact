import React from "react";
import { Dialog } from "primereact/dialog";
import AddEventForm from "./AddEventForm";
function DialogBox({ dialog, toggleDialog }) {
  return (
    <div>
      <Dialog
        visible={dialog}
        onHide={toggleDialog}
        className="min-w-min "
        breakpoints={{ "960px": "75vw", "640px": "100vw" }}
        style={{ width: "50vw" }}
        header="Add Events"
      >
        <AddEventForm toggleDialog={toggleDialog} />
      </Dialog>
    </div>
  );
}

export default DialogBox;
