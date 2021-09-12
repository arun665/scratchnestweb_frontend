import TopHeader from '../top_header/index';
import './About.scss';
import Footer from '../Footer/footer2';
import img from './img.png';
import {useEffect, useState} from 'react';

import Sector from './sectors/sector.js';
import Founder from './founder/founder.js';
import Partner from './Partner/partner.js';
import Team from './Team/Team.js';
import Background from './bg.png';
function About(){





    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "About Us";
        
      }, [])

      let[abt1,setAbt1]=useState(false);
  

    return (
    <>
    <TopHeader/>
    <div id="about">
        <img src={Background} style={{"display":"none"}} loading="lazy" />    
<div className="container-fluid" id="outdiv1">

<div className="row" id="div1">

<div className="col-sm-6 col-md-6 col-12">

<div id="heading">
    <h1> Our Story </h1>
    <p>     Scratchnest is a leading electronics manufacturing company. We are determined to provide our global customers with next-generation technologies and an uninterrupted user experience. 
        <br></br><br></br>
        "Engineered from 0, Innovated to 1" is what defines us. We manufacture our devices from scratch and take them to the next level. Client satisfaction is our priority, and it inspires us to move forward with our objectives. Our mission is to provide customers worldwide with electronic devices that are perfect to suit their purpose. The devices are specifically designed and manufactured by our efficient engineers that ensure superior performance. Our devices have brought a revolution in technology because we have crafted them considering the users' convenience. Furthermore, we have incorporated additional inbuilt features to ensure maximum user benefit.
    
        <span style={{"color":"skyblue", display: !abt1 ? "block" : "none" }} onClick={()=>setAbt1(true)}> Read more.. </span>

 </p>
</div>
</div>



<div className="col-sm-6 col-md-6 col-12">

<img src={img} id="img" loading="lazy" />

</div>



<div className="col-sm-12 col-md-12 col-12">

<div id="heading" style={{ display: abt1 ? "block" : "none" , "color":"black"}}>
    <p>       We are an Indian company developed to enable modern technologies to get acclaimed in the international market and get the name of our company imprinted on the mind of every IoT company holder. The huge demand for our products in the Indian and the international markets makes our devices' efficacies quite apparent. Moreover, the ever-increasing popularity of the electronic devices manufactured by us makes our determination stronger. We are working day and night to provide our customers with a never-before experience. 
        We are a team of aspiring IITians Ropar dedicated to building something path-breaking under the expert guidance of our professors and with the assistance of our team members' 

unique talents. 
<span style={{"color":"skyblue"}} onClick={()=>setAbt1(false)}> read less.. </span>
 </p>
</div>
</div>





<div className="col-sm-6 col-md-6 col-12">

<div id="heading2">
    <h1> Our Vision</h1>
    <p>        
        
        
    To ensure that the name of our company is the only one when it comes to IoT products. We aim to reach the pinnacle of success in manufacturing unique electronic devices and establishing our brand name as an exemplary in the field of IoT.  </p>
</div>
</div>

<div className="col-sm-6 col-md-6 col-12">

<div id="heading2">
    <h1> What we do? </h1>
    <p>            We manufacture unique electronic devices with customizable features. We provide our customers with the real applications of modern technology in the form of RFID, NFC, BLE communication devices, and data loggers. All of these devices ensure flawless performance. </p>
</div>
</div>


<div className="col-sm-12 col-md-12 col-12">

<div id="heading2">
    <h1> Why choose us? </h1>
    <p>       
    We have given our words to customers for providing them with excellent technological services, and we are working hard to keep our words. 
We experiment with mechanisms to come up with something unique and helpful for the customers. 
We offer cost-effective services and make sure that our devices are appropriate for industrial usage. 
We ensure the excellence of technology in our devices. 
Our devices are designed and manufactured to suit specific purposes.

         </p>
</div>
</div>







</div>



</div>

<Sector/>

<Founder/>
<Team/>


    </div>
    <Footer/>
    </>)
}



export default About;