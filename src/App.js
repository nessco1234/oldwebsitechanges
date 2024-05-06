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
          <Route element={<MachineComponent data={PaperGlassMachine}/>} exact path="/product/paper-glass-making-machine/" />
          <Route element={<MachineComponent data={FlexoPrinting}/>} exact path="/product/flexo-printing-machine/" />
          <Route element={<MachineComponent data={FullyAutomaticPaperBag}/>} exact path="product/paper-shopping-bag-making-machine/" />
          <Route element={<MachineComponent data={HighSpeedPaperCup}/>} exact path="/product/paper-glass-making-machine/" />
          <Route element={<MachineComponent data={PECoating}/>} exact path="/product/pe-coating-machine/" />
          <Route element={<MachineComponent data={PaperBowl}/>} exact path="/product/paper-container-bowl-making-machine/" />
          <Route element={<MachineComponent data={PaperBucket}/>} exact path="/product/pop-corn-tub-making-machine/" />
          <Route element={<MachineComponent data={PaperCultery}/>} exact path="/product/paper-cutlery-machine/" />
          <Route element={<MachineComponent data={PaperDisposalCup}/>} exact path="/product/disposable-paper-cup-making-machine/" />
          <Route element={<MachineComponent data={PaperHandleCup}/>} exact path="/product/paper-handle-cup-making-machine/" />
          <Route element={<MachineComponent data={PaperLid}/>} exact path="/product/paper-lid-making-machine/" />
          <Route element={<MachineComponent data={PaperPlate}/>} exact path="/product/paper-plate-making-machine/" />
          <Route element={<MachineComponent data={PaperSaladBowl}/>} exact path="/product/salad-bowl-making-machine/" />
          <Route element={<MachineComponent data={PaperStraw}/>} exact path="/product/paper-straw-making-machine/" />
          <Route element={<MachineComponent data={RippleWallCup}/>} exact path="/product/ripple-wall-cup-machine/" />
          <Route element={<MachineComponent data={RollDieCutting}/>} exact path="/product/roll-die-cutting-machine/" />
          <Route element={<MachineComponent data={SquareBottom}/>} exact path="/product/paper-food-bag-making-machine/" />
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
