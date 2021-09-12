import React from "react";
import { Fade } from "react-slideshow-image";
import "./Caurosel.scss";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619647956/5_dwtxbb.png",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619647960/4_uabjrd.png",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1619647963/3_oiyhwb.png",
];

const Featurecaurosel = () => {
  return (
    <div id="demo" className=" carousel slide slide-container_dl" data-ride="carousel">

  <div class="carousel-inner">
      <img   class="carousel-item active"  src="https://res.cloudinary.com/dpysmqax5/image/upload/v1619647956/5_dwtxbb.png"  id="img" />

      <img class="carousel-item " src="https://res.cloudinary.com/dpysmqax5/image/upload/v1619647960/4_uabjrd.png" id="img" />
    

      <img class="carousel-item" src="https://res.cloudinary.com/dpysmqax5/image/upload/v1619647963/3_oiyhwb.png" id="img"/>
    
  </div>

  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

  

  );
};
export default Featurecaurosel;
