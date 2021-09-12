import React from "react";
import "./header.scss";
import headerimg from "./phoneheader.png";
import newbg from './newbg.jpg';
import header from './headerbg.png';
import { useHistory } from "react-router-dom";

import headerbgphone from './headerbgphone.png';
import {Link} from 'react-router-dom';
import logger from './logger.png';
import {useState} from 'react';

function Header() {
  let history = useHistory();

  let[d1,setD1]=useState(false);



  return (
    <>
<div className="container-fluid header" id="header" >

<img src={newbg} style={{"display":"none"}} loading="lazy" />

  <div className="row">
    <div className="col-md-6 col-sm-6 col-xs-12">
<div className="div">
<h1> Welcome to</h1>
<h2> Scratch<span>Nest </span>  </h2>
<p>

<span>ScratchNest </span>
 adds a new definition in the world of technologies by designing and manufacturing highly developed electronic devices. The implementation of next-generation technologies and customizable features have made our devices unique.
  <span style={{"color":"skyblue", display: !d1 ? "block" : "none" }} onClick={()=>setD1(true)}> Read more.. </span>

<span style={{ display: d1 ? "block" : "none" , "color":"white"}} >
 We have designed and manufactured RFID, NFC, Bluetooth devices, and data loggers to ensure performance excellence and the best user experience. 
  <span style={{"color":"skyblue"}} onClick={()=>setD1(false)}> read less.. </span>
</span>

</p>

<div id="button1">
  <Link to="/register">
<button className="btn " id="first">Register </button></Link>

</div>
</div>


    </div>
    <div className="col-md-6 col-sm-6 col-xs-12">
<img src="https://i.ibb.co/C1dc1H8/headerbg.png"   className="headerbg" id="button1" loading="lazy"/>
<img src={headerbgphone} className="headerbg" id="button2" loading="lazy"/>

    </div>

    <div className="col-sm-0 col-md-0 col-xs-12">
    <div id="button2">
<button className="btn " id="first">Register </button>

</div>
    </div>
    
  </div>




  </div>    

    </>
  );
}

export default Header;
