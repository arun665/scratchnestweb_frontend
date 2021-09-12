

import './functions.scss';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import six from './6.png';

function Boxes2(){
return(
<div id="functions">
    <div className="container-fluid"> 
    <div className="heading">
        <h1><span>Functions</span> of the Antenna</h1>
        <h2> Here are some functions of the Circular Polarized Antenna. </h2>
        
         </div>




       <div className="row row1">
           <div className="col-sm-4 col-md-4 col-6">
 
                 <div id="box" data-aos="fade-left">
                     <div>
                     <img src={one}  id="img"/><br></br>
<h1> Warehouse<br></br>
management</h1>
</div>
                 </div>


           </div>


           <div className="col-sm-4 col-md-4 col-6" >
 
 <div id="box" data-aos="zoom-out">
     <div>
     <img src={two}  id="img"/><br></br>
<h1> Toll Collection <br></br>management</h1>
</div>
 </div>


</div>



<div className="col-sm-4 col-md-4 col-6" > 
 
 <div id="box" data-aos="fade-right">
     <div>
     <img src={three}  id="img"/><br></br>
<h1>Access<br></br> 
Control</h1>
</div>
 </div>


</div>



<div className="col-sm-4 col-md-4 col-6">
 
 <div id="box" data-aos="fade-left">
     <div>
     <img src={four} id="img"/><br></br>
<h1>Assets and <br></br>inventory <br></br>management</h1>
</div>
 </div>


</div>



<div className="col-sm-4 col-md-4 col-6">
 
 <div id="box" data-aos="zoom-out">
     <div>
     <img src={five}  id="img"/><br></br>
<h1 id="comm">Smart Attendance<br></br> systems</h1>
</div>
 </div>


</div>



<div className="col-sm-4 col-md-4 col-6">
 
 <div id="box" data-aos="fade-right">
     <div>
     <img src={six}  id="img"/><br></br>
<h1>Smart Parking <br></br>Areas</h1>
</div>
 </div>


</div>
           
           
            </div>  
    
    
    </div> 



</div>
);
}


export default Boxes2;