// this is the carousel for phone view 
//desktop view carousel is ./carousel

import './carousel2.scss';
function Carousel2(){
    return(
        <>
        
     <div id="myCarousel2" className="carousel slide" data-ride="carousel">

  
<div className="carousel-inner">

  <div className="carousel-item active">
    <img src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618753384/2_port_Fixed_Reader_2_tuhrot.png"  className="img2"  alt="Los Angeles" />
  </div>
  <div className="carousel-item">
    <img src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618753383/2_port_Fixed_Reader_rzm6bf.png"  className="img2"  alt="Chicago" />
  </div>
  <div className="carousel-item">
    <img src="https://res.cloudinary.com/dpysmqax5/image/upload/v1618753385/2_Port_Fixed_Reader_3_pfsjs7.png"  className="img2"  alt="New York" />
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