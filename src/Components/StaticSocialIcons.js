import React from "react";
import { FaWhatsapp,FaPhone } from "react-icons/fa";
function StaticSocialIcons() {
  return (
    <>
      <div className="staticicons">
        <a href="/" className="staticSocial1">
          <FaWhatsapp />
        </a>
        <a href="/" className="staticSocial2">
          <FaPhone />
        </a>
      </div>
    </>
  );
}

export default StaticSocialIcons;
