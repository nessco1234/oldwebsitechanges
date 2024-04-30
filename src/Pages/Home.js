import React from "react";
import AboutUs from "../Components/Home/AboutUs";
import '../Styles/Home.css'
import IOTSystem from '../Components/Home/IOTSystem'
import Presence from "../Components/Home/Presence";
import Subscribe from "../Components/Home/Subscribe";
import Article from "../Components/Home/Article";
import Creation from "../Components/Home/Creation";
import Nessco from "../Components/Home/Nessco";
import Banner from "../Components/Home/Banner";
import InfinteCompany from "../Components/Home/InfinteCompany";
import HomeStats from "../Components/Home/HomeStats";
import WeAreNessco from "../Components/Home/WeAreNessco";
import Testimonials from "../Components/Home/Testimonials";
import Products from "../Components/Home/Products";
import BannerContent from "../Components/Home/BannerContent";
const Home = () => {
  
  return (
    <>
      <Banner/>
      {/* <BannerContent/> */}
      <WeAreNessco/>
      <AboutUs />
      <Products/>
      <Creation/>
      <IOTSystem/>
      <Presence/>
      <Testimonials/>
      <InfinteCompany/>
      <HomeStats/>
      <Article/>
      
    </>
  );
};

export default Home;
