import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./components/App";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

// Stylesheets
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "./main.styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
