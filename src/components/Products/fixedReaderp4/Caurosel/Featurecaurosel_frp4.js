import React from "react";
import { Fade } from "react-slideshow-image";
import "./Caurosel.css";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1618753639/4_port_Fixed_Reader_biyqsv.png",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1618753640/4_Port_Fixed_Reader_2_ipizsx.png",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1618753641/4_Port_Fixed_Reader_3_uusmlf.png",
];

const Featurecaurosel = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Featurecaurosel;
