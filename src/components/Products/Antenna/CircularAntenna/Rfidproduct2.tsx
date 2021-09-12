import TopHeader from '../../../top_header/index';
import Footer from '../../../Footer/footer2';
import './oneport.scss';
import oneportimg from './linear1.png';
import img3 from './linear2.png';
import Boxes from './boxes/boxes';
import Boxes2 from './boxes2/boxes2';
import Accordion from './Accordion/accordion';
import Video from './video/video';
import {useEffect} from 'react';
import {Helmet} from "react-helmet";
import Carousel from './carousel/carousel';
import Carousel2 from './carousel/carousel2';
import {Modal }from 'react-bootstrap';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Config from '../../../../config.json';
function RfidProduct(){

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Circular Antenna";
        
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
              "title":"Circular Antenna",
              "imageUrl":"https://res.cloudinary.com/dpysmqax5/image/upload/v1618751261/circularFeatureGallery.jpg",
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
<div  id="circular_product">
  <Helmet>
  <title>Circular Antenna</title>
        <meta name="description" content=" The ScratchNest far-field RFID antenna comes with a heavy-duty polycarbonate housing, possesses female TNC connectors and excellent VSWR and axial ratios." />
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
<h3>Circular Polarized</h3>    
<h4>9 dBi Antenna</h4>
<h5> SN - CA 101</h5>
<div className="buttondiv">
<button className="btn btn1"  onClick={submitData}>Order Now</button>
<a className="btn  btn2"  onClick={()=>{history.push("/get_details")}}>Get Details</a> 

</div>
     </div>
    </div>
    <div className="col-sm-6 col-md-6 col-12">
<div id="img1div">
<img src={oneportimg} id="img1"></img>
</div>
<div className="buttondiv2">
<button className="btn btn1"  onClick={submitData}>Order Now</button>
<button className="btn  btn2" onClick={()=>{history.push("/get_details")}}>Get Details</button> 

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
         <h1> Product Description</h1>
         <p> 
      
      

         A far-field 9 dBi circular polarized RFID antenna with a heavy-duty polycarbonate housing, female TNC connectors, and excellent VSWR and axial ratios for uninterrupted signal reception and transmission in the UHF frequency band. Both the US and EU versions are available.


         </p>
       </div>


        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 mobileimg">
   <Carousel2/>
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
{/*
<div>
<video id="twoportvideo"   loop autoPlay muted>
    <source src="https://res.cloudinary.com/dpysmqax5/video/upload/v1618743793/1Port_1.0001_jnnnl8.mp4" type="video/mp4" />
    

</video>
</div>
*/}
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
