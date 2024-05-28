import React from "react";
import { MdOutlineCall, MdOutlineWhatsapp } from "react-icons/md";
import { IoMail, IoMailOutline } from "react-icons/io5";
import { PiMessengerLogo, PiMessengerLogoFill } from "react-icons/pi";
import { IoMdCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
function StaticSocialIcons() {
  return (
    <>
      <div className="staticicons">
        <div className="coinseperator">
          {/* <div className="coinsep"></div> */}
        </div>
        <div className="staticiconcontainer">
          <a aria-label="Static Social Icon" href="https://api.whatsapp.com/send?phone=919982200038" className="staticSocial1">
            <RiWhatsappFill className="staticicon" />
          </a>
          <a aria-label="Static Social Icon" href="tel:+91 99822 00038" className="staticSocial2">
            <IoMdCall className="staticicon"  />
          </a>
          {/* </div> */}
          <div className="staticcontainerpic">
            <div className="staticontainerpic2"></div>
          </div>
          {/* <div className="staticiconcontainer"> */}
          <a aria-label="Static Social Icon" href="mailto:info@nesscoindia.com" className="staticSocial3">
            <IoMail className="staticicon" />
          </a>
          <a aria-label="Static Social Icon" href="https://m.me/NesscoPaperCupMachine" className="staticSocial4">
            <PiMessengerLogoFill className="staticicon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default StaticSocialIcons;
