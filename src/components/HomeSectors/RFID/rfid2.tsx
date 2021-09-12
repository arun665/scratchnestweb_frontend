import { IonButton, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import "./rfid2.scss";
import AOS from "aos";
import rfid from "./rfid.png";
import rfidphone from "./rfidphone.jpg";
import { Modal, Button, Form } from "react-bootstrap";

import GetDetails from "../../getDetails/GetDetails";
function Rfid() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
var history=  useHistory();
  
  let[d2,setD2]=useState(false);
  var [show,setShow]=useState(false);


  

  return (
    <>  
    
    <Modal show={show} className="modal rounded fade modal fade"   onHide={() => setShow(false)} data-aos="zoom-in" 
      
      aria-labelledby="contained-modal-title-vcenter"  style={{"paddingTop":"5%" ,"overflow":"auto" }}
      centered
    >


      <Modal.Header closeButton style={{"color":"white","backgroundImage":"linear-gradient(to right, #1FD9F3,#5BA5FD)"}} ></Modal.Header>
     
     <GetDetails/>

    </Modal> 


{/*
    <div className="modal fade modal-show" id="myModal"  style={{"border":"2px solid red","paddingTop":"20vh"}}  >
    <div className="modal-dialog modal-lg " >
    <GetDetails  />
    </div>
  </div>
*/}

      <div className="rfid  container-fluid" id="rfid" >

    <div className="container-fluid" >
  

  <div className="row">

  
<div className="col-sm-6 col-md-6 col-xs-12 ">
    
<img
              src={rfid}  loading="lazy"
              alt="RFID_image" id="img1"
              className="beacon_img"
            />
</div>



<div className="col-sm-6 col-md-6 col-xs-12">

    <div className="div"> 

<div className="row">
<div className="col-sm-12 col-xs-12 col-md-12">
<h1> <span>RFID</span>  Devices</h1> 
</div>
<div className="col-sm-12 col-xs-12 col-md-12">

<p > 


Designing and manufacturing unique RFID readers is our expertise. 

<span style={{"color":"skyblue", display: !d2 ? "block" : "none","transition":"1s" }} onClick={()=>setD2(true)}> Read more.. </span>

<span style={{ display: d2 ? "block" : "none" , "color":"white" ,"transition":"1s"}} >
ScratchNest develops integrated and fixed RAIN RFID readers and RAIN RFID antennas with customizable features and waterproof options. In addition, we have designed and manufactured our fixed RFID readers with two and four-port options to ensure greater accuracy and read range. Our single and dual-port integrated RFID readers are designed with circular and linear polarized antennas that ensure their speedy performance in an ultra-high frequency range.
<span style={{"color":"skyblue"}} onClick={()=>setD2(false)}> read less.. </span>

</span>


</p>

</div>
<div className="col-sm-12 col-xs-12 col-md-12">
  <div className="b1">
<Link to="/sector/rfid">
                            
<button className="btn btn-outline-primary" id="btn1" data-aos="zoom-out"> Explore Now  </button>

</Link>
<button className="btn btn-outline-primary" id="btn2" data-aos="zoom-out" onClick={()=>{setShow(true)}} >  Get Details </button>
</div>
</div>


</div>

</div>

</div>
<div className="col-sm-0 col-md-0 col-xs-12 ">
    
<img
              src={rfid}  loading="lazy"
              alt="RFID_image" id="img2"
              className="beacon_img"
            />
</div>


<div className="col-sm-12 col-md-0 col-xs-12">


  <div className="b2">
  <Link to="/sector/rfid">
                            
                            <button className="btn btn-outline-primary" id="btn1" data-aos="zoom-out"> Explore Now  </button>
                            
                            </Link>
                            <button className="btn btn-outline-primary" id="btn2" data-aos="zoom-out" onClick={()=>{setShow(true)}} >  Get Details </button>
                            
  </div>
</div>

</div>
</div>


      </div>
    </>
  );
}

export default Rfid;
