import { useForm } from "react-hook-form";
import react,{useState , useEffect} from 'react';
import { useHistory } from "react-router";

import Topheader  from "../top_header";
import "./Register.scss";
import img1 from './img.png';
import { css } from "@emotion/react";
import BarLoader from "react-spinners/ScaleLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FaRegEyeSlash } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import {connect} from 'react-redux';
import {AddPassCat , AddMessage , Disappear,captchaError} from '../../redux/action/PassAction.js';
import Config from '../../config.json';

import ReCAPTCHA from "react-google-recaptcha";
import Error from './error.png';
import {Link} from 'react-router-dom';
import success from './success.png';
import {createBrowserHistory} from 'history';
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
const Recaptcha = require('react-recaptcha');

const SITE_KEY = "6LfJOK4bAAAAAMW878jeezl7fkqPmTcZoFzCYWrz";
const eye = <FontAwesomeIcon icon={faEye} />;


function Register(){
  const [loader,setLoading]=useState(false);
  const [show, setShow] = useState(false);
  const [errorshow, setErrorShow] = useState(false);
const [captcha,setCaptcha]=useState(false);
  const handleShow = () => setShow(true);
const handleErrorShow=()=> setErrorShow(true);
const [passwordShown, setPasswordShown] = useState(false);
var history=useHistory();
const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
  };
  
  

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Registration Page";
      }, [])

      const handleClose = () => {
        setShow(false)
      }
/*
      const handleClose = () => {
        setShow(false)
        props.Disappear();
         
      
      };


      const handleErrorClose = () => {
        setErrorShow(false)
        props.Disappear();
         
      
      };

      useEffect(() => {

        if(props.message!=""){
          setLoader(false);
          
          if(props.message=="data saved success"){
            handleShow();
          }
          else{
            handleErrorShow();
          }

        }
      });

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
  
var l=     <BarLoader  color="#1FD9F3"  size={150} />;
       
      
      const fetchData = ()=>{
             
        if(!captcha){
          props.captchaError();
        }
        else{

        setLoader(true);
        props.addPassCat(username,fullname,contact_no,email,address,city,pincode,password)
        }
     
        
      }
*/
var l=     <BarLoader  color="#1FD9F3"  size={150} />;
      const [username,setUsername]=useState('');
      const [name,setname]=useState('');
      const [contact_no,setContact]=useState('');
      const [email,setEmail]=useState('');
      const[error,setError]=useState('');
      const [password,setPassword]=useState('');
      const [address,setAddress]=useState('');
      const [city,setCity]=useState('');
      const [pincode,setPincode]=useState('');
      const [response, setResponse] = useState(null);




      
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);
 
      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }
 
      if (isScriptExist && callback) callback();
    }
 
    // load the script by passing the URL
   

    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
      console.log("Script loaded!");
    });
  }, []);



const handleErrorClose=()=>{
  setError("");
  setErrorShow(false);   

}
 
  const handleOnClick = e => {
    e.preventDefault();

if(!name ||!email || !username || !contact_no || !pincode || !password || !address ){
  setError("please fill the required deatils")
  setErrorShow(true);
{/*
else if(username.length<8 || username.length>12 ){
  setError("username size should be between 8 to 12 ");
  setErrorShow(true);

 }
 else if(username.length>=8 && username.length<=12){
     var intcount=0;

     for(var i=0;i<username.length;i++){
if(username.charAt(i)<97){
  intcount++;
}
     }
     if(intcount<3){
      setError("username should consist three numbers atleast");
      setErrorShow(true);
     }
 
  }
  else if(password.length<8){
    setError("password should be of minimum size of 8");
    setErrorShow(true);
  } */} 
}
  else{
 
    setLoading(true);
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
        submitData(token);
     
      });
    });

  
  }
}


//here is the function to redirect the user to last page -------------------------------------------------
 const handleRedirecting=()=>{

  setShow(false);
     //redireted to login page 
     history.push("/new_login");


 }

 //-----------------------------------------------------------------------------------------------------------
  const submitData = token => {
    console.log(token);
    // call a backend API to verify reCAPTCHA response
    fetch(Config.Register, {
      method: 'POST',
      withCredentials : true ,
      headers: {
        "Content-Type": "application/json"
      },
      credentials:'include',
      body: JSON.stringify({
        "username": username ,
        "email": email,
        "name":name,
        "contact_no":contact_no,
        "password":password,
      "address": { "street_add":address, "city":city, "pin":pincode },
      "profile":"Naan",
      "g-recaptcha-response":token
      })
      
    }).then(res => res.json()).then(res => {
      setLoading(false);
      setResponse(res);

      //if user registered successfully
      if(res.status==true){
         setUsername('');
         setEmail('');
         setname('');
         setContact('');
         setAddress('');
         setCity('');
         setPincode('');
      
         setPassword('');
        setShow(true);


        //redireted to login page 
        history.push("/new_login");

      }
      else{
        //else if server showed some errro in registration
        setError(res.error);
        setErrorShow(true);


      }
      
    });
  }
 
  

return(<>

    <div id="register">
    <Topheader/>        

    <Modal show={show} className="modal"   onHide={() => setShow(false)}
 
      aria-labelledby="contained-modal-title-vcenter" style={{"padding":"3%"}}
      centered
    >
   <div className="container successmodal" style={{"textAlign":"center","width":"80%","margin":"10%"}}>
     <img src={success} style={{"width":"20%"}} />
         <h1 className="text-success" style={{"textAlign":"center"}}> Success</h1> 
         <p> Registered Successfully   </p>
         <button className="btn btn-lg btn-success" onClick={handleRedirecting} >Proceed</button>
   </div>

        
  
    </Modal>

    <Modal show={errorshow} className="modal"   onHide={() => setErrorShow(false)}
  
      aria-labelledby="contained-modal-title-vcenter" style={{"padding":"3%"}}
      centered
    >
   <div className="container successmodal" style={{"textAlign":"center","width":"80%","margin":"10%"}}>
     <img src={Error} style={{"width":"20%"}} />
         <h1 className="text-danger" style={{"textAlign":"center"}}> Error</h1> 
         <p> {error}  </p>
         <button className="btn btn-lg btn-danger" onClick={handleErrorClose} >Close</button>
   </div>

        
  
    </Modal>

   

        <div id="form" className="container-fluid">
            <div id="heading">
              {loader && l}
        
            <h1> Create an account</h1>
          
            <p> Create an account and explore the website’s features<br></br> </p>
            </div>
            <div className="row">
  <div className="col-sm-5 col-md-5 col-12">
     
  <form onSubmit={handleOnClick}>
  <div className="form-group">
    <input type="text"  className="form-control" required placeholder="Username"  value={username}  onChange={ e=>(setUsername(e.target.value))} required />
  </div>
  <div className="form-group">
    <input type="text" minlength="5" className="form-control" placeholder="Full Name"  value={name}  onChange={ e=>(setname(e.target.value))} required/>
  </div>
  <div className="form-group">
    <input type="tel"  className="form-control" placeholder="Contact No."  value={contact_no}  onChange={ e=>(setContact(e.target.value))} required/>
  </div>
  <div className="form-group">
    <input type="email"  className="form-control" placeholder="Email"  value={email}  onChange={ e=>(setEmail(e.target.value))} required/>
  </div>
  
  <div className="pass-wrapper form-group">
        <input
        className="form-control"
          placeholder="Password"
          name="password" 
          type={passwordShown ? "text" : "password"}
          value={password}  onChange={ e=>(setPassword(e.target.value))}
        />
        <i onClick={togglePasswordVisiblity}> {eye} </i>
        

      </div>
  <div className="form-group">
    <input type="text" required  className="form-control" placeholder="Address"  value={address}  onChange={ e=>(setAddress(e.target.value))}/>
  </div>

  

  <div className="form-row">
    <div className="col">
      <input type="text" required className="form-control"  placeholder="City" name="email" value={city}  onChange={ e=>(setCity(e.target.value))}/>
    </div>
    <div className="col">
      <input type="number" className="form-control" placeholder="Pin-Code" name="pswd" value={pincode}  onChange={ e=>(setPincode(e.target.value))}/>
    </div>
  </div>
  
  <div className="form-group" style={{"padding-top":"5%"}}>
 {/*   not used v2 captcha 
    <ReCAPTCHA 
      sitekey="6Lfnv_AbAAAAAOq8DUN79aJhPC5fP_aSdQUGQF3D"    render="explicit"
    onChange={verifyCallback} 
      onLoad={callback}
/>*/}
  </div>
  <div className="form-group">
  
 <button type="submit"  className="btn btn-outline-primary" disabled={loader}   > Submit </button>
  </div>
  <div className="form-group" style={{"textAlign":"left","float":"left"}}>
  
  <p> Already have an account , <Link to="/new_login"> <a style={{"color":"blue"}}>Go to login</a></Link></p>
   </div>
     

</form>
{/*disabled={loader} */ } 


      </div> 
      <div className="col-sm-7 col-md-7 col-12">
     <img src={img1} />
     </div> 
                      
                       
            </div>
            
             </div>
    </div>
    </>
)


}




  
  export default (Register);
