

import './boxes.scss';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import six from './6.png';

function Boxes(){
return(
<div id="boxes_twoport">
    <div className="container-fluid"> 
    <div className="heading">
        <h1><span>Key Features </span> of the Reader</h1>
        <h2> These are the major and improtant features of our product. </h2>
        
         </div>




       <div className="row row1">
           <div className="col-sm-4 col-md-4 col-6">
 
                 <div id="box" data-aos="fade-left">
                     <div>
                     <img src={one}  id="img"/><br></br>
<h1> Greater <br></br> Accuracy</h1>
</div>
                 </div>


           </div>


           <div className="col-sm-4 col-md-4 col-6" >
 
 <div id="box" data-aos="zoom-out">
     <div>
     <img src={six}  id="img"/><br></br>
<h1> Longer Read & <br></br>write ranges</h1>
</div>
 </div>


</div>



<div className="col-sm-4 col-md-4 col-6" > 
 
 <div id="box" data-aos="fade-right">
     <div>
     <img src={three}  id="img"/><br></br>
<h1>Customization<br></br> provision</h1>
</div>
 </div>


</div>



<div className="col-sm-4 col-md-4 col-6">
 
 <div id="box" data-aos="fade-left">
     <div>
     <img src={four} id="img"/><br></br>
<h1>Completely<br></br> water resistant</h1>
</div>
 </div>


</div>



<div className="col-sm-4 col-md-4 col-6">
 
 <div id="box" data-aos="zoom-out">
     <div>
     <img src={five}  id="img"/><br></br>
<h1 id="comm">Multiple  <br></br>Communication <br></br>Interfaces</h1>
</div>
 </div>


</div>



<div className="col-sm-4 col-md-4 col-6">
 
 <div id="box" data-aos="fade-right">
     <div>
     <img src={six}  id="img"/><br></br>
<h1>Compact<br></br> package</h1>
</div>
 </div>


</div>
           
           
            </div>  
    
    
    </div> 



</div>
);
}


export default Boxes;