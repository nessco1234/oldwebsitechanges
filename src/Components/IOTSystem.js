import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import iot from '../Assets/images/resource/iot.webp'
const IOTSystem = () => {
  return (
    <>
      <section className="iotsection">
        <div className="iotcontainer">
          <div className="leftiot">
            <h1 className="aboutusbtn">IOT SYSTEM</h1>
            <h1 className="iotheading">Nessco Remote Control <span> Maintenance System</span></h1>
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
                  Monitor Production Reports
              </li>
              <li>
                  Monitor Production Reports
              </li>
              <li>
                  Monitor Production Reports
              </li>
              <li>
                  Monitor Production Reports
              </li>
              <li>
                  Monitor Production Reports
              </li>
              <li>
                  Monitor Production Reports
              </li>
              <li>
                  Monitor Production Reports
              </li>
            </ul>
            <button className="getaquotebtn">
                Get Details <MdArrowRightAlt style={{ fontSize: "3rem" }} /></button>
          </div>
          <div className="rightiot">
            <img src={iot} alt="123"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default IOTSystem;
