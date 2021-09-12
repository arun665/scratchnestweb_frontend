import react,{useState , useEffect } from 'react';
import { useHistory } from "react-router";
import { Modal, Button, Form } from "react-bootstrap";
import BarLoader from "react-spinners/ScaleLoader";
import Config from '../../config.json';

import './getdetails.scss';
import Topheader  from "../top_header";
import Footer from '../Footer/footer2';
import success from './success.png';


const Recaptcha = require('react-recaptcha');
const SITE_KEY = "6LfJOK4bAAAAAMW878jeezl7fkqPmTcZoFzCYWrz";

function GetDetails(){
    const [show, setShow] = useState(false);
  var history = useHistory();
    const handleClose = () => {
        setShow(false)
      
    
      };

     const setShow2=(e)=>{
          e.preventDefault();
          setShow(true);
      }
    
    

          var l=     <BarLoader  color="white"  size={5}  style={{"textAlign":"center","marginLeft":"10%","width":"10px"}}/>;
          const [email,setEmail]=useState('');
          const[error,setError]=useState('');
          const [password,setPassword]=useState('');
          const [response, setResponse] = useState(null);
          const [remember,setRemember]=useState(false);
    const [name,setName]=useState('');
    const [company,setCompany]=useState('');
    const[designation,setDesignation]=useState('');
   const [contact,setContact]=useState(''); 
    const [loader,setLoading]=useState(false);
    
    
         
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
    
     
      const handleOnClick = e => {
        e.preventDefault();
    
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
        
        console.log(remember);
        // call a backend API to verify reCAPTCHA response
        fetch( Config.GetDetails , {
          method: 'POST',
          credentials:'include',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "name": name ,
            "Email":email,
            "Company":company, 
            // newly added in schema
            "Contact":contact,
            "Designation":designation,
          "g-recaptcha-response": token
          })
          
        }).then(res => res.json()).then(res => {
    
          
    console.log("running config env file");
    
          setLoading(false);
          setResponse(res);
      
    // if user  message sended successfully
          if(res.status==true){
             setEmail('');
             setCompany('');
             setName('');
             
            setShow(true);
    
          }
          else{
    //if it hsowd some error in login
    }
        })
        .catch(err=>{
    console.log(err);
    
        //  history.push('/login');
    
        })
      }
      




    return(
        <>
    
   <div className="container successmodal" data-aos="fade" style={{"textAlign":"center","width":"80%","margin":"10%",display:show?"block":"none"}}>
     <img src={success} style={{"width":"20%"}} />
         <h1 className="text-success" style={{"textAlign":"center"}}> Success</h1> 
         <p style={{"fontSize":"1.2em"}}> We have sent you the brochure on the provided email.  </p>
         
   </div>

        
  
    {/*    <Topheader/>  */}
<div id="details" >

    <div className="container-fluid" id="div" style={{display:!show?"block":"none"}} >
        <div className="row">
    
            <div className="col-sm-12 col-md-12 col-12">
                  
<h1>Provide your details below: </h1>
<p>We will send you the brochure on the email provided by you.</p>

            <form onSubmit={handleOnClick}>
            <div className="form-group">
      <input type="text" class="form-control" placeholder="Name" id="email"  name="name" required  onChange={(e)=>{setName(e.target.value)}} value={name}  />
    </div>
    
    <div className="form-group">
  
      <input type="text" class="form-control" id="email" placeholder="Company"  name="company" onChange={(e)=>{setCompany(e.target.value)}} value={company} required/>
    </div>
    
    <div class="form-group">


  
      <input type="text" class="form-control" id="rowinput" placeholder="Designation"  name="company" onChange={(e)=>{setDesignation(e.target.value)}} value={designation} required/>
    </div>

    <div class="form-group">
  
      <input type="text" class="form-control" id="rowinput" placeholder="Contact no."  name="company" onChange={(e)=>{setContact(e.target.value)}} value={contact}  required/>
    </div>

    
    
    <div className="form-group">
 
      <input type="email" class="form-control" id="email"  placeholder="Email" name="email" onChange={(e)=>{setEmail(e.target.value)}}  value={email} required/>
    </div>
    

    <button type="submit"  class="btn btn-primary" disabled={loader}   >    {loader && <> Submitting... </> } {!loader && <>Submit</>}   </button>
  </form>

            </div>
        </div>
    </div>
</div>

{/* <Footer/> */}
</>
    );
}


export default GetDetails;