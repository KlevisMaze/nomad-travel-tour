/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hotels from "./pages/Hotels";
import Tours from "./pages/Tours";
import Excursions from "./pages/Excursions";
import Transport from "./pages/Transport";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/excursions" element={<Excursions />} />
        <Route path="/transport" element={<Transport />} />
      </Routes>
    </Router>
  );
}

export default App;
