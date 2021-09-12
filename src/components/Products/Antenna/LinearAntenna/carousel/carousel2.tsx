//this is carousel fro phone view
import './carousel2.scss';
import img1 from './img1.png';
 import img2 from './img2.png';
 import img3 from './img3.png';
 
function Carousel2(){
    return(
        <>
        
     <div id="myCarousel2" className="carousel slide" data-ride="carousel">

  
  
     <div className="carousel-inner">


     <div className="carousel-item active">
  <img src={img2}  className="img2"  alt="Los Angeles" />
</div>

<div className="carousel-item">
  <img src={img3}  className="img2"  alt="Chicago" />
</div>


</div>
<a className="carousel-control-prev" href="#myCarousel2" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#myCarousel2" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>

</div>
        </>

    )
}


export default Carousel2;