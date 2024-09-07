import React, { useState,useEffect } from "react";
import "./Styles/Global.css";
import axios from 'axios'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import MachineComponent from "./Pages/MachineComponent";
// IMPORTING JSON FILES 
import PaperGlassMachine from './Data/PaperGlassMachine.json'
import FlexoPrinting from './Data/FlexoPrinting.json'
import FullyAutomaticPaperBag from './Data/FullyAutomaticPaperBag.json'
import HighSpeedPaperCup from './Data/HighSpeedPaperCup.json'
import PECoating from './Data/PECoating.json'
import PaperBowl from './Data/PaperBowl.json'
import PaperBucket from './Data/PaperBucket.json'
import PaperCultery from './Data/PaperCultery.json'
import PaperDisposalCup from './Data/PaperDisposalCup.json'
import PaperHandleCup from './Data/PaperHandleCup.json'
import PaperLid from './Data/PaperLid.json'
import PaperPlate from './Data/PaperPlate.json'
import PaperSaladBowl from './Data/PaperSaladBowl.json'
import PaperStraw from './Data/PaperStraw.json'
import RippleWallCup from './Data/RippleWallCup.json'
import RollDieCutting from './Data/RollDieCutting.json'
import SquareBottom from './Data/SquareBottom.json'
import AutomaticOctagonalBox from './Data/AutomaticOctagonalBox.json'
import CartonErecting from './Data/CartonErecting.json'
import LunchBoxForming from './Data/LunchBoxForming.json'
import PaperDomeLid from './Data/PaperDomeLid.json'
import PaperSleeveGluing from './Data/PaperSleeveGluing.json'
import RectangularFlatBottom from './Data/RectangularFlatBottom.json'
import RippleWallCupSleeve from './Data/RippleWallCupSleeve.json'
import ServeDrivenPaperCup from './Data/ServeDrivenPaperCup.json'
import Gallery from "./Pages/Gallery";
import Horeca from "./Components/Blog/Horeca";
import ConsumerChoice from "./Components/Blog/ConsumerChoice";
import PaperPlate2 from "./Components/Blog/PaperPlate";
import RecycledPapers from "./Components/Blog/RecycledPapers";
import PremiumPaper from "./Components/Blog/PremiumPaper";
import StartBuisness from "./Components/Blog/StartBuisness";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import MarketArea from "./Pages/MarketArea";

// MARKET AREA JSON 

import Globalmarket from './MarketData/Global.json'
import UAE from './MarketData/UAE.json'
import Bangladesh from './MarketData/Bangaldesh.json'
import Egypt from './MarketData/Egypt.json'
import France from './MarketData/France.json'
import Germany from './MarketData/Germany.json'
import Iraq from './MarketData/Iraq.json'
import Jordon from './MarketData/Jordon.json'
import OtherGlobalArea from './MarketData/OtherGlobalAreas.json'
import Turkey from './MarketData/Turkey.json'
import MarketAreaDesc from "./Pages/MarkeAreaDesc";

// COUNTRIES DATA 

import UAEPaper from "./CountriesData/UAEPaper";
import UAEPaperBag from "./CountriesData/UAEPaperBag";
import UAEGulfood from "./CountriesData/UAEGulfood";
import EgyptPaper from "./CountriesData/EgyptPaper";
import IraqPaper from "./CountriesData/IraqPaper";
import TurkeyKarton from "./CountriesData/TurkeyKarton";
import TurkeyPaper from "./CountriesData/TurkeyPaper";
import FrancePaper from "./CountriesData/FrancePaper";
import JordanPaper from "./CountriesData/JordanPaper";
import BangladeshPaper from "./CountriesData/BangladeshPaper";
import GermanyPaper from "./CountriesData/GermanyPaper";
import GermanyKShow from "./CountriesData/GermanyKShow";
import Interpack from "./CountriesData/Interpack";
import NepalPaper from "./CountriesData/NepalPaper";
import USAPaper from "./CountriesData/USAPaper";
import OmanPaper from "./CountriesData/OmanPaper";
import SouthafricaPaper from "./CountriesData/SouthafricaPaper";
import SaudiarabPaper from "./CountriesData/SaudiarabPaper";
import RussiaPaper from "./CountriesData/RussiaPaper";
import BrazilPaper from "./CountriesData/BrazilPaper";
import CanadaPaper from "./CountriesData/CanadaPaper";
import ChinaPaper from "./CountriesData/ChinaPaper";
import ItalyPaper from "./CountriesData/ItalyPaper";
import BahrainPaper from "./CountriesData/BahrainPaper";
import CyprusPaper from "./CountriesData/CyprusPaper";
import IranPaper from "./CountriesData/IranPaper";
import IsraelPaper from "./CountriesData/IsraelPaper";
import KuwaitPaper from "./CountriesData/KuwaitPaper";
import KoreaPaper from "./CountriesData/KoreaPaper";
import Thankyou from "./Pages/Thankyou";
import PaperBag from './Data/PaperBag.json'
import ScrollToTop from "./Components/Layout/ScrollToTop";
import USAPaperBag from "./CountriesData/USAPaperBag";
import { RemoveTrailingSlash } from "./TrailingSlash";

function useTrackUserSource() {
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = () => {
      const sessionStartTime = new Date(localStorage.getItem('session_start_time')).getTime();
      const sessionEndTime = new Date().getTime();
      const sessionDuration = (sessionEndTime - sessionStartTime) / 1000; // in seconds
  
      console.log(`Total Session Time: ${sessionDuration} seconds`);
    };
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  

  useEffect(() => {
    // Fetch IP and device details as before
    const fetchIPData = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const data = response.data;
        
        console.log(`IP Address: ${data.ip}`);
        console.log(`Country: ${data.country_name}`);
        console.log(`City: ${data.city}`);
        console.log(`Region: ${data.region}`);
        console.log(`Latitude: ${data.latitude}`);
        console.log(`Longitude: ${data.longitude}`);
        console.log(`Postal Code: ${data.postal}`);
      } catch (error) {
        console.error("Error fetching IP data:", error);
      }
    };

    const getUserDeviceDetails = () => {
      const userAgent = navigator.userAgent;
      const language = navigator.language;
      const platform = navigator.platform;

      let browserName = "Unknown Browser";
      let osName = "Unknown OS";
      let deviceType = "Desktop";

      if (/windows/i.test(userAgent)) {
        osName = "Windows";
      } else if (/mac/i.test(userAgent)) {
        osName = "MacOS";
      } else if (/linux/i.test(userAgent)) {
        osName = "Linux";
      } else if (/android/i.test(userAgent)) {
        osName = "Android";
        deviceType = "Mobile";
      } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        osName = "iOS";
        deviceType = "Mobile";
      }

      if (/edg/i.test(userAgent)) {
        browserName = "Edge";  
      } else if (/chrome/i.test(userAgent) && !/edg/i.test(userAgent)) {
        browserName = "Chrome";
      } else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) {
        browserName = "Safari";
      } else if (/firefox/i.test(userAgent)) {
        browserName = "Firefox";
      } else if (/msie|trident/i.test(userAgent)) {
        browserName = "Internet Explorer";
      }
      

      console.log(`Device Language: ${language}`);
      console.log(`Operating System: ${osName}`);
      console.log(`Device Type: ${deviceType}`);
      console.log(`Browser: ${browserName}`);
      console.log(`Platform: ${platform}`);
    };

    const trackUserSession = () => {
      const currentPath = location.pathname;
      const sessionStartTime = localStorage.getItem('session_start_time');
      const lastPage = localStorage.getItem('last_page');
      const pageVisitCount = parseInt(localStorage.getItem('page_visit_count')) || 0;
      const totalVisitCount = parseInt(localStorage.getItem('total_visit_count')) || 0;
      const sessionPageVisitCount = parseInt(localStorage.getItem('session_page_visit_count')) || 0;

      if (!sessionStartTime) {
        // New session
        localStorage.setItem('session_start_time', new Date().toISOString());
        localStorage.setItem('entry_page', currentPath);
        localStorage.setItem('session_page_visit_count', 1);
        localStorage.setItem('page_visit_count', pageVisitCount + 1);
      } else {
        // Existing session
        localStorage.setItem('session_page_visit_count', sessionPageVisitCount + 1);
      }

      localStorage.setItem('last_page', currentPath);
      localStorage.setItem('total_visit_count', totalVisitCount + 1);

      console.log(`Current Page: ${currentPath}`);
      console.log(`Entry Page: ${localStorage.getItem('entry_page')}`);
      console.log(`Last Page: ${lastPage}`);
      console.log(`Page Visit Count This Session: ${localStorage.getItem('session_page_visit_count')}`);
      console.log(`Total Visit Count: ${localStorage.getItem('total_visit_count')}`);
    };

    const trackPageTime = () => {
      const currentPath = location.pathname;
      const pageStartTime = localStorage.getItem('page_start_time');

      if (pageStartTime) {
        const timeSpent = new Date().getTime() - new Date(pageStartTime).getTime();
        console.log(`Time spent on ${location.pathname}: ${timeSpent / 1000} seconds`);
      }

      localStorage.setItem('page_start_time', new Date().toISOString());
    };

    // Track user source as before
    const urlParams = new URLSearchParams(location.search);
    const sourceParam = urlParams.get('source');
    const referrer = document.referrer;

    if (sourceParam) {
      console.log(`User Source: ${sourceParam}`);
    } else if (referrer) {
      if (referrer.includes('google.com')) {
        console.log('User Source: Search Engine (Google)');
      } else if (referrer.includes('facebook.com')) {
        console.log('User Source: Facebook');
      } else if (referrer.includes('instagram.com')) {
        console.log('User Source: Instagram');
      } else if (referrer.includes('youtube.com')) {
        console.log('User Source: YouTube');
      } else if (referrer.includes('whatsapp.com')) {
        console.log('User Source: WhatsApp');
      } else {
        console.log(`User Source: Other Referrer (${referrer})`);
      }
    } else {
      console.log('User Source: Direct Source');
    }

    fetchIPData();
    getUserDeviceDetails();
    trackUserSession();
    trackPageTime();
  }, [location]);
}




function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [download, setdownload] = useState(true)

  const img1 = 'https://www.nesscoindia.com/Assets/images/resource/paper-glass-machine.webp'
  const img2 = 'https://www.nesscoindia.com/Assets/images/resource/disposable-paper-cup-making-machine.webp'
  const img3 = 'https://www.nesscoindia.com/Assets/images/resource/High-Speed-Paper-Cup-Making-Machine.webp'
  const img4 = 'https://www.nesscoindia.com/Assets/images/resource/paper-handle-cup-machine.webp'
  const img5 = 'https://www.nesscoindia.com/Assets/images/resource/ripple-wall-cup-machine.webp'
  const img6 = 'https://www.nesscoindia.com/Assets/images/resource/ServoDrivenMachine.webp'
  const img7 = 'https://www.nesscoindia.com/Assets/images/resource/DomeLidMachine.webp'
  const img8 = 'https://www.nesscoindia.com/Assets/images/resource/paper-container-bowl-machine.webp'
  const img9 = 'https://www.nesscoindia.com/Assets/images/resource/salad-bowl-making-machine.webp'
  const img10 = 'https://www.nesscoindia.com/Assets/images/resource/paper-lid-machine.webp'
  const img11 = 'https://www.nesscoindia.com/Assets/images/resource/paper-cutlery-machine.webp'
  const img12 = 'https://www.nesscoindia.com/Assets/images/resource/pop-corn-tub-making-machine.webp'
  const img13 = 'https://www.nesscoindia.com/Assets/images/resource/paper-plate-machine.webp'
  const img14 = 'https://www.nesscoindia.com/Assets/images/resource/LunchBoxMachine.webp'
  const img15 = 'https://www.nesscoindia.com/Assets/images/resource/CartonErectingMachine.webp'
  const img16 = 'https://www.nesscoindia.com/Assets/images/resource/OctagonalMachine.webp'
  const img17 = 'https://www.nesscoindia.com/Assets/images/resource/RectangularMachine.webp'
  const img18 = 'https://www.nesscoindia.com/Assets/images/resource/flexo-printing-machine-nessco.webp'
  const img19 = 'https://www.nesscoindia.com/Assets/images/resource/roll-die-cutting-machine.webp'
  const img20 = 'https://www.nesscoindia.com/Assets/images/resource/pe-coating-machine.webp'
  const img21 = 'https://www.nesscoindia.com/Assets/images/resource/paper-straw-making-machine.webp'
  const img22 = 'https://www.nesscoindia.com/Assets/images/resource/FolderGluing.webp'
  const img23 = 'https://www.nesscoindia.com/Assets/images/resource/SleeveForming.webp'
  const img24 = 'https://www.nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-making-machine.webp'
  const img25 = 'https://www.nesscoindia.com/Assets/images/resource/paper-food-bag-making-machine.webp'
  const img26 = 'https://www.nesscoindia.com/Assets/images/service/Fully-Automatic-Paper-Bag-Machine.webp'
  const serv1 = 'https://www.nesscoindia.com/Assets/images/service/PaperHandleCup.webp'
  const serv2 = 'https://www.nesscoindia.com/Assets/images/service/Ripple-wall-paper-cup.webp'
  const serv3 = 'https://www.nesscoindia.com/Assets/images/service/Paper-Container-Making-Machine.webp'
  const serv4 = 'https://www.nesscoindia.com/Assets/images/service/PopcornTub.webp'
  const serv5 = 'https://www.nesscoindia.com/Assets/images/service/Paper-Lids.webp'
  const serv6 = 'https://www.nesscoindia.com/Assets/images/service/Paper-Cutlery.webp'
  const serv7 = 'https://www.nesscoindia.com/Assets/images/service/box.jpg'
  const serv8 = 'https://www.nesscoindia.com/Assets/images/service/paper-plates.webp'
  const serv9 = 'https://www.nesscoindia.com/Assets/images/service/Flexo-Printed-Roll.webp'
  const serv10 = 'https://www.nesscoindia.com/Assets/images/service/roll-die-cutting.webp'
  const serv11 = 'https://www.nesscoindia.com/Assets/images/service/PE-Coating-Roll.webp'
  const serv12 = 'https://www.nesscoindia.com/Assets/images/service/PE-Coating-Machine.webp'
  const serv13 = 'https://www.nesscoindia.com/Assets/images/service/PaperStraws.webp'
  const serv14 = 'https://www.nesscoindia.com/Assets/images/service/garment-paper-bag.webp'
  const serv15 = 'https://www.nesscoindia.com/Assets/images/service/Square-Bottom-Paper-Bags.webp'
  useTrackUserSource();
  return (
    <>
      
        <RemoveTrailingSlash/>
        <ScrollToTopOnRouteChange />
        <StaticSocialIcons />
        <Header setdown={setdownload} />
        <Routes>
          <>
            <Route element={<Home />} exact path="/" />
            <Route element={<Contact />} exact path="/contact/" />
            <Route element={<Product />} exact path="/product/" />
            <Route element={<Video />} exact path="/video/" />
            <Route element={<Blog />} exact path="/blog/" />
            <Route element={<About />} exact path="/about-us/" />
            <Route element={<PrivacyPolicy />} exact path="/privacy-policy/" />
            <Route element={<MarketArea activecomp={"Market-Area"} data={Globalmarket} />} exact path="/market-area/" />
            <Route element={<Gallery />} exact path="/our-gallery/" />
          </>
          <>
            <Route element={<Horeca />} exact path="/blog/disposable-packaging-solutions-for-horeca/" />
            <Route element={<ConsumerChoice />} exact path="/blog/why-say-yes-to-paper-cups/" />
            <Route element={<PaperPlate2 />} exact path="/blog/paper-plate-making-machine-an-eco-friendly-alternative/" />
            <Route element={<RecycledPapers />} exact path="/blog/use-paper-cups-it-can-be-recycled/" />
            <Route element={<PremiumPaper />} exact path="/blog/paper-cups-for-hot-beverages/" />
            <Route element={<StartBuisness />} exact path="/blog/paper-cup-business-idea/" />
          </>
          <>
            <Route element={<MarketArea activecomp={"UAE"} data={UAE} />} exact path="/uae/" />
            <Route element={<MarketArea activecomp={"Egypt"} data={Egypt} />} exact path="/egypt/" />
            <Route element={<MarketArea activecomp={"Iraq"} data={Iraq} />} exact path="/iraq/" />
            <Route element={<MarketArea activecomp={"Turkey"} data={Turkey} />} exact path="/turkey/" />
            <Route element={<MarketArea activecomp={"France"} data={France} />} exact path="/france/" />
            <Route element={<MarketArea activecomp={"Globe"} data={OtherGlobalArea} />} exact path="/global/" />
            <Route element={<MarketArea activecomp={"Jordan"} data={Jordon} />} exact path="/jordan/" />
            <Route element={<MarketArea activecomp={"Bangladesh"} data={Bangladesh} />} exact path="/bangladesh/" />
            <Route element={<MarketArea activecomp={"Germany"} data={Germany} />} exact path="/germany/" />
          </>
          <>
            <Route element={<UAEPaper />} exact path="/uae/paper-cup-making-machine-in-uae/" />
            <Route element={<UAEPaperBag />} exact path="/uae/paper-bag-making-machine-in-uae/" />
            <Route element={<UAEGulfood />} exact path="/uae/gulfood-manufacturing/" />
            <Route element={<EgyptPaper />} exact path="/egypt/paper-cup-making-machine-in-egypt/" />
            <Route element={<IraqPaper />} exact path="/iraq/paper-cup-making-machine-in-iraq/" />
            <Route element={<TurkeyKarton />} exact path="/turkey/karton-bardak-makinesi/" />
            <Route element={<TurkeyPaper />} exact path="/turkey/paper-cup-making-machine-in-turkey/" />
            <Route element={<FrancePaper />} exact path="/france/paper-cup-making-machine-in-france/" />
            <Route element={<JordanPaper />} exact path="/jordan/paper-cup-making-machine-in-jordan/" />
            <Route element={<BangladeshPaper />} exact path="/bangladesh/paper-cup-making-machine-in-bangladesh/" />
            <Route element={<GermanyPaper />} exact path="/global/paper-cup-making-machine-in-germany/" />
            <Route element={<GermanyKShow />} exact path="/germany/k-show-germany/" />
            <Route element={<Interpack />} exact path="/germany/interpack/" />
            <Route element={<NepalPaper />} exact path="/global/paper-cup-making-machine-in-nepal/" />
            <Route element={<USAPaperBag />} exact path="/global/paper-shopping-bag-forming-machine-in-usa/" />
            <Route element={<OmanPaper />} exact path="/global/paper-cup-making-machine-in-oman/" />
            <Route element={<SouthafricaPaper />} exact path="/global/paper-cup-making-machine-in-south-africa/" />
            <Route element={<SaudiarabPaper />} exact path="/global/paper-cup-making-machine-in-saudi-arab/" />
            <Route element={<RussiaPaper />} exact path="/global/paper-cup-making-machine-in-russia/" />
            <Route element={<BrazilPaper />} exact path="/global/paper-cup-making-machine-in-brazil/" />
            <Route element={<CanadaPaper />} exact path="/global/paper-cup-making-machine-in-canada/" />
            <Route element={<ChinaPaper />} exact path="/global/paper-cup-making-machine-in-china/" />
            <Route element={<ItalyPaper />} exact path="/global/paper-cup-making-machine-italy/" />
            <Route element={<BahrainPaper />} exact path="/global/paper-cup-making-machine-in-bahrain/" />
            <Route element={<CyprusPaper />} exact path="/global/paper-cup-making-machine-in-cyprus/" />
            <Route element={<IranPaper />} exact path="/global/paper-cup-making-machine-in-iran/" />
            <Route element={<IsraelPaper />} exact path="/global/paper-cup-making-machine-in-israel/" />
            <Route element={<KuwaitPaper />} exact path="/global/paper-cup-making-machine-in-kuwait/" />
            <Route element={<KoreaPaper />} exact path="/global/paper-cup-machine-in-korea/" />
            <Route element={<USAPaper />} exact path="/global/paper-cup-machine-in-usa/" />
          </>
          <>
            <Route element={<MachineComponent down={download} setdown={setdownload} img1url={img1} img2url={img2} img3url={img3} img4url={img24} imgurl={img24} data={HighSpeedPaperCup} />} exact path="/product/high-speed-paper-cup-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img1} data={PaperGlassMachine} />} exact path="/product/paper-glass-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img18} img2url={serv9} data={FlexoPrinting} />} exact path="/product/flexo-printing-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img26} img2url={serv14} data={FullyAutomaticPaperBag} />} exact path="/product/paper-shopping-bag-making-machine/" />
            <Route element={<MachineComponent imgurl={img3} data={HighSpeedPaperCup} />} exact path="/product/paper-glass-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img20} img2url={serv11} img3url={serv12} data={PECoating} />} exact path="/product/pe-coating-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img8} img2url={serv3} data={PaperBowl} />} exact path="/product/paper-container-bowl-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img12} img2url={serv4} data={PaperBucket} />} exact path="/product/pop-corn-tub-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img11} img2url={serv6} data={PaperCultery} />} exact path="/product/paper-cutlery-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img2} data={PaperDisposalCup} />} exact path="/product/disposable-paper-cup-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img4} img2url={serv1} data={PaperHandleCup} />} exact path="/product/paper-handle-cup-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img10} img2url={serv5} data={PaperLid} />} exact path="/product/paper-lid-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img13} img2url={serv8} data={PaperPlate} />} exact path="/product/paper-plate-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img9} img2url={serv3} data={PaperSaladBowl} />} exact path="/product/salad-bowl-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img21} img2url={serv13} data={PaperStraw} />} exact path="/product/paper-straw-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img5} img2url={serv2} data={RippleWallCup} />} exact path="/product/ripple-wall-cup-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img19} img2url={serv10} data={RollDieCutting} />} exact path="/product/roll-die-cutting-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img25} img2url={serv15} data={SquareBottom} />} exact path="/product/paper-food-bag-making-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img16} data={AutomaticOctagonalBox} />} exact path="/product/octagonal-box-forming-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img15} img2url={serv7} data={CartonErecting} />} exact path="/product/carton-erecting-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img14} data={LunchBoxForming} />} exact path="/product/lunch-box-forming-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img7} data={PaperDomeLid} />} exact path="/product/paper-dome-lid-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img23} data={PaperSleeveGluing} />} exact path="/product/paper-sleeve-gluing-folding-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img17} data={RectangularFlatBottom} />} exact path="/product/rectangle-flat-bottom-bowl-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img22} data={RippleWallCupSleeve} />} exact path="/product/ripple-wall-cup-sleeve-glueing-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img6} data={ServeDrivenPaperCup} />} exact path="/product/servo-driven-paper-cup-machine/" />
            <Route element={<MachineComponent down={download} setdown={setdownload} imgurl={img26} img2url={serv14} data={PaperBag} />} exact path="/product/paper-bag-making-machine/" />
            <Route element={<Thankyou link={download} />} exact path="/thank-you/" />
          </>
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
        <Footer />
        <ScrollToTop />
    </>
  );
}

export default App;
