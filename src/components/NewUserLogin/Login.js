import { useForm } from "react-hook-form";
import react,{useState , useEffect } from 'react';
import Topheader  from "../top_header";
import "./Login.scss";
import img1 from './img2.png';
import { css } from "@emotion/react";
import BarLoader from "react-spinners/ScaleLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FaRegEyeSlash } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import {connect} from 'react-redux';
import {AddPassCat , AddMessage , Disappear,captchaError} from '../../redux/action/PassAction.js';
import success from './success.png';
import ReCAPTCHA from "react-google-recaptcha";
import Error from './error.png';
import {Link} from 'react-router-dom';
import google from './google.png';
import twitter from './twitter.png';
import facebook from './facebook.png';
import { useHistory } from "react-router";
import Config from '../../config.json';

const Recaptcha = require('react-recaptcha');
const SITE_KEY = "6LfJOK4bAAAAAMW878jeezl7fkqPmTcZoFzCYWrz";
const eye = <FontAwesomeIcon icon={faEye} />;


function NewLogin(props){
  const [loader,setLoading]=useState(false);
  const [show, setShow] = useState(false);
  const [errorshow, setErrorShow] = useState(false);
const [captcha,setCaptcha]=useState(false);
  const handleShow = () => setShow(true);
const handleErrorShow=()=> setErrorShow(true);
const [passwordShown, setPasswordShown] = useState(false);
var history = useHistory();
const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
  };
   

  const handleClose = () => {
    setShow(false)

     
    history.push("/");
  
  };

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Login Page";
      }, [])

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
var l=     <BarLoader  color="#1FD9F3"  size={150}  style={{"textAlign":"center","marginLeft":"10%"}}/>;
      const [username_email,setUsername_email]=useState('');
      const[error,setError]=useState('');
      const [password,setPassword]=useState('');
      const [response, setResponse] = useState(null);
      const [remember,setRemember]=useState(false);



     
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

//changing the remember check box 
const changeRemember=()=>{
setRemember(!remember);  
console.log(remember);
}

//hadling error
const handleErrorClose=()=>{
  setError("");
  setErrorShow(false);


    
}

 
  const handleOnClick = e => {
    e.preventDefault();

//these are just fww validation on username 
  if(!username_email.length || !password.length){

    setError(" Please fill the required fields")
    setErrorShow(true);
  

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





//------------------------------------------------------------------------------------------------- validation ends here 
   
 // here we are posting data to api
  const submitData = token => {

    console.log(token);
    console.log(remember);
    // call a backend API to verify reCAPTCHA response
    fetch(Config.Login, {
      method: 'POST',
      credentials:'include',
      headers: {
        "Content-Type": "application/json"
      },
      credentials:'include',
      body: JSON.stringify({
        "username": username_email ,
        "password":password,
             "remember":remember, 
      "g-recaptcha-response": token
      })
      
    }).then(res => res.json()).then(res => {
      setLoading(false);
      setResponse(res);
  
// if user login successfully
      if(res.status==true){
         setUsername_email('');
         
         setPassword('');
         setRemember(false);
        setShow(true);


      }
      else{
//if it hsowd some error in login

setError(res.error);
setErrorShow(true);


}


    })
    .catch(err=>{
      console.log(err);
      history.push('./new_login');
    })
  }

 //------------frontend code starrts here---------------------------------------------------------------------------------------
  

return(<>

    <div id="login">
    <Topheader/>        


{/* these are modals for showing error and success messages */}
    <Modal show={show} className="modal"   onHide={() => setShow(false)}
      {...props}
      aria-labelledby="contained-modal-title-vcenter" style={{"padding":"3%"}}
      centered
    >
   <div className="container successmodal" style={{"textAlign":"center","width":"80%","margin":"10%"}}>
     <img src={success} style={{"width":"20%"}} />
         <h1 className="text-success" style={{"textAlign":"center"}}> Success</h1> 
         <p> Registered Successfully   </p>
         <button className="btn btn-lg btn-success" onClick={handleClose}>Close</button>
   </div>

        
  
    </Modal>

    <Modal show={errorshow} className="modal"   onHide={() => setErrorShow(false)}
      {...props}
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
{/*  -----------------------------------------------------------------------
from here code starts of the login form 
*/}
   

        <div id="form" className="container-fluid">
               
        
          
      
            <div className="row">
  <div className="col-sm-6 col-md-6 col-12">

  <div id="heading" style={{"textAlign":"left"}} >
  {loader && l }
  <h1> Sign in</h1>
  </div>   
  <form classNamme="form">
  <div className="form-group">
    <input type="text" className="form-control" placeholder="Username or Email"  value={username_email}  onChange={ e=>(setUsername_email(e.target.value))}/>
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
 

  <div className="form-group form-check" style={{"textAlign":"left"}}>
    <label className="form-check-label" style={{"textAlign":"left"}}>
      <input class="form-check-input" type="checkbox" style={{"float":"left"}} checked={remember} onChange={changeRemember} /> Remember me
    </label>
  </div>
  <div className="form-group" style={{"marginTop":"5%"}}>
  
 <button type="button" className="btn btn-outline-primary btn1" disabled={loader}   onClick={handleOnClick}  > Login   </button>
 <button type="button" className="btn btn-outline-primary btn2" > Forgot Password? </button>
  </div>


{/*
  <div className="form-group" style={{"textAlign":"left","float":"left","marginTop":"5%"}}>

  <p> Don't have an Account , <Link to="/register"> <a style={{"color":"blue"}}>Register here</a></Link></p>
   </div>
*/}
    
<hr style={{"marginTop":"5%"}}/>

<div className="form-group">
  <p style={{"color":"grey"}}> or sign in using </p>
  </div>


  <div className="form-group">

<table>
  <tr><td>
    <img src={google} ></img>
    </td>
    <td>
    <img src={facebook} ></img>
    </td>
    <td>
    <img src={twitter} ></img>
    </td>
    
    </tr>
</table>

  </div>

  <div className="form-group" style={{"textAlign":"center","marginTop":"5%"}}>

<p style={{"color":"grey"}}> Don't have an Account ? <Link to="/register"> <a style={{"color":"black"}}>Register Now</a></Link></p>
 </div>


</form>

<br></br>

{/*disabled={loader} */ } 

      </div> 
      <div className="col-sm-6 col-md-6 col-12">
     <img src={img1} id="desktop" />
     </div> 
                      
                       
            </div>
            
             </div>
    </div>
    </>
)


}




  
  export default (NewLogin);
