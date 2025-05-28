import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Magazine from "./components/mag";
import Fund from "./components/fund";
import Addvertisemnt from "./components/add";
import Review from "./components/review";
import Aboutus from "./components/aboutus";
import Contribute from "./components/contribute";



const main = (
  <React.StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(main);
