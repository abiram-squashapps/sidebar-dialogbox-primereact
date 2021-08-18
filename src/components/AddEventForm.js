import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import placeholder from "../assets/images/petersmith.png";

function AddEventForm({ toggleDialog }) {
  const [formData, setFormData] = useState({
    eventName: "",
    timing: "",
    venue: "",
    hallName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="p-fluid p-formgrid grid ">
      <div className="p-field col-12 imginput flex align-items-center justify-content-center">
        <label
          htmlFor="address"
          className="flex flex-column justify-content-center align-items-center "
        >
          {" "}
          <img
            src={placeholder}
            alt="placeholder"
            width="50px"
            style={{ borderRadius: "50%" }}
          />
          <p>add cover picture</p>
        </label>
        <input id="address" type="file" />
      </div>
      <div className="p-field col-12 md:col-6">
        <label htmlFor="eventName">Event Name</label>
        <InputText
          id="eventName"
          name="eventName"
          type="text"
          value={formData.eventName}
          onChange={handleChange}
        />
      </div>

      <div className="p-field  col-12 md:col-6">
        <label htmlFor="dateRange">Date Range</label>
        <Dropdown id="dateRange" placeholder="select" optionLabel="name" />
      </div>

      <div className="p-field col-12 md:col-6">
        <label htmlFor="timing" onChange={handleChange}>
          Timing
        </label>
        <InputText
          id="timing"
          name="timing"
          value={formData.timing}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="p-field col-12 md:col-6">
        <label htmlFor="hallName">Hall Name</label>
        <InputText
          inputId="hallName"
          name="hallName"
          onChange={handleChange}
          value={formData.hallName}
          placeholder="Hall Name"
        />
      </div>
      <div className="p-field col-12 md:col-6">
        <label htmlFor="venue">Venue</label>
        <InputText
          id="venue"
          type="text"
          name="venue"
          onChange={handleChange}
          value={formData.venue}
        />
      </div>
      <div className="p-field col-12 md:col-6">
        <label htmlFor="description">Description</label>
        <InputText
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="col-12 md:col-6 flex justify-content-end w-full">
        <Button
          label="cancel"
          className="btn w-5rem mx-5 text-800"
          style={{ background: "#F0F3FF" }}
          onClick={toggleDialog}
        />
        <Button label="submit" className="btn w-5rem" />
      </div>
    </div>
  );
}

export default AddEventForm;
