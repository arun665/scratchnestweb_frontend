
import './sector.scss';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './trial.jpg';
import img5 from './rfid.jpg';
import img6 from './b.jpg';
import {Link} from 'react-router-dom';
import {useState} from 'react';
function Sector(){
    
let[d4,setD4]=useState(false);
  

    return(
        <div id="sector" >
            <div className="container-fluid">
<div className="row">
    <div id="heading" className="col-md-12 col-sm-12 col-12">
        <h1> Our Major Sectors</h1>
    </div>
    <div className="col-md-4 col-sm-4 col-12">
           
           <div id="box" data-aos="fade-left">
               <Link to="/sector/datalogger">
               <img src={img4} />
</Link>
               <h2> Logger </h2>
               <p> 
               It is a specialized single use temperature data logger. It will record the temperature of the 
surroundings and warn if there is a sudden rise in temperature or the 
temperature rises above the pre-fixed temperature. 

                   </p>
           </div>
        

    </div>

    <div className="col-md-4 col-sm-4 col-12">
           
           <div id="box" data-aos="zoom-out">
           <Link to="/sector/rfid">
               <img src={img5} />
</Link>
               <h2> RFID  </h2>
               <p>
               Compact, long-range RFID readers with customizable features and waterproof technology ensure its 
durability.

<span style={{"color":"skyblue", display: !d4 ? "block" : "none" }} onClick={()=>setD4(true)}> Read more.. </span>

<span style={{ display: d4 ? "block" : "none" , "color":"black"}} >
In addition, we manufacture integrated RFID readers with single and double port options and fixed RFID readers 
with two and four-port options. These RFID readers work in an ultra-high frequency range

 <span style={{"color":"skyblue"}} onClick={()=>setD4(false)}> read less.. </span>
</span>




                    </p>
           </div>
        

    </div>

    <div className="col-md-4 col-sm-4 col-12">
           
           <div id="box" data-aos="fade-right">
           <Link to="/sector/Beacon">
               <img src={img6} />
</Link>
               <h2>  Beacon  </h2>
               <p> 
               It is a compact beacon with long battery life. It comes with an on-field battery replacement option. In addition, it incorporates Bluetooth low-energy technology that ensures low battery usage. 

                   </p>
           </div>
        

    </div>
</div>
</div>


        </div>
    );
}


export default Sector;
