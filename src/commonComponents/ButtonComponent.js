import React, { useEffect } from "react";
import { Button } from "primereact/button";

function ButtonComponent({ onClick, bg, label, svg }) {
  return (
    <Button
      /* label={label} */
      className="btn w-full  text-100"
      style={bg && { background: bg }}
      onClick={onClick}
    >
      <img className="pr-3 py-2" src={svg} alt="svg" />
      <span>{label}</span>
    </Button>
  );
}

export default ButtonComponent;
