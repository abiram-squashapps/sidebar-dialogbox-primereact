import React, { useState } from "react";

//import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import placeholder from "../assets/images/petersmith.png";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import TextField from "../commonComponents/TextField";

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

  const handleDateRange = (date) => {
    console.log(`start date ${date.value[0]}`);
    console.log(`end date ${date.value[1]}`);
    setDate([...date.target.value]);
  };

  const handleImageInput = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files.length) {
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

  const handleSubmit = () => {
    let payLoad = {
      id: "e1",
      eventName: formData.eventName,
      eventImage: imgUrl,
      fromDate: date[0],
      toDate: date[1],
      timing: formData.timing,
      venue: {
        hallName: formData.hallName,
        venue: formData.venue,
      },
    };
  };

  return (
    <div className="p-fluid p-formgrid grid ">
      <div className="p-field col-12 imginput flex align-items-center justify-content-center">
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

      <div className="p-field  col-12 md:col-6">
        <label htmlFor="dateRange">Date Range</label>
        <DateRangePickerComponent
          onChange={handleDateRange}
          startDate={date[0]}
          endDate={date[1]}
          id="daterangepicker"
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
        <Button label="submit" className="btn w-5rem" />
      </div>
    </div>
  );
}

export default AddEventForm;
