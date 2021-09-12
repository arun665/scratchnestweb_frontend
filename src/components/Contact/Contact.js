
import './Contact.scss';
import img1 from './img1.png';
import img2 from './img2.png';
import Topheader from '../top_header/index';
import Footer from '../Footer/footer2';
import {useEffect,  useState} from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import BarLoader from "react-spinners/ScaleLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Config from '../../config.json';
import Error from './error.png';

const Recaptcha = require('react-recaptcha');

const SITE_KEY = "6LfJOK4bAAAAAMW878jeezl7fkqPmTcZoFzCYWrz";
const eye = <FontAwesomeIcon icon={faEye} />;

function Contact(){
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ";
    
  }, [])

  const [loader,setLoading]=useState(false);
  const [show, setShow] = useState(false);
  const [errorshow, setErrorShow] = useState(false);
const [captcha,setCaptcha]=useState(false);
  const handleShow = () => setShow(true);
const handleErrorShow=()=> setErrorShow(true);
const [passwordShown, setPasswordShown] = useState(false);

const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
  };
   

  const handleClose = () => {
    setShow(false)



    //redisrecting code 

    // if(user is new user) redirect to home page
    //else
    
     
  
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
      const [name,setName]=useState('');
      const [email, setEmail] = useState('');
      const[phone,setPhone]=useState('');
      const[message,setMessage]=useState('');
      const[company,setCompany]=useState('');
      


     
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

//hadling error
const handleErrorClose=()=>{
  setError("");
  setErrorShow(false);

}

 
  const handleOnClick = e => {
    e.preventDefault();

//these are just fww validation on username 
  
    setLoading(true);
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
        submitData(token);
     
      });
    });
    
  
}





//------------------------------------------------------------------------------------------------- validation ends here 
   
 // here we are posting data to api
  const submitData = token => {

    console.log(token);
    console.log(" running api ");
    

    // call a backend API to verify reCAPTCHA response
    fetch( Config.Query , {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({

        "name": name ,
        "phone":phone,
             "email":email,
             "message":message, 
             "company_name":company,
      "g-recaptcha-response": token
      }),
      
      
    }).then(res => res.json()).then(res => {

      
console.log("running config env file");

      setLoading(false);
  
// if user login successfully
      if(res.status==true){
         setName('');
          setCompany('');
         setPhone('');
         setMessage('');
setEmail('');
        setShow(true);

      }
      else{
//if it hsowd some error in login

console.log("running config env file");
setError(res.error);
setErrorShow(true);
      


}


    })
    .catch(err=>{
      setLoading(false);
      setErrorShow(true);

      
    });
  }

 //------------frontend code starrts here---------------------------------------------------------------------------------------
  








    return(<>


{/* these are modals for showing error and success messages */}
<Modal show={show} className="modal"   onHide={() => setShow(false)}

      aria-labelledby="contained-modal-title-vcenter" style={{"padding":"3%"}}
      centered
    >
   <div className="container successmodal" style={{"textAlign":"center","width":"80%","margin":"10%"}}>
     <img src="https://res.cloudinary.com/scratchnest/image/upload/v1629638146/success_rnxfot.png" load="lazy" style={{"width":"20%"}} />
         <h1 className="text-success" style={{"textAlign":"center"}}> Query sended</h1> 
         <p> Query Sended  Successfully   </p>
         <button className="btn btn-lg btn-success" onClick={handleClose}>Close</button>
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
{/*  -----------------------------------------------------------------------
from here code starts of the login form 
*/}
   




    <Topheader/>
        <div id="contact">
            <div  className="container-fluid">

                     <div className="row" id="div1">
                         <div className="col-md-6 col-sm-6 col-12">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13684.244380823005!2d76.4736374!3d30.9687772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x52620774815c8f48!2sScratchNest!5e0!3m2!1sen!2sin!4v1629970334277!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" ></iframe>
                         </div>

<div className="col-md-6 col-sm-6 col-12">
                         
                         <div id="heading"> 
                       <a id="h2" href="https://www.google.com/maps/dir//ScratchNest,+Room+No.+6,+3rd+Floor+East+Wing+M.+Visvesvaraya+Block,+IIT,+Punjab+140001/@30.9685851,76.4652059,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3905544bffffffff:0x52620774815c8f48!2m2!1d76.4736374!2d30.9687772">Our Address</a>
                       <p>Room No 6, 3rd floor, East Wing<br></br>
M. Visvesvaraya Block,<br></br>
IIT Ropar, Rupnagar,<br></br>
Punjab, India - 140001</p>

                         </div>

                         <div id="heading"> 
                       <h2>Email</h2>
                       <p>info@scratchnest.com</p>

                         </div>
                         

                         <div id="heading"> 
                       <h2>Phone</h2>
                       <p>+91 8826598301<br></br>
                       <br></br>
</p>

<table>
                   <tr>  
                       <td><a href="https://m.facebook.com/ScratchNestPvtLtd/" className="fa fa-facebook"></a></td>
                       <td><a href="https://www.linkedin.com/company/scratchnest-private-limited/" className="fa fa-linkedin"></a></td>
                       <td><a href="https://api.whatsapp.com/send?phone=918826598301" className="fa fa-whatsapp"></a></td>
                   </tr>
               </table>

                         </div>
                        </div>
                     </div>


<div className="row" id="div2">
<div className="col-md-6 col-sm-6 col-12">

<h1>Contact Us  {loader && l } </h1>


<form    onSubmit={handleOnClick}>
<div className="form-group">
    <input type="text" required   className="form-control" placeholder="Full Name"   value={name}  onChange={ e=>(setName(e.target.value))}/>
  </div>
  <div className="form-group">
    <input type="text" required   className="form-control" placeholder="Email" pattern="[^ @]*@[^ @]*"   value={email}  onChange={ e=>(setEmail(e.target.value))}/>
  </div>

  

  <div className="form-row form-group">
    <div className="col">
      <input type="text" required className="form-control"  placeholder="Company Name" name="email"  value={company}  onChange={ e=>(setCompany(e.target.value))}  required />
    </div>
    <div className="col">
      <input  type="tel" required className="form-control"  placeholder="Phone no." name="email"  value={phone}  onChange={ e=>(setPhone(e.target.value))}/>
    </div>
    </div>
    <div className="form-group">
<textarea  className="md-textarea form-control"  minlength="10" placeholder="Enter Your Message" required value={message}  onChange={ e=>(setMessage(e.target.value))}/> 

  </div>
  
  <div className="form-group">

<button type="submit" className="btn btn-primary" disabled={loader} >Send </button>
  </div>
  
</form>
</div>

<div className="col-md-6 col-sm-6 col-12">
<img src={img2} id="img2"/>
</div>



</div>


            </div>

        </div>
        <Footer/>
</>
    );
}


export default Contact;
