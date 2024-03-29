import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import FAQ from "./components/FAQ/FAQ";
import BookNow from "./components/BookNow/BookNow/BookNow";
import Footer from "./commons/Footer/Footer";
import CleaningInfo from "./components/BookNow/CleaningInfo/CleaningInfo";
import PersonalInfo from "./components/BookNow/PersonalInfo/PersonalInfo";
import DrawerAppBar from "./components/Navbar/Navbar";
//import TestGrid from "./components/BookNow/TestGrid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <DrawerAppBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/booknow" element={<BookNow />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/booknow/cleaningInfo" element={<CleaningInfo />} />
            <Route path="/booknow/personalInfo" element={<PersonalInfo />} />
            <Route path="/booknow/review" element={<FAQ />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
