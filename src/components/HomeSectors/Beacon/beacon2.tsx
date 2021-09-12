import React from "react";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import "./beacon2.scss";
import beaconphone from "./beaconphone.jpg";
import beacon from "./beacon2.png";
import {useState} from 'react';

import { Link , useHistory } from "react-router-dom";
function Beacon() {
  let[d3,setD3]=useState(false);
  var history = useHistory();
  return (
    <>
      <div className="beacon" id="beacon2" >

<div className="container-fluid" >
  

  <div className="row">

<div className="col-sm-5 col-md-5 col-xs-12">
    <div className="div"> 

<h1 > Beacon </h1> 
<p > 
Explore a new world of communication with ScratchNest’s beacons specifically designed and manufactured with the latest BLE technology to ensure less power consumption and a seamless experience.
 
<span style={{"color":"skyblue", display: !d3 ? "block" : "none" }} onClick={()=>setD3(true)}> Read more.. </span>

<span style={{ display: d3 ? "block" : "none" , "color":"black"}} >
In addition, we have formulated our beacons with on-site battery replacement options considering the user’s convenience.
  <span style={{"color":"skyblue"}} onClick={()=>setD3(false)}> read less.. </span>
</span>
 
  </p>

<div id="btn1">
<Link to="/sector/Beacon">
                
<button className="btn btn-outline-primary" id="button1" data-aos="zoom-out"> Explore Now  </button>
</Link>
<button className="btn btn-outline-primary" id="button2" data-aos="zoom-out" onClick={()=>{history.push("/get_details")}}>Get Details </button>
</div>
</div>
</div>
  
<div className="col-sm-7 col-md-7 col-xs-12">
    
<img  loading="lazy"
              src={beacon}
              alt="RFID_image"
              className="beacon_img" id="img1"
            />


</div>

<div className="col-sm-12 col-md-0 col-xs-12">

<div id="btn2">
<Link to="/sector/Beacon">
                
<button className="btn btn-outline-primary" id="button1" data-aos="zoom-out"> Explore Now  </button>
</Link>
<button className="btn btn-outline-primary" id="button2" data-aos="zoom-out" onClick={()=>{history.push("/get_details")}}>Get Details</button>
</div>

</div>

</div>
</div>


            </div>
    </>
  );
}

export default Beacon;
