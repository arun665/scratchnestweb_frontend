
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import "./styles.scss";


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);


function swiperdatalogger() {
  
  
  
  return (
    <><div id="swiperdatalogger">
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={true} className="mySwiper">
  <SwiperSlide>
  <div class="card">
  <div >       <img src={img1} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Vaccine Temperature 
Logging</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
</div>

      
      </SwiperSlide><SwiperSlide>
          
      <div class="card">
  <div >       <img src={img1} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Vaccine Temperature 
Logging</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
</div>

          </SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide>
  </Swiper>

</div>    </>
  )
}


export default swiperdatalogger;