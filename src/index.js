import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const main = (
  <React.StrictMode>
    <Navbar />
    <Footer />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(main);
