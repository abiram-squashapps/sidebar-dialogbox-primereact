import { InputText } from "primereact/inputtext";
import React from "react";

function TextField({ handleChange, label, value }) {
  return (
    <div className="p-field col-12 md:col-6">
      <label htmlFor="inputField">{label}</label>
      <InputText
        id="inputField"
        name="timing"
        value={value}
        onChange={handleChange}
        type="text"
      />
    </div>
  );
}

export default TextField;
