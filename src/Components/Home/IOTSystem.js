import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const IOTSystem = () => {
  return (
    <>
      <section className="iotsection">
        <div className="iotcontainer">
          <div className="leftiot">
            <p className="aboutusbtn ">IOT SYSTEM</p>
            <h2 className="iotheading">Nessco Remote Control <span> Maintenance System</span></h2>
            <p className="iotpara">
              {" "}
              In our Control Maintenance System, we can customize the IOT
              reports/data according to customer requirement. We can also do
              integration with customer ERP i.e. SAP, ORACLE, TCS ion and any
              other ERP.
            </p>
            <ul className="iotlist">
              <li>
                Monitor Production Reports
              </li>
              <li>
                Monitor Machine Efficiency              </li>
              <li>
                Production Target Analysis              </li>
              <li>
                Machine Problem Analysis              </li>
              <li>
                Production Setup Data              </li>
              <li>
                Machine Element Monitoring              </li>
              <li>
                Machine Alarm Monitoring              </li>
              <li>
                Machine Performance Overview              </li>
            </ul>
            <a className="headerbtn" href={'https://www.nesscoindia.com/Assets/images/resource/Nessco-Machines-Control-With-Smart-IOT-Solution.pdf'} target="_blank"  style={{ padding: "1.5rem 2rem", width:"fitContent" }}>
              <p className='headerbtncon'>Get Details !</p> <FaArrowRightLong className='headerbtnarrow' style={{ fontSize: "1.5rem" }} /></a>
          </div>
          <div className="rightiot">
            <img src={'https://www.nesscoindia.com/Assets/images/resource/iot.webp'} alt="iot" />
          </div>
        </div>
      </section>
    </>
  );
};

export default IOTSystem;
