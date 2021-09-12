import React from "react";
import { Fade } from "react-slideshow-image";
import "./Caurosel.css";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619040017/anteena_linear_0_z3frdj.png",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619040047/anteena_linear_1_1_du46qz.png",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619040017/anteena_linear_0_z3frdj.png",
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
