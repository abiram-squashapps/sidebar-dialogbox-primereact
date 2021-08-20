import placeholder from "../../assets/images/petersmith.png";
import options from "../../assets/images/options.svg";
import "./tableTemplates.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export const imageBodyTemplate = (rowData) => (
  <div className="p-grig">
    <img
      className="p-col-2 product-image"
      src={rowData.eventImage}
      onError={(e) => (e.target.src = { placeholder })}
      alt={rowData.eventImage}
      width="100px"
      height="60px"
    />
  </div>
);

export const venueBodyTemplate = (rowData) => (
  <div>
    <p className="font-bold mb-1">{rowData.venue.venue}</p>
    <p className=" text-400">{rowData.venue.hallName}</p>
  </div>
);

export const actionsBodyTemplate = (
  rowData,
  showDropDown,
  setDropDown,
  dispatch,
  toggleDialog
) => {
  return (
    <div
      onClick={(e) => {
        setDropDown((prev) => ({ show: !prev.show, id: rowData.id }));
      }}
      className="menu"
    >
      <div className="menu">
        <img src={options} alt="o" />
        {showDropDown.show && showDropDown.id === rowData.id ? (
          <div>
            <Card className="w-7rem p-1 dropdown ">
              <Button
                label="edit"
                className="w-full mb-1"
                onClick={(e) => {
                  console.log(rowData);
                  dispatch({ type: "EDITING", payload: rowData });
                  toggleDialog();
                }}
              />
              <Button
                label="delete"
                className="w-full"
                onClick={(e) => {
                  dispatch({ type: "DELETE", payload: rowData.id });
                }}
              />
            </Card>
          </div>
        ) : null}
      </div>
    </div>
  );
};
