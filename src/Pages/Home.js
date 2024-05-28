import React from "react";
import AboutUs from "../Components/Home/AboutUs";
import '../Styles/Home.css'
import IOTSystem from '../Components/Home/IOTSystem'
import Presence from "../Components/Home/Presence";
import Article from "../Components/Home/Article";
import Creation from "../Components/Home/Creation";
import InfinteCompany from "../Components/Home/InfinteCompany";
import HomeStats from "../Components/Home/HomeStats";
import WeAreNessco from "../Components/Home/WeAreNessco";
import Testimonials from "../Components/Home/Testimonials";
import Products from "../Components/Home/Products";
import { Helmet } from 'react-helmet'
import Drupa from "../Components/Home/Drupa";
import Banner from "../Components/Home/Banner";
const Home = () => {

  return (
    <>
      <Helmet>
        <title>Paper Cup Machine Manufacturer and Supplier - Nessco India</title>
        <meta name="description" content="Paper Cup Machine Manufacturer &amp; Exporter. A Wide Range of Machines Pairing With The Latest Technology. Enquire Now!" />
        <meta name="keywords" content="Nessco India" />
        <meta name="State" content="Rajasthan" />
        <meta name="City" content="Jaipur" />
        <meta name="address" content="186 Apparel Park, Mahal Rd, Ricco Industrial Area, Jagatpura, Jaipur, Rajasthan 302022, India" />
        <meta name="copyright" content="Copyright 2022 Nessco India" />
        <meta name="distribution" content="global" />
        <meta property="og:image" content="https://www.nesscoindia.com/assets/images/32x32.webp" />
        <meta name="language" content="english" />
        <meta name="robots" content="index,follow" />
        <meta name="publisher" content="Nessco India" />
        <meta name="author" content="Nessco India" />
        <link rel="canonical" href="https://www.nesscoindia.com" />

      </Helmet>
        <Banner />
        <Drupa />
        <WeAreNessco />
        <AboutUs />
        <Products />
        <Creation />
        <IOTSystem />
        <Presence />
        <Testimonials />
        <InfinteCompany />
        <HomeStats />
        <Article />

    </>
  );
};

export default Home;
