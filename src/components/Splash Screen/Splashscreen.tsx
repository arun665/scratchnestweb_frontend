import { IonGrid } from "@ionic/react";
import React from "react";
import "./splashscreen.scss";
import bg1 from './bg1.gif';
import bg2 from './bg2.gif';
function Splashscreen() {
  return (
    <div className="splashscreen fade-in">
      <img
        className="desktop"
        src={bg1}
      />
      <img
        className="phone"
        src={bg2}
      />
      
    </div>
  );
}

export default Splashscreen;
