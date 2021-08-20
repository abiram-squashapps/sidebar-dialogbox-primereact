import React from "react";
import { Dialog } from "primereact/dialog";
import AddEventForm from "./AddEventForm";
import { useContext } from "react";
import { TableDataContext } from "../context/TableDataContextProvider";
function DialogBox({ dialog, toggleDialog, showSuccess }) {
  const { state, dispatch } = useContext(TableDataContext);
  return (
    <div>
      <Dialog
        visible={dialog}
        onHide={(e) => {
          dispatch({ type: "DONE_EDITING" });
          toggleDialog();
        }}
        className="min-w-min "
        breakpoints={{ "960px": "75vw", "640px": "100vw" }}
        style={{ width: "50vw" }}
        header={state.editStatus ? "edit event" : "Add Events"}
      >
        <AddEventForm
          toggleDialog={toggleDialog}
          rowData={state.editStatus}
          showSuccess={showSuccess}
        />
      </Dialog>
    </div>
  );
}

export default DialogBox;
