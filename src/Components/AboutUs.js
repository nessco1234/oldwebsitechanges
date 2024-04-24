import React from "react";
import TeamPic from "../Assets/images/resource/nessco-team.webp";
// import NesscoTeamPic from "../Assets/images/resource/nessco-team-pic1.webp";
import Signature from "../Assets/images/resource/signature.webp";

import { FaPlay } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
const AboutUs = () => {
  return (
    <>
      <section className="homeaboutus">
        <div className="sectionContainer">
          <div className="leftabout">
            <img className="leftaboutpic" alt="123" src={TeamPic} />
            <div className="leftaboutpic2">
              <a className="playbtn" href="/">
                <FaPlay />
              </a>
            </div>
          </div>
          <div className="rightabout">
            <h1 className="aboutusbtn">ABOUT US</h1>
            <h1 className="aboutheading">
              Paper cup machine <span> Manufacturer & Exporter</span>
            </h1>
            <p className="aboutpara">
              Nessco India is an international paper cup machine manufacturing
              company with a trusted brand name since 1978 in domestic as well
              as international markets. Since then, NesscoIndia has widened its
              business globally in the whole Disposable Paper Packaging
              Industry.
            </p>
            <h1 className="aboutheading small">CLAIM TO FAME</h1>
            <p className="aboutpara">
              We are known for manufacturing and globally exporting various
              paper packaging machines including Cups, Glass, Straws and Plate
              Machines. We are focused on innovating the disposable
              manufacturing industry with continuous technology upgradation and
              improvisation for sustainable development.
            </p>
            <div className="aboutbtnsection">
              <button className="getaquotebtn">
                Get a Quote <MdArrowRightAlt style={{ fontSize: "3rem" }} />
              </button>
              <img className="signatureimg" alt="123" src={Signature} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
