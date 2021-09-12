import {
  IonRow,
  IonGrid,
  IonText,
  IonCol,
  IonSlides,
  IonSlide,
  IonContent,
} from "@ionic/react";
import React from "react";
import "./about.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import Footer from "../Footer/Footer";
import MeetSliderMob from "./meet_slider";

function Aboutus() {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <div className="About">
   
      <div className="Footer_about">
        <Footer />
      </div>
    </div>
  );
}

export default Aboutus;
