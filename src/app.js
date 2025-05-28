import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Magazine from "./pages/mag";
import Fund from "./pages/fund";
import Addvertisemnt from "./pages/add";
import Review from "./pages/review";
import Aboutus from "./pages/aboutus";
import Contribute from "./pages/contribute";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mag" element={<Magazine />} />
                <Route path="/fund" element={<Fund />} />
                <Route path="/add" element={<Addvertisemnt />} />
                <Route path="/review" element={<Review />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/contribute" element={<Contribute />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;