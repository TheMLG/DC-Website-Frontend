import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";

const main = (
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(main);
