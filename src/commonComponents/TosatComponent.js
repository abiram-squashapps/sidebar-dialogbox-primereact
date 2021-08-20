import React from "react";
import { Toast } from "primereact/toast";

function TosatComponent({ ref, position = "bottom-right " }) {
  return (
    <div>
      <Toast ref={ref} position={position} />
    </div>
  );
}

export default TosatComponent;
