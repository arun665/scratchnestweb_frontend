import React from "react";
import { Fade } from "react-slideshow-image";
import "./Caurosel.css";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619466534/BEACON2_hioxhw.jpg",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619466525/BEACON3_wkr0io.jpg",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619466512/BEACON4_pilsuh.jpg",
];


const Featurecaurosel = () => {
  return (
    <div className="slide-container_bn">
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
