import React from "react";
import { FaWhatsapp,FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
function StaticSocialIcons() {
  return (
    <>
      <div className="staticicons">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=919982200038" className="staticSocial1">
          <FaWhatsapp style={{fontSize:'3.5rem'}}/>
        </a>
        <a href="tel:+91 99822 00038" className="staticSocial2">
          <FaPhone style={{fontSize:'3rem'}}/>
        </a>
        <a href="mailto:info@nesscoindia.com" className="staticSocial3">
          <MdOutlineEmail  style={{fontSize:'4rem'}}/>
        </a>
      </div>
    </>
  );
}

export default StaticSocialIcons;
