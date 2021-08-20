import React, { useRef, useState } from "react";
import uuid from "uuid/dist/v1";
import { Button } from "primereact/button";
import placeholder from "../assets/images/imagePlaceholder.png";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import TextField from "../commonComponents/TextField";
import { useContext } from "react";
import { TableDataContext } from "../context/TableDataContextProvider";
import { useEffect } from "react";
import { Toast } from "primereact/toast";

//import ButtonComponent from "../commonComponents/ButtonComponent";

function AddEventForm({ toggleDialog, rowData, showSuccess }) {
  const toast = useRef(null);
  const { state, dispatch } = useContext(TableDataContext);
  const [imgUrl, setImgUrl] = useState("");
  const [date, setDate] = useState(["", ""]);
  const [formData, setFormData] = useState({
    eventName: "",
    timing: "",
    venue: "",
    hallName: "",
    description: "",
  });

  //feed data into the form while editing
  useEffect(() => {
    if (rowData) {
      setFormData({
        eventName: rowData.eventName,
        timing: rowData.timing,
        venue: rowData.venue.venue,
        hallName: rowData.venue.hallName,
        description: rowData.description,
      });
      setImgUrl(rowData.eventImage);
      setDate([new Date(rowData.fromDate), new Date(rowData.toDate)]);
    }
  }, [rowData]);

  // for date range component which return an array of two dates
  const handleDateRange = (date) => {
    if (!date.value[0] || !date.value[1]) return;
    setDate([date.value[0].toLocaleString(), date.value[1].toLocaleString()]);
  };
  // for image input , using URL.createobjectUrl to convert image into a url
  const handleImageInput = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files.length) {
      console.log(URL.createObjectURL(e.target.files[0]));
      setImgUrl(URL.createObjectURL(e.target.files[0]));
    }
  };
  // to remove image on click
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

  // submit handler for both edit and add events
  const handleSubmit = (e) => {
    let payLoad = {
      slNo: state.tableData.length + 1,
      id: uuid(),
      eventName: formData.eventName,
      eventImage: imgUrl,
      fromDate: new Date(date[0]).toLocaleDateString(),
      toDate: new Date(date[1]).toLocaleDateString(),
      timing: formData.timing,
      venue: {
        hallName: formData.hallName,
        venue: formData.venue,
      },
      description: formData.description,
    };
    if (rowData) {
      dispatch({ type: "EDIT_EVENT", payload: { ...payLoad, id: rowData.id } });
      dispatch({ type: "DONE_EDITING" });
      showSuccess();
    } else {
      dispatch({ type: "ADD_EVENT", payload: payLoad });
    }
    showSuccess();

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

      <TextField
        name="hallName"
        value={formData.hallName}
        handleChange={handleChange}
        label="Hall Name"
      />

      <TextField
        name="venue"
        value={formData.venue}
        handleChange={handleChange}
        label="Venue"
      />

      <TextField
        name="description"
        value={formData.description}
        handleChange={handleChange}
        label="Description"
      />

      <div className="col-12 md:col-6 flex justify-content-end w-full">
        <Button
          label="cancel"
          className="btn  mx-3 text-800 addEventBtn"
          style={{ background: "#F0F3FF" }}
          onClick={(e) => {
            toggleDialog();
            showSuccess();
            dispatch({ type: "DONE_EDITING" });
          }}
        />
        {/*  <ButtonComponent onClick={toggleDialog} bg="#f0f3ff" /> */}
        <Button
          label={rowData ? "update" : "submit"}
          className="btn  addEventBtn"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEventForm;
