import React, { useState } from "react";

import { Button } from "primereact/button";
import placeholder from "../assets/images/imagePlaceholder.png";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import TextField from "../commonComponents/TextField";
import { useContext } from "react";
import { TableDataContext } from "../context/TableDataContextProvider";
//import ButtonComponent from "../commonComponents/ButtonComponent";

function AddEventForm({ toggleDialog }) {
  const [formData, setFormData] = useState({
    eventName: "",
    timing: "",
    venue: "",
    hallName: "",
    description: "",
  });
  const [imgUrl, setImgUrl] = useState("");
  const [date, setDate] = useState(["", ""]);
  const { dispatch } = useContext(TableDataContext);

  const handleDateRange = (date) => {
    if (!date.value[0] || !date.value[1]) return;
    setDate([date.value[0].toLocaleString(), date.value[1].toLocaleString()]);
  };

  const handleImageInput = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files.length) {
      console.log(URL.createObjectURL(e.target.files[0]));
      setImgUrl(URL.createObjectURL(e.target.files[0]));
    }
  };
  const removeImg = () => {
    if (imgUrl) {
      setImgUrl("");
    }
  };
  // for form data
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`img url-${imgUrl}`);
    let payLoad = {
      id: Math.random() * 1021 * Math.random + 1,
      eventName: formData.eventName,
      eventImage: imgUrl,
      fromDate: new Date(date[0]).toLocaleDateString(),
      toDate: new Date(date[1]).toLocaleDateString(),
      timing: formData.timing,
      venue: {
        hallName: formData.hallName,
        venue: formData.venue,
      },
    };
    dispatch({ type: "ADD_EVENT", payload: payLoad });
    toggleDialog();
  };

  return (
    <div className="p-fluid p-formgrid grid ">
      <div className="field col-12 imginput ">
        <label
          htmlFor="address"
          onClick={removeImg}
          className="flex flex-column justify-content-center align-items-center "
        >
          {" "}
          <div className={imgUrl ? "fullImage" : "smallRoundedImg"}>
            <img src={imgUrl ? imgUrl : placeholder} alt="placeholder" />
          </div>
          {!imgUrl && <p>add cover picture</p>}
        </label>
        <input id="address" type="file" onChange={handleImageInput} />
      </div>

      <TextField
        name="eventName"
        value={formData.eventName}
        handleChange={handleChange}
        label="Event Name"
      />

      <div className="field  col-12 md:col-6">
        <label htmlFor="dateRange">Date Range</label>
        <DateRangePickerComponent
          onChange={handleDateRange}
          startDate={date[0]}
          endDate={date[1]}
          id="daterangepicker"
          placeholder="Select dates"
        />
      </div>

      <TextField
        handleChange={handleChange}
        name="timing"
        label="timing"
        value={formData.timing}
      />

      {/* <div className="p-field col-12 md:col-6">
        <label htmlFor="hallName">Hall Name</label>
        <InputText
          inputId="hallName"
          name="hallName"
          onChange={handleChange}
          value={formData.hallName}
          placeholder="Hall Name"
        />
      </div> */}
      <TextField
        name="hallName"
        value={formData.hallName}
        handleChange={handleChange}
        label="Hall Name"
      />
      {/* <div className="p-field col-12 md:col-6">
        <label htmlFor="venue">Venue</label>
        <InputText
          id="venue"
          type="text"
          name="venue"
          onChange={handleChange}
          value={formData.venue}
        />
      </div> */}
      <TextField
        name="venue"
        value={formData.venue}
        handleChange={handleChange}
        label="Venue"
      />
      {/* <div className="p-field col-12 md:col-6">
        <label htmlFor="description">Description</label>
        <InputText
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div> */}
      <TextField
        name="description"
        value={formData.description}
        handleChange={handleChange}
        label="Description"
      />

      <div className="col-12 md:col-6 flex justify-content-end w-full">
        <Button
          label="cancel"
          className="btn w-5rem mx-5 text-800"
          style={{ background: "#F0F3FF" }}
          onClick={toggleDialog}
        />
        {/*  <ButtonComponent onClick={toggleDialog} bg="#f0f3ff" /> */}
        <Button label="submit" className="btn w-5rem" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEventForm;
