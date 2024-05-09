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
          <>
            <Route element={<Home />} exact path="/" />
            <Route element={<Contact />} exact path="/contact" />
            <Route element={<Product />} exact path="/product" />
            <Route element={<Video />} exact path="/video" />
            <Route element={<Blog />} exact path="/blog" />
            <Route element={<About />} exact path="/about-us" />
            <Route element={<PrivacyPolicy />} exact path="/privacy-policy" />
            <Route element={<MarketArea activecomp={"Market-Area"} data={Globalmarket} />} exact path="/market-area" />
            <Route element={<Gallery />} exact path="/our-gallery" />
          </>
          <>
            <Route element={<Horeca />} exact path="/blog/disposable-packaging-solutions-for-horeca/" />
            <Route element={<ConsumerChoice />} exact path="/blog/why-say-yes-to-paper-cups/" />
            <Route element={<PaperPlate />} exact path="/blog/paper-plate-making-machine-an-eco-friendly-alternative/" />
            <Route element={<RecycledPapers />} exact path="/blog/use-paper-cups-it-can-be-recycled/" />
            <Route element={<PremiumPaper />} exact path="/blog/paper-cups-for-hot-beverages/" />
            <Route element={<StartBuisness />} exact path="/blog/paper-cup-business-idea/" />
          </>
          <>
            <Route element={<MarketArea activecomp={"UAE"} data={UAE} />} exact path="/uae" />
            <Route element={<MarketArea activecomp={"Egypt"} data={Egypt} />} exact path="/egypt" />
            <Route element={<MarketArea activecomp={"Iraq"} data={Iraq} />} exact path="/iraq" />
            <Route element={<MarketArea activecomp={"Turkey"} data={Turkey} />} exact path="/turkey" />
            <Route element={<MarketArea activecomp={"France"} data={France} />} exact path="/france" />
            <Route element={<MarketArea activecomp={"Globe"} data={OtherGlobalArea} />} exact path="/global" />
            <Route element={<MarketArea activecomp={"Jordan"} data={Jordon} />} exact path="/jordan" />
            <Route element={<MarketArea activecomp={"Bangladesh"} data={Bangladesh} />} exact path="/bangladesh" />
            <Route element={<MarketArea activecomp={"Germany"} data={Germany} />} exact path="/germany" />
          </>
          <>
            <Route element={<UAEPaper />} exact path="/uae/paper-cup-making-machine-in-uae/" />
            <Route element={<UAEPaperBag />} exact path="/uae/paper-bag-making-machine-in-uae/" />
            <Route element={<UAEGulfood />} exact path="/uae/gulfood-manufacturing/" />
            <Route element={<EgyptPaper />} exact path="/egypt/paper-cup-making-machine-in-egypt/" />
            <Route element={<IraqPaper />} exact path="/iraq/paper-cup-making-machine-in-iraq" />
            <Route element={<TurkeyKarton />} exact path="/turkey/karton-bardak-makinesi/" />
            <Route element={<TurkeyPaper />} exact path="/turkey/paper-cup-making-machine-in-turkey/" />
            <Route element={<FrancePaper />} exact path="/france/paper-cup-making-machine-in-france/" />
            <Route element={<JordanPaper />} exact path="/jordan/paper-cup-making-machine-in-jordan/" />
            <Route element={<BangladeshPaper />} exact path="/bangladesh/paper-cup-making-machine-in-bangladesh/" />
            <Route element={<GermanyPaper />} exact path="/global/paper-cup-making-machine-in-germany/" />
            <Route element={<GermanyKShow />} exact path="/germany/k-show-germany/" />
            <Route element={<Interpack />} exact path="/germany/interpack/" />
            <Route element={<NepalPaper />} exact path="/global/paper-cup-making-machine-in-nepal/" />
            <Route element={<USAPaper />} exact path="global/paper-shopping-bag-forming-machine-in-usa/" />
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
            <Route element={<MachineComponent data={HighSpeedPaperCup} />} exact path="/product/high-speed-paper-cup-making-machine/" />
            <Route element={<MachineComponent data={PaperGlassMachine} />} exact path="/product/paper-glass-making-machine/" />
            <Route element={<MachineComponent data={FlexoPrinting} />} exact path="/product/flexo-printing-machine/" />
            <Route element={<MachineComponent data={FullyAutomaticPaperBag} />} exact path="product/paper-shopping-bag-making-machine/" />
            <Route element={<MachineComponent data={HighSpeedPaperCup} />} exact path="/product/paper-glass-making-machine/" />
            <Route element={<MachineComponent data={PECoating} />} exact path="/product/pe-coating-machine/" />
            <Route element={<MachineComponent data={PaperBowl} />} exact path="/product/paper-container-bowl-making-machine/" />
            <Route element={<MachineComponent data={PaperBucket} />} exact path="/product/pop-corn-tub-making-machine/" />
            <Route element={<MachineComponent data={PaperCultery} />} exact path="/product/paper-cutlery-machine/" />
            <Route element={<MachineComponent data={PaperDisposalCup} />} exact path="/product/disposable-paper-cup-making-machine/" />
            <Route element={<MachineComponent data={PaperHandleCup} />} exact path="/product/paper-handle-cup-making-machine/" />
            <Route element={<MachineComponent data={PaperLid} />} exact path="/product/paper-lid-making-machine/" />
            <Route element={<MachineComponent data={PaperPlate} />} exact path="/product/paper-plate-making-machine/" />
            <Route element={<MachineComponent data={PaperSaladBowl} />} exact path="/product/salad-bowl-making-machine/" />
            <Route element={<MachineComponent data={PaperStraw} />} exact path="/product/paper-straw-making-machine/" />
            <Route element={<MachineComponent data={RippleWallCup} />} exact path="/product/ripple-wall-cup-machine/" />
            <Route element={<MachineComponent data={RollDieCutting} />} exact path="/product/roll-die-cutting-machine/" />
            <Route element={<MachineComponent data={SquareBottom} />} exact path="/product/paper-food-bag-making-machine/" />
            <Route element={<MachineComponent data={AutomaticOctagonalBox} />} exact path="/product/automatic-octagonal-box-forming-machine/" />
            <Route element={<MachineComponent data={CartonErecting} />} exact path="/product/carton-erecting-machine/" />
            <Route element={<MachineComponent data={LunchBoxForming} />} exact path="/product/lunch-box-forming-machine/" />
            <Route element={<MachineComponent data={PaperDomeLid} />} exact path="/product/paper-dome-lid-machine/" />
            <Route element={<MachineComponent data={PaperSleeveGluing} />} exact path="/product/paper-sleeve-gluing-folding-machine/" />
            <Route element={<MachineComponent data={RectangularFlatBottom} />} exact path="/product/rectangle-flat-bottom-bowl-machine/" />
            <Route element={<MachineComponent data={RippleWallCupSleeve} />} exact path="/product/ripple-wall-cup-sleeve-glueing-machine/" />
            <Route element={<MachineComponent data={ServeDrivenPaperCup} />} exact path="/product/Servo-driven-paper-cup-machine/" />
          </>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
// import React from 'react'
// import './Styles/Home.css'
// const App = () => {
//   return (
//     <button class="myBtn theme-btn theme-btn-three" id="myBtn"><span data-text="Inquire Now!">Inquire Now!</span></button>
//   )
// }

// export default App
