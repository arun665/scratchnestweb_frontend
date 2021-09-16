import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { ReactNode, useEffect, useState } from "react";
import "./topHeader2.scss";

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
  var history=useHistory();

  var [cancel,setCancel]=useState(true);
  var [login_done,setLogin]=useState(true);
 // const [{ user,basket }] = useStateValue();
 // const [open, setOpen] = useState(false);
 // const history = useHistory();
 // const [hover, setHover] = useState(false);
 // var [displayname, setDisplayame] = useState("");

 // useEffect(() => {
 //   setDisplayame(user?.displayName);
//  }, [user]);

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

 $(document).ready(function(){
  $('.dropdown a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});




 // console.log(user);
 const [open, setOpen] = useState(false);
  
  return (
    <div className="topheader2">
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
    
    <Link to="/cart" > 

    <button className="btn btn-outline-primary" onClick={() => setOpen(!open)} id="btn"> Cart</button>
</Link>



{/* this is our login button this will appear until the user logins------------------------------------------------------------*/}

<button className="btn btn-danger" id="loginbutton" style={{display:!login_done?'block':'none'}}  onClick={()=>{history.push("/login")}}>LOGIN </button>

{/* this is our profile  button this will appear until the user logouts------------------------------------------------------------*/}

<button  style={{display:login_done?'block':'none'}} className="btn circled" type="button" onClick={()=>{history.push("/profile")}}  id="userbutton" ><i className="fa fa-user-circle-o"  ></i></button>
{/**------------------------------------------------------------------------------------------------------------------------------------------------ */}
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"  onClick={()=>{setCancel(!cancel)}}>
    <span className="navbar-toggler-icon" style={{display:cancel?'block':'none'}}></span>
    <i className="fa fa-close" style={{"fontSize":"1.8em" ,"color":"white", display:!cancel?'block':'none'}}></i>
    
  </button>


    
  </nav>


  <div className="collapse navbar-collapse" id="collapsibleNavbar"  >
  
<div className="container-fluid">
<div className="row row2">




<div className="col-sm-12 col-md-12 col-12 navbar-nav" id="col1">



<p id="producthead"> Our Products</p>
<ul style={{"textAlign":"left"}} id="ul1" className="navbar-nav">


  <table>
    <tr>
  
  <a type="button" data-toggle="collapse" data-target="#demo" className="heading1 nav-item"  > 
  RFID     <i className="fa fa-angle-double-down" ></i></a>
  
  </tr><tr>
  <div id="demo" className="collapse" >
   
    <li onClick={()=>{history.push("/products/rfid/oneport")}} className="nav-item"> 
 RFID One Port Integrated Reader
  </li>


    <li  onClick={()=>{history.push("/products/rfid/twoport")}}>  
    RFID  Two Port Integrated Reader

    </li>

    
    <li onClick={()=>{history.push("/products/Rfid/fixedReader_Twoport")}}>
    RFID Two Port Fixed Reader
    </li>
    <li onClick={()=>{history.push("/products/Rfid/fixedReader_Fourport")}}>
    RFID  Four Port Fixed Reader
    </li>
    <li onClick={()=>{history.push("/products/LinearAntenna")}}>  
    RFID Linear Polarized Antenna
    </li>

    <li onClick={()=>{history.push("/products/CircularAntenna")}}>  
   RFID Circular Polarized Antenna
    </li>
 
    
  </div>
  </tr></table>

</ul>



<ul style={{"textAlign":"left"}} id="ul1" className="navbar-nav"> 
  <table>
    <tr>
  
  <a type="button" data-toggle="collapse" data-target="#demo1" className="heading1 nav-item" > 
  Beacon   <i className="fa fa-angle-double-down" ></i></a>
  
  </tr><tr>
  <div id="demo1" className="collapse" >
    <li onClick={()=>{history.push("/products/Beacon")}}>  
    Tracking Beacon
    </li>


 
    
  </div>
  </tr></table>

</ul>





<ul style={{"textAlign":"left"}} id="ul1" className="navbar-nav">
  <table>
    <tr>
  
  <a type="button" data-toggle="collapse" data-target="#demo3" className="heading1 nav-item" > 
  DataLogger   <i className="fa fa-angle-double-down" ></i></a>
  
  </tr><tr>
  <div id="demo3" className="collapse" >
    <li onClick={()=>{history.push("/products/logger")}}>  
    AmbiTag
    </li>


 
    
  </div>
  </tr></table>

</ul>




<ul style={{"textAlign":"left"}} id="ul1" className="navbar-nav">
  <table>
    <tr>
  
  <a type="button" data-toggle="collapse" data-target="#demo4" className="heading1 nav-item" > 
  NFC <i className="fa fa-angle-double-down" ></i></a>
  
  </tr><tr>
  <div id="demo4" className="collapse" >
  <li >  
    Coming Soon
    </li>

 
    
  </div>
  </tr></table>

</ul>

<hr></hr>

</div>





<div className="col-sm-12 col-md-12 col-6" id="tempnav">
 
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



    <div className="col-sm-12 col-md-12 col-6">
 
    <ul className="navbar-nav rightnav">
    <Link to="/cart" >
   
      <li className="nav-item">
        <a className="nav-link" href="#">Cart</a>
      </li>

      </Link>
      
    <Link to="/about" >
   
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>

      </Link>

      <Link to="/contact" >
   
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
   
      </li>    
   </Link>
   <Link to="/support" >

   <li className="nav-item">
     <a className="nav-link" href="#">Support</a>
   </li>

   </Link>
    </ul>
    
   </div>

   <hr></hr>
   <div className="col-sm-12 col-md-12 col-12" id="phone_login">

{/* this is our login button this will appear until the user logins------------------------------------------------------------*/}

<button className="btn btn-danger" id="loginbutton" style={{display:!login_done?'block':'none'}}  onClick={()=>{history.push("/login")}}>LOGIN </button>

{/* this is our profile  button this will appear until the user logouts------------------------------------------------------------*/}

<button  style={{display:login_done?'block':'none'}} className="btn circled" type="button" onClick={()=>{history.push("/profile")}}  id="userbutton" ><i className="fa fa-user-circle-o"  > Profile</i></button>
{/**------------------------------------------------------------------------------------------------------------------------------------------------ */}
 
 
 
</div>



</div>



</div>



  
    
  </div>  

    
 



  
    </div>
  );
}

export default Topheader;
