import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Hämtar root-elementet från HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderar hela appen
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);