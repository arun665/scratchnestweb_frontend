import React from "react";

import "./datalogger.scss";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import { Link } from "react-router-dom";
import logger from './Beaconphone.png';
import Beaconimg from '../Beacon.png';

function Beacon2() {
  return (
    <div className="dataLogger" id="Beacon2">
    
<div className="container-field" >
  

  <div className="row">

  
<div className="col-sm-6 col-md-6 col-xs-12">
    

<img id="beaconimg1"
              src={Beaconimg}
              alt="RFID_image"
              
            />
</div>


<div className="col-sm-6 col-md-6 col-xs-12">

    <div className="div"> 

<div className="row">
<div className="col-sm-12 col-xs-12 col-md-12">
<h3> Scratch<span>Nest</span></h3>
<h2> Tracking Beacon</h2>  
<h1> <span>SN - TB 101</span></h1> 
</div>
<div className="col-sm-12 col-xs-12 col-md-12">



</div>
<div className="col-sm-12 col-xs-12 col-md-12">

  <div id="btn1">
<Link to="/products/Beacon">
                        
<button className="btn btn-outline-primary" id="button1"> Know More </button>
</Link>
</div>
</div>




<div className="col-sm-6 col-md-6 col-xs-12">
    

<img id="img2"
              src={logger}
              alt="RFID_image"
              className="beacon_img"
            />


</div>




<div className="col-sm-12 col-xs-12 col-md-12">

  <div id="btn2">
<Link to="/products/Beacon">
                        
<button className="btn btn-outline-primary" id="button1"> Know More  </button>
</Link>
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

export default Beacon2;
