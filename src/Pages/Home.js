import React from "react";
import AboutUs from "../Components/AboutUs";
import '../Styles/Home.css'
import IOTSystem from '../Components/IOTSystem'
import Presence from "../Components/Presence";
import Subscribe from "../Components/Subscribe";
import Article from "../Components/Article";
import Creation from "../Components/Creation";
import Nessco from "../Components/Nessco";
const Home = () => {
  
  return (
    <>
      {/* <Nessco /> */}
      <AboutUs />
      <Creation/>
      <IOTSystem/>
      <Presence/>
      <Article/>
      <Subscribe/>
    </>
  );
};

export default Home;
