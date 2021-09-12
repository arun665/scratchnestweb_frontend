import './integrated.scss';
import oneport from './oneport.png';
import twoport from './twoport.png';


function fixed(){
    return(
        <div className="row" id="integrated">
        <div className="col-sm-12 col-md-12 col-12">

 <div className="paradiv">
     <h1> Fixed Readers</h1>
     <p> Fixed RAIN RFID Readers that come with variable <br></br>interfaces and UHF operation.</p>
     </div>        </div>

   <div className="col-sm-6 col-md-6 col-12">
      <div id="box1" data-aos="zoom-out">
          <img src={oneport} id="img1rfid" />

<div id="para">
    <h1> Scratch<span>Nest</span></h1>
    <p> Two Port Reader</p>
    <button className="btn btn-primary" id="button">Know More </button>
</div>

             
          </div>      
</div>


<div className="col-sm-6 col-md-6 col-12">
      <div id="box2" data-aos="zoom-out">
          <img src={twoport} id="img1rfid" />

<div id="para">
    <h1> Scratch<span>Nest</span></h1>
    <p> Four Port Reader</p>
    <button className="btn btn-primary" id="button">Know More </button>
</div>

             
          </div>      
</div>


        </div>
  )
}

export default fixed;