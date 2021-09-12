import React from "react";

import Topheader from "../top_header/index";

import "./homesector.css";
import Header from "../Header/index";
import Education from "../HomeSectors/Education/education2";

import Beacon from "../HomeSectors/Beacon/beacon2";

import DataLogger from "../HomeSectors/DataLogger/datalogger2";

import Rfid from "../HomeSectors/RFID/rfid2";
import OurSectors  from "./oursectors/OurSectors";
import Footer from "../Footer/footer2";
import { useEffect  } from "react";
import {Helmet} from "react-helmet";
import Blogs from './Blogs/Blogs';


function HomeSector() {
  useEffect(() => {
    window.scrollTo(0, 0);  
    

  
  }, [])
  
  return (
    
    <div className="home">
          <Helmet>
        <title>ScratchNest</title>
        <meta name="description" content="ScratchNest pioneers in delivering customized experiences of the next-gen technologies and bringing innovation to everything you use." />
    </Helmet>
      <div className="wrapper">
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
          
        </div>
   <Topheader/>
 <Header/>
 <OurSectors/>
 <Rfid/> 

   <Beacon/>
   <DataLogger/>
   <Education/>
            <Blogs/>
            <Footer/>
            
      
    </div>
  );
}

export default HomeSector;
