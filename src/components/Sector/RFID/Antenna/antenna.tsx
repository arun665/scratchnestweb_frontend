import './antenna.scss';
import oneport from './oneport.png';
import twoport from './twoport.png';
import {Link} from 'react-router-dom';

function Antenna(){
    return(
        <div className="row" id="antenna" >
        <div className="col-sm-12 col-md-12 col-12">

 <div className="paradiv">
     <h1> Antennas</h1>
     <p> High performance, far-field RFID antennas that provide reception and  transmission of signals in the UHF frequency band.</p>
     </div>        </div>

   <div className="col-sm-6 col-md-6 col-12">
      <div id="box1" data-aos="zoom-out">
          <img src={oneport} id="img1rfid"  loading="lazy"/>

<div id="para">
    <h1> Scratch<span>Nest</span></h1>
    <p> Linear Polarized</p>
    <Link to="/products/LinearAntenna">
    <button className="btn btn-primary" id="button">Know More </button></Link>
</div>

             
          </div>      
</div>


<div className="col-sm-6 col-md-6 col-12">
      <div id="box2" data-aos="zoom-out">
          <img src={twoport} id="img1rfid"  loading="lazy"/>

<div id="para">
    <h1> Scratch<span>Nest</span></h1>
    <p> Circular Polarized</p>
    <Link to="/products/CircularAntenna">
    <button className="btn btn-primary" id="button">Know More </button></Link>
</div>

             
          </div>      
</div>


        </div>
  )
}

export default Antenna;