import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import { TaskApp } from "./taskApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskApp />
  </React.StrictMode>
);
