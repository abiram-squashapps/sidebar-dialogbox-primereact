import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../node_modules/primeflex/primeflex.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
