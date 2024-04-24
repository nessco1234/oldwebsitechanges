import React from "react";
import "./Styles/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StaticSocialIcons from "./Components/StaticSocialIcons";
import './Styles/Utils.css'
import Footer from "./Components/Layout/Footer";
function App() {
  return (
    <>
      <StaticSocialIcons />
      <Router>
        <Routes>
          <Route element={<Home />} exact path="/" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
