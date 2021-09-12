
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from './img2.png';
import img3 from './img3.png';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./styles.scss";
import img1 from './img1.png';


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


function Swipers() {
  
  
  
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
  }

  const prepend = () => {
    swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
  }

  const append = () => {
    swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  }

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
  }
  
  return (
    <>
    <div id="swiper">
  <Swiper onSwiper={setSwiperRef} slidesPerView={3} centeredSlides={true} spaceBetween={20} pagination={{
  "type": "fraction"
}} navigation={true} className="mySwiper">
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


    </SwiperSlide>
    <SwiperSlide>

    <div class="card">
  <div >       <img src={img3} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Storage and Freezer
Monitoring</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
  
</div>

    </SwiperSlide>
    <SwiperSlide>
    <div class="card">
  <div >       <img src={img2} alt="Los Angeles" id="img"/>
   </div>
  <div class="carousel_div"> 
<h1>Sea Freights and
Air Freights</h1>
<p> Lorem Ipsum is simply dummy
text of the printing and type
setting industry. Lorem Ipsum 
has been the industry's standar
dummy text ever since the 1500.</p>

  </div>
  
</div>

    </SwiperSlide>
    <SwiperSlide>
    <div class="card">
  <div >       <img src={img3} alt="Los Angeles" id="img"/>
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

    </SwiperSlide>
    
  </Swiper>
</div>
  
    </>
  )
}


export default Swipers;