import React from "react";
import "./Styles/Global.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import StaticSocialIcons from "./Components/StaticSocialIcons";
import './Styles/Utils.css'
function App() {
  return (
    <>
      <StaticSocialIcons />
      <Router>
        <Routes>
          <Route element={<Home />} exact path="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
