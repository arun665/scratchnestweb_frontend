
import Topheader from "../../top_header/index";
import  "./Rfid.scss";
import { useEffect } from "react";
import bg1 from './bg.png';
import bg2 from './bg.png';
import rfidimg2 from './div2Beacon.png';
import Footer from "../../Footer/footer2";
import Beacon2 from "./DataLogger/datalogger2";
import {Helmet} from "react-helmet";

function BeaconSec(){
  
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Beacon"
      }, [])
      
    return(<div id="Beacon_Sec">
           <Helmet>
        <title>Beacon</title>
        <meta name="description" content="Based on a highly efficient, short range communication technology consuming the least power, experience the power of BLE with ScratchNest's Beacons." />
    </Helmet>

<Topheader/> 

<div className="container-fluid" >
<div className="row div1">
    <div className="col-sm-5 col-md-5 col-xs-12">
        <div id="nesteddiv1beacon">

            <h1> Scratch<span>Nest</span></h1>
        <h2> BEACONs</h2>
        <p> 

        Track user location by tracking the signals and establish seamless communication between multiple devices with ScratchNest’s beacons.
        </p>
        
        </div>
    </div>
    <div className="col-sm-7 col-md-7 col-xs-12" id="divimg">
     <img src={bg1} id="img1" />    
    </div>
    
    <div className="col-sm-7 col-md-7 col-xs-12">
     <img src={bg2} id="beaconimg2" />    
    </div>
    <div className="col-sm-6 col-md-6 col-xs-12 div">
     <p id="phonep"> 
     
     Track user location by tracking the signals and establish seamless communication between multiple devices with ScratchNest’s beacons.
     
</p> 
    </div>
</div>
<div className="row" id="row2">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div id="div2">
            <h1> What is a Beacon?</h1>
            <p> 
        

            Set up a secure connection between your smart devices and transfer the data with ScratchNest’s beacons’ pioneering technology. The small wireless transmitters equipped with Bluetooth Low Energy (BLE) technology track the location by sending signals to make the communication process easier.

            </p>
        </div>
        </div>

        <div className="col-md-6 col-sm-6 col-12">
            <img src={rfidimg2} id="div2img" />
        </div>
      </div>
     

</div>
<Beacon2/>
 
<Footer/>

    </div>
    )
}

export default BeaconSec;