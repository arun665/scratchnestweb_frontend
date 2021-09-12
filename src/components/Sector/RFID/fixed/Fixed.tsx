import './fixed.scss';
import oneport from './oneport.png';
import twoport from './twoport.png';
import {Link} from 'react-router-dom';

function fixed(){
    return(
        <div className="row" id="fixed">
        <div className="col-sm-12 col-md-12 col-12">

 <div className="paradiv">
     <h1> Integrated Readers</h1>
     <p> Fully integrated RAIN RFID Readers that work in the ultra-high frequency (UHF) range.</p>
     </div>        </div>

   <div className="col-sm-6 col-md-6 col-12">
      <div id="box1" data-aos="zoom-in">
          <img src={oneport} id="img1rfid" />

<div id="para">
    <h1> Scratch<span>Nest</span></h1>
    <p> One Port Reader</p>
    <Link to="/products/rfid/oneport">

    <button className="btn btn-primary" id="button">Know More </button>
</Link>
</div>

             
          </div>      
</div>


<div className="col-sm-6 col-md-6 col-12">
      <div id="box2" data-aos="zoom-in">
          <img src={twoport} id="img1rfid" />

<div id="para">
    <h1> Scratch<span>Nest</span></h1>
    <p> Two Port Reader</p>
    <Link to="/products/rfid/twoport">
        
    <button className="btn btn-primary" id="button">Know More </button>
    </Link>
</div>

             
          </div>      
</div>


        </div>
  )
}

export default fixed;