import './carousel.scss';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.jpg';
import img5 from './img5.jpg';


function Carousel(){
    return(
        <>
            
     <div id="myCarousel" className="carousel carousel-fade slide" data-ride="carousel">


     <div className="carousel-inner">

<div className="carousel-item active">
  <img src={img1}  className="img2"  alt="Los Angeles" />
</div>
<div className="carousel-item">
  <img src={img2}  className="img2"  alt="Chicago" />
</div>
<div className="carousel-item">
  <img src={img3}  className="img2"  alt="New York" />
</div>
<div className="carousel-item">
  <img src={img4}  className="img2"  alt="New York" />
</div>
<div className="carousel-item">
  <img src={img5}  className="img2"  alt="New York" />
</div>

</div>

<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#myCarousel" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>

</div>
        </>

    )
}


export default Carousel;