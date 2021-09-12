
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { ReactNode, useEffect, useState } from "react";
import "./topHeader.scss";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import Sidemenu from "../SideMenu/Sidemenu";

import { Button } from "@material-ui/core";
import PersonModal from "./PersonModal";


// interface UserType {
//  user:Array<number|string>
// }

function Topheader(props: any) {
 // const [{ user,basket }] = useStateValue();
 // const [open, setOpen] = useState(false);
 // const history = useHistory();
 // const [hover, setHover] = useState(false);
 // var [displayname, setDisplayame] = useState("");

 // useEffect(() => {
 //   setDisplayame(user?.displayName);
//  }, [user]);

$(document).ready(function(){
  $('.dropdown a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
 // const onHover = () => {
 ///   setHover(true);
 // };

  //const onLeave = () => {
 //   setHover(false);
 // };

 // const Signin = () => {
 //   if (user) {
 //     auth.signOut();
  //  } else history.push("/account");
 // };


 // console.log(user);
 const [open, setOpen] = useState(false);
  
  return (
    <div className="topheader">
  {/*
  
<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">
  <img
              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1615074337/logo_white_solid__copy_dqpf6l.png"
              className="logofooter"
            />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav" id="branddiv" >
    <Link to="/sector/datalogger" id="brand">
     
      <li className="nav-item" >
        <a className="nav-link" href="#" id="brand">RFID</a>
      </li>
     </Link>
      <Link to="/sector/datalogger" id="brand">
     
      <li className="nav-item" >
        <a className="nav-link" href="#" id="brand">Beacon</a>
      </li>
      </Link>
      <Link to="/sector/datalogger" id="brand">
     
      <li className="nav-item" >
        <a className="nav-link" href="#" id="brand">DataLogger</a>
      </li>    
      </Link>
      <Link to="/sector/datalogger" id="brand">
     
      <li className="nav-item">
        <a className="nav-link" href="#" id="brand">Education</a>
      </li>        
     </Link>     
    </ul>
    
    
    
    
    <button className="btn btn-outline-primary" onClick={() => setOpen(!open)} id="btn"> Cart</button>
    
 
  </div>  
 
  {open && <Sidemenu open={open} setOpen={setOpen} />}
  
</nav>
  */}



<nav className="navbar navbar-expand-* bg-dark navbar-dark">
  <a className="navbar-brand" href="#">
<Link to="/">
  <img
              src="https://res.cloudinary.com/dpysmqax5/image/upload/v1615074337/logo_white_solid__copy_dqpf6l.png"
              className="logofooter"
            />
            </Link>
  </a>
  
  
  
  <ul className="navbar bg-dark" id="branddiv" >
    <Link to="/sector/rfid">
     
      <li className="nav-item" >
        <a className="nav-link" href="#">RFID</a>
      </li>
     </Link>
      <Link to="/sector/Beacon" >
     
      <li className="nav-item" >
        <a className="nav-link" href="#" >Beacon</a>
      </li>
      </Link>
      <Link to="/sector/datalogger">
     
      <li className="nav-item" >
        <a className="nav-link" href="#" >DataLogger</a>
      </li>    
      </Link>
      <Link to="/sector/Education" >
     
      <li className="nav-item">
        <a className="nav-link" href="#">Education</a>
      </li>        
     </Link>     
    </ul>
    
    <Link to="/login"> 
    <button className="btn btn-outline-primary" onClick={() => setOpen(!open)} id="btn"> Cart</button>
</Link>
    
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
  



<div className="row">

<div className="col-sm-4 col-md-4 col-xs-12 phone">

    <ul className="navbar-nav bg-dark navbar-dark phone">
      
    <li className="nav-item dropdown  dropright">
        <a className="nav-link dropdown-toggle " href="#" id="navbardrop" data-toggle="dropdown" >
        RFID
      </a>
      <div className="dropdown-menu bg-dark">

      <Link to="/products/rfid/oneport" className="dropdown-item">
     
        <a className="dropdown-item" href="#">        One Port Integrated Reader
                                          </a>

    </Link>
    <Link to="/products/rfid/twoport" className="dropdown-item" >
     
        <a className="dropdown-item" href="#">        Two Port Integrated Reader
                                          </a>
        </Link>
        <Link to="/products/Rfid/fixedReader_Twoport" className="dropdown-item" >
     
        <a className="dropdown-item" href="#">        Two Port Fixed Reader
                                          </a>

        </Link>
        <Link to="/products/Rfid/fixedReader_Fourport" className="dropdown-item" >
     
     <a className="dropdown-item" href="#">        Four Port Fixed Reader
                                       </a>

     </Link>
      </div>
      </li>    


      <li className="nav-item beacondrop dropright">
        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Beacon
      </a>
      <div className="dropdown-menu bg-dark">

      <Link to="/products/Beacon" className="dropdown-item">
     
        <a className="dropdown-item" href="#">    Tracking Beacon</a>

    </Link>
   
      </div>
      </li>    


      <li className="nav-item dataloggerdrop dropright">
        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        DataLogger
      </a>
      <div className="dropdown-menu bg-dark">

      <Link to="/products/logger" className="dropdown-item">
     
        <a className="dropdown-item" href="#">   Data Logger</a>

    </Link>
    
      </div>
      </li>    

      <li className="nav-item antennadrop dropright">
        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
      Antenna
      </a>
      <div className="dropdown-menu bg-dark">

      <Link to="/products/LinearAntenna" className="dropdown-item">
     
        <a className="dropdown-item" href="#">       Linear Polarized Antenna
                                           </a>

    </Link>
    <Link to="/products/CircularAntenna" className="dropdown-item" >
     
        <a className="dropdown-item" href="#">           Circular Polarized Antenna
                                       </a>
        </Link>
 
      </div>
      </li>    


    </ul>
    </div>

    <div className="col-sm-4 col-md-4 col-6" id="tempnav">
 
 <ul className="navbar-nav">
 <Link to="/sector/rfid">
     
     <li className="nav-item" >
       <a className="nav-link" href="#">RFID</a>
     </li>
    </Link>
     <Link to="/sector/Beacon" >
    
     <li className="nav-item" >
       <a className="nav-link" href="#" >Beacon</a>
     </li>
     </Link>
     <Link to="/sector/datalogger">
    
     <li className="nav-item" >
       <a className="nav-link" href="#" >DataLogger</a>
     </li>    
     </Link>
     <Link to="/sector/Education" >
    
     <li className="nav-item">
       <a className="nav-link" href="#">Education</a>
     </li>        
    </Link>     

 </ul>
 
</div>



    <div className="col-sm-4 col-md-4 col-6">
 
    <ul className="navbar-nav rightnav">
    <Link to="/register" >
   
      <li className="nav-item">
        <a className="nav-link" href="#">Cart</a>
      </li>

      </Link>
      
    <Link to="/about" >
   
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>

      </Link>

      <Link to="/sector/datalogger" >
   
      <li className="nav-item">
        <a className="nav-link" href="#">Help</a>
      </li>
      </Link>
      <Link to="/contact" >
   
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
   
      </li>    
   </Link>
   
    </ul>
    
   </div>

   
   <div className="col-sm-4 col-md-4 col-6">
 
 <ul className="navbar-nav rightnav">
 <Link to="/support" >

   <li className="nav-item">
     <a className="nav-link" href="#">Support</a>
   </li>

   </Link>


 </ul>
 
</div>


  









    </div>
  
    
  </div>  

    
 
    
</nav>


  
    </div>
  );
}

export default Topheader;

