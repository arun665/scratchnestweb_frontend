import React, { useEffect, useRef , useState} from "react";
import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import "./DL.scss";
import Footer from "../../Footer/footer2";
import success from '../success.png';

//import { BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';


import AOS from "aos";
import Featurecaurosel from "./Caurosel/Featurecaurosel_dl.js";
import Carousel2 from './Caurosel/Carousel.js';

import Video from './video/video.js';

import Header from '../../top_header/index';
import { useHistory  } from "react-router";

import img1 from './img.png'; 
import img2 from './bg.png'; 
import img3 from './img2.png';
import SwiperDataLogger from './Swiper/swiper';
import vector from './Vector.png';
import vector1 from './Vector1.png';
import vector2 from './Vector-2.png';
import vector3 from './Vector-3.png';
import vector4 from './Vector-4.png';
import vector5 from './Vector-5.png';
import vector6 from './Vector-6.png';
import vector7 from './Vector-7.png';
import {Helmet} from "react-helmet";
import Carousel from './carousel/carousel';
import Carousel3 from './carousel/carousel2';
import { Modal, Button, Form } from "react-bootstrap";
import Accordion from './accordion';
import Config from '../../../config.json';
interface JQuery {
  switchClass(): void;
}

function Dataloggern(){
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AmbiTag-Data Logger"
  }, []);
let history = useHistory();
const [show,setShow]=useState(false);


const handleRedirecting=()=>{
  setShow(false);
}
//here we are calling the api to add product -------------------------------------------------------------------------------------
  const submitData = () => {
    
    
    console.log("function running");
    console.log(Config.Product.AddProduct);
    fetch(Config.Product.AddProduct , {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "title":"Ambitag",
        "imageUrl":"https://res.cloudinary.com/dpysmqax5/image/upload/v1619647960/4_uabjrd.png",
        "price":"1000000"
   
      }),
      
      
    }).then(res => res.json()).then(res => {


      if(res.status===true){ //if item added to cart successfully
        setShow(true);
      }
      else{
        //else if user id not logged in than redirecting to login page
        setShow(false);
        history.push("/login");
      }

    
    })
    .catch(err=>{
      console.log(err);
    });
  }


//-----------------------------------------------------------------------------------------------------------------------------------
  
  return (<>
   <Helmet>
        <title>Ambitag-DataLogger</title>
        <meta name="description" content="The AmbiTag temperature data logger is a compact sadasdasdadas USB device that records the temperature of its immediate surroundings continuously and generates alert when the temperature goes beyond pre-set limits." />
    </Helmet>
{/* this part of code cosists of modals */}
    <Modal show={show} className="modal"   onHide={() => setShow(false)}
     
      aria-labelledby="contained-modal-title-vcenter" style={{"padding":"3%"}}
      centered
    >
   <div className="container successmodal" style={{"textAlign":"center","width":"80%","margin":"10%"}}>
     <img src={success} style={{"width":"20%"}} />
         <h1 className="text-success" style={{"textAlign":"center"}}> Success</h1> 
         <p> Product added to Cart successfully   </p>
         <button className="btn btn-lg btn-success" onClick={handleRedirecting} >Proceed</button>
   </div>

        
  
    </Modal>

   

{/* from here code starts */}


  <Header/>
    <div className="dataloggerproduct">
      <div className="container-fluid div1">
        <div className="row">
   <div className="col-sm-6 col-md-7 col-xs-12">
 <div id="heading">
<h1> Introducing the</h1>
<h2> ScratchNest</h2>
<h3>AmbiTag</h3>
<h4> SN - DL 101</h4>
<div id="button1">
  {/* here i have added onclick event to add item to cart */}
  <button className="btn btn-primary btn1" onClick={submitData}>Order Now</button>
  <button className="btn btn-primary btn2" onClick={()=>{history.push("/get_details")}}>Get Details</button>
  
</div>
 </div>
   </div>
   <div className="col-sm-6 col-md-5 col-xs-12">
<img src={img1} id="img1" />
   </div>
   <div className="col-sm-4 col-md-5 col-xs-12">
   <div id="button2">
       {/* here i have added onclick event to add item to cart */}
  <button className="btn btn-primary btn3"   onClick={submitData}>Order Now</button>
  <button className="btn btn-primary btn4" onClick={()=>{history.push("/get_details")}}>Get Details</button>
  
</div>


   </div>

        </div>
      </div>

    <div className="container-fluid" id="div2">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12">
   <div className="desktopimg">
     <Carousel/>

   </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
         
       <div id="para1">
         <h1> What is the AmbiTag?</h1>
         <p> The AmbiTag temperature data logger is a compact sadasdasdadas
 USB device that records the temperature of its 
immediate surroundings continuously and 
generates alert when the  temperature goes 
beyond pre-set limits. The recorded data can be 
retrieved by inserting the USB into any computer</p>
       </div>


        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 mobileimg">
        <Carousel3/>
        </div>
        
      </div>

</div>

<div className="container-fluid div3">

  <div className="row">
    <div className="col-sm-12 col-xs-12 col-md-12">
      <div id="para2">
      <h1> <span> Features </span> of the AmbiTag </h1>
<p>These are the major and improtant features of our product.  </p>
</div>
    </div>

    <div className="col-sm-12 col-md-12 col-xs-12">

<div className="row" id="nestedrow">

  <div className="col-sm-3 col-md-3 col-6">

  <div className="card" data-aos="fade-left">
  <div className="card-header">

<img src={vector} id="nestedimg" />

  </div>
  <div id="cardpara">Auto Generated 
PDF Report</div>
</div>

  </div>


  <div className="col-sm-3 col-md-3 col-6">

<div className="card" data-aos="fade-right">
<div className="card-header">

<img src={vector1} id="nestedimg" />

</div>
<div id="cardpara">

Long logging
period of 90 days
</div>
</div>

</div>


<div className="col-sm-3 col-md-3  col-6">

<div className="card" data-aos="fade-left">
<div className="card-header">

<img src={vector2} id="nestedimg" />

</div>
<div  id="cardpara">Inbuilt USB
function</div>
</div>

</div>


<div className="col-sm-3 col-md-3  col-6">

<div className="card" data-aos="fade-right">
<div className="card-header">

<img src={vector3} id="nestedimg" />

</div>
<div id="cardpara">Slim and compact design</div>
</div>

</div>



<div className="col-sm-3 col-md-3 col-xs-4 col-6">

<div className="card" data-aos="fade-left">
<div className="card-header">

<img src={vector4} id="nestedimg" />

</div>
<div  id="cardpara">IP65 rating
(optional)</div>
</div>

</div>

<div className="col-sm-3 col-md-3 col-xs-4 col-6">

<div className="card" data-aos="fade-right">
<div className="card-header">

<img src={vector5} id="nestedimg" />

</div>
<div id="cardpara">Long Battery
life device</div>
</div>

</div>

<div className="col-sm-3 col-md-3 col-xs-4 col-6">

<div className="card" data-aos="fade-left">
<div className="card-header">

<img src={vector6} id="nestedimg" />

</div>
<div id="cardpara">Plug and Play device</div>
</div>

</div>

<div className="col-sm-3 col-md-3 col-xs-4 col-6">

<div className="card" data-aos="fade-right">
<div className="card-header">

<img src={vector7} id="nestedimg" />

</div>
<div id="cardpara">Alarm for low and high temp.</div>
</div>

</div>




</div>


    </div>
  </div>
</div>

<Carousel2/>

<Video/> 
<Accordion/>

    </div>
     
<Footer/>
    </>
  );
}
  

export default Dataloggern;
