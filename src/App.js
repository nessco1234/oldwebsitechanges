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
import Product from "./Pages/Product";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTopOnRouteChange />
        <StaticSocialIcons />
        <Header />
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Contact />} exact path="/contact" />
          <Route element={<Product />} exact path="/product" />
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
