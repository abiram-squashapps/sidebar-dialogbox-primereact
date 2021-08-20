import placeholder from "../../assets/images/petersmith.png";
import options from "../../assets/images/options.svg";
import "./tableTemplates.css";
import { Card } from "primereact/card";

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

export const actionsBodyTemplate = (rowData) => {
  let show = true;
  return (
    <div
      onClick={(e) => {
        show = false;
      }}
    >
      <div className="menu">
        <img src={options} alt="o" />
        {show && (
          <div>
            <Card className="w-5rem dropdown ">hi</Card>
          </div>
        )}
      </div>
    </div>
  );
};
