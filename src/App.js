import React from "react";
import "./Styles/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import StaticSocialIcons from "./Components/Home/StaticSocialIcons";
import './Styles/Utils.css'

import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Contact from "./Pages/Contact";
import Video from "./Pages/Video";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
function App() {
  return (
    <>
      <Router>
        <StaticSocialIcons />
        <Header />
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Contact />} exact path="/contact" />
          <Route element={<Video />} exact path="/video" />
          <Route element={<Blog />} exact path="/blog" />
          <Route element={<About />} exact path="/about-us" />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
