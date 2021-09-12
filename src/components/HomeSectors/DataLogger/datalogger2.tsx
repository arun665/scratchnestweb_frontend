import React from "react";

import "./datalogger.scss";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import { Link , useHistory} from "react-router-dom";
import logger from './logger2.png';
import {useState } from 'react';
function DataLogger() {
  let[d4,setD4]=useState(false);
  var history = useHistory();
  

  return (
    <div className="dataLogger" id="datalogger" >
    
<div className="container-field" >
  

  <div className="row">

  
<div className="col-sm-6 col-md-6 col-xs-12">
    

<img id="img1"  loading="lazy"
              src={logger}
              alt="RFID_image"
              className="beacon_img"
            />
</div>


<div className="col-sm-6 col-md-6 col-xs-12">

    <div className="div"> 

<div className="row">
<div className="col-sm-12 col-xs-12 col-md-12">
<h1> <span>Data</span>Logger</h1> 
</div>
<div className="col-sm-12 col-xs-12 col-md-12">

<p >


ScratchNest’s data loggers provide you with a whole new experience of monitoring various physical parameters like temperature, humidity, air quality, pressure, and many more.


<span style={{"color":"skyblue", display: !d4 ? "block" : "none" }} onClick={()=>setD4(true)}> Read more.. </span>

<span style={{ display: d4 ? "block" : "none" , "color":"white"}} >
Record and monitor temperature and humidity with our compact “AmbiTag'' data logger series that comes with an in-built USB or BLE to provide you with a detailed report in PDF or CSV format. We have also included customizable features and an alarm notification option in the devices.
 <span style={{"color":"skyblue"}} onClick={()=>setD4(false)}> read less.. </span>
</span>


</p>
<br></br>
</div>
<div className="col-sm-12 col-xs-12 col-md-12">

  <div id="btn1">
<Link to="/sector/datalogger">
                        
<button className="btn btn-outline-primary" id="button1" data-aos="zoom-out"> Explore Now  </button>
</Link>
<button className="btn btn-outline-primary" id="button2" data-aos="zoom-out" onClick={()=>{history.push("/get_details")}}>Get Details</button>
</div>
</div>




<div className="col-sm-6 col-md-6 col-xs-12">
    

<img id="img2"  loading="lazy"
              src={logger}
              alt="RFID_image"
              className="beacon_img"
            />


</div>




<div className="col-sm-12 col-xs-12 col-md-12">

  <div id="btn2">
<Link to="/sector/datalogger">
                        
<button className="btn btn-outline-primary" id="button1" data-aos="zoom-out"> Explore Now  </button>
</Link>
<button className="btn btn-outline-primary" id="button2" data-aos="zoom-out" onClick={()=>{history.push("/get_details")}}> Get Details</button>
</div>
</div>
</div>

</div>

</div>

</div>
</div>
    
    
    </div>
  );
}

export default DataLogger;
