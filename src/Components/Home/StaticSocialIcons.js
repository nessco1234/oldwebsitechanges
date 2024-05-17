import React from "react";
import { FaWhatsapp,FaPhone } from "react-icons/fa";
function StaticSocialIcons() {
  return (
    <>
      <div className="staticicons">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=919982200038" className="staticSocial1">
          <FaWhatsapp style={{fontSize:'2.4rem'}}/>
        </a>
        <a href="tel:+91 99822 00038" className="staticSocial2">
          <FaPhone style={{fontSize:'2rem'}}/>
        </a>
      </div>
    </>
  );
}

export default StaticSocialIcons;
