import React from "react";
import { Button } from "primereact/button";

function ButtonComponent({ onClick, bg, label }) {
  return (
    <Button
      label={label}
      className="btn w-5rem mx-5 text-800"
      style={bg && { background: bg }}
      onClick={onClick}
    />
  );
}

export default ButtonComponent;
