import React from "react";
import AboutUs from "../Components/AboutUs";
import '../Styles/Home.css'
import IOTSystem from '../Components/IOTSystem'
import Presence from "../Components/Presence";
const Home = () => {
  return (
    <>
      <AboutUs />
      <IOTSystem/>
      <Presence/>
    </>
  );
};

export default Home;
