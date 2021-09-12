import React from "react";
import { Fade } from "react-slideshow-image";
import "./Caurosel.css";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1618753384/2_port_Fixed_Reader_2_tuhrot.png",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1618753383/2_port_Fixed_Reader_rzm6bf.png",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1618753385/2_Port_Fixed_Reader_3_pfsjs7.png",
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
