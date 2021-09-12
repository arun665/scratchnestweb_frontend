import TopHeader from '../../../top_header/index';
import Footer from '../../../Footer/footer2';
import './oneport.scss';
import oneportimg from './oneportimg.png';
import img3 from './img3.png';
import Boxes from './boxes/boxes';
import Boxes2 from './boxes2/boxes2';
import Accordion from './Accordion/accordion';
import Video from './video/video';
import {useEffect} from 'react';
import {Helmet} from "react-helmet";
import c1 from './c1.png';
import c2 from './c2.png';
import c3 from './c3.png';
import {Modal }from 'react-bootstrap';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Config from '../../../../config.json';
import Carousel2  from './carousel/carousel2';
function RfidProduct(){

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "One Port Integrated Reader";
      }, [])

      
const [show,setShow]=useState(false);


const handleRedirecting=()=>{
  setShow(false);
}


    
var history=useHistory();  
//here we are calling the api to add product -------------------------------------------------------------------------------------
  const submitData = () => {
    
    console.log("function running");
    fetch(Config.Product.AddProduct, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "title":"One Port Integrated Reader",
        "imageUrl":"https://res.cloudinary.com/dpysmqax5/image/upload/v1618752126/irp1_featuregallery.jpg",
        "price":"1000000"
   
      })
      
    }).then(res => res.json()).then(res => {


      if(res.status){ //if item added to cart successfully
        setShow(true);
      }
      else{
        //else if user id not logged in than redirecting to login page
        setShow(false);
        history.push("/login");
      }

    
    })
    .catch(err=>{setShow(true);
      console.log(err);
    });
  }


//-----------------------------------------------------------------------------------------------------------------------------------
  
return(<>
<div  id="oneport_product">
<Helmet>
  

        <title>One Port Integrated Reader</title>
        <meta name="description" content=" It boasts various features including a built-in 9 dBi circular polarized antenna and USB, RS-232, RS-485, and LAN interfaces that make it easy to install and use. To add on, the range of RF power is 0 to 30 dBm which is adjustable via software." />
    </Helmet>


    <Modal show={show} className="modal"   
     
      aria-labelledby="contained-modal-title-vcenter" style={{"padding":"3%"}}
      centered
    >
   <div className="container successmodal" style={{"textAlign":"center","width":"80%","margin":"10%"}}>
     <img src="https://res.cloudinary.com/scratchnest/image/upload/v1629638146/success_rnxfot.png" style={{"width":"20%"}} />
         <h1 className="text-success" style={{"textAlign":"center"}}> Success</h1> 
         <p> Product added to Cart successfully   </p>
         <button className="btn btn-lg btn-success" onClick={handleRedirecting} >Proceed</button>
   </div>

        
  
    </Modal>




<TopHeader/>
    
  {/*  <video id="background-video" style={{ "height":"100vh" , "backgroundColor":"#f0eef0" , "width":"100vw"}}   loop autoPlay muted>
    <source src="https://res.cloudinary.com/dpysmqax5/video/upload/v1618743793/1Port_1.0001_jnnnl8.mp4" type="video/mp4" />
    

</video>
*/}
<div >

<div className="contianer-fluid header">
<div className="row">
    <div className="col-sm-6 col-md-6 col-12">
<div id="headingdiv">
    <h1> Introducing the</h1>
<h2> ScratchNest</h2>
<h3>Integrated RFID</h3>    
<h4>1 - Port Reader</h4>
<h5> SN - IR 101</h5>
<div className="buttondiv">
<button className="btn btn1" onClick={submitData}>Coming Soon</button>
<button className="btn  btn2" onClick={()=>{history.push("/get_details")}}>Get Details</button> 

</div>
     </div>
    </div>
    <div className="col-sm-6 col-md-6 col-12">
<div id="img1div">
<img src={oneportimg} id="img1"></img>
</div>
<div className="buttondiv2">
<button className="btn btn1"  onClick={submitData}>Coming Soon</button>
<button className="btn  btn2" onClick={()=>{history.push("/get_details")}}>Get Details</button> 

</div>
    </div>
    
</div>



</div>


<div className="container-fluid" id="div2">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12">
   {/*  <img src={img3} id="img2" className="desktopimg"/> */}


   <div id="myCarousel" className="carousel carousel-fade slide" data-ride="carousel">

  
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={c1}  id="img2"  alt="Los Angeles" />
  </div>
  <div className="carousel-item">
    <img src={c2}  id="img2"  alt="Chicago" />
  </div>
  <div className="carousel-item">
    <img src={c3}  id="img2"  alt="New York" />
  </div>
</div>

<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#myCarousel" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>

</div>

        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
         
       <div id="para1">
         <h1> Product Description</h1>
         <p> 
         A compact long-range integrated RAIN RFID Reader designed with multiple features like a built-in 9 dBi circular polarized antenna, USB, RS-232, RS-485, and LAN interfaces to ensure easy installation and usage and comes with a customizable range of RF power 0 to 30 dBm. The water-resistant readers are designed to work in the ultra-high frequency range under any weather condition.  
         </p>
       </div>


        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
     <div className="mobileimg">
<Carousel2/>
       </div>
        
        
        </div>
        
      </div>

</div>
<div>
<Boxes/>
</div>

<div>

</div>
<div>
<Boxes2/>
</div>
<div>
  {/*
<video id="twoportvideo"   loop autoPlay muted>
    <source src="https://res.cloudinary.com/dpysmqax5/video/upload/v1618743793/1Port_1.0001_jnnnl8.mp4" type="video/mp4" />
    

</video>
  */}
</div>
<div>
<Accordion/>
</div>





</div>
<Footer/>
</div>
</>
)


}



export default RfidProduct;
