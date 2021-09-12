import './carousel.scss';

function Carousel(){
    return(
        <>
            
     <div id="myCarousel" className="carousel carousel-fade slide" data-ride="carousel">


     <div className="carousel-inner">

<div className="carousel-item active">
  <img src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618751261/circularFeatureGallery.jpg"  className="img2"  alt="Los Angeles" />
</div>
<div className="carousel-item">
  <img src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618751262/circular2FeatureGallery.jpg"  className="img2"  alt="Chicago" />
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