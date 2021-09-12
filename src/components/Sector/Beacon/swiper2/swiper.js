
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from './img2.png';
import img3 from './img3.png';
import img1 from './img1.png';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./style.scss";


// import Swiper core and required modules
import SwiperCore, {
  EffectCube,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCube,Pagination]);


 function Swiper2() {
  
  
  
  return (
    <>
    <div id="swiper2">
      
    <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
  "shadow": true,
  "slideShadows": true,
  "shadowOffset": 20,
  "shadowScale": 0.94
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
  <br></br>
  <p id="p"> Slide Right  </p>
      
  </div>
    </>
  )
}



export default Swiper2;