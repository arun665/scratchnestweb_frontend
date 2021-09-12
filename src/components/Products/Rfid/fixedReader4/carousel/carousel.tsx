import './carousel.scss';


function Carousel(){
    return(
        <>
            
     <div id="myCarousel" className="carousel slide" data-ride="carousel">


     <div className="carousel-inner">

<div className="carousel-item active">
  <img src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618753639/4_port_Fixed_Reader_biyqsv.png"  className="img2"  alt="Los Angeles" />
</div>
<div className="carousel-item">
  <img src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618753640/4_Port_Fixed_Reader_2_ipizsx.png"  className="img2"  alt="Chicago" />
</div>
<div className="carousel-item">
  <img src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618753641/4_Port_Fixed_Reader_3_uusmlf.png"  className="img2"  alt="New York" />
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