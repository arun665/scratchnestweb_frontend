import React from "react";
import './logger.scss';
import Topheader from "../../top_header/index";

import { IonButton, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import Footer from "../../Footer/footer2";
import { Link } from "react-router-dom";
import DataLogger from "./DataLogger/datalogger2";
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function DataLoggerSec() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Data Logger";
  }, [])
  return (

<>
<Helmet>
        <title>Data Logger</title>
        <meta name="description" content="A data logger is an electronic device that records your data over time. It works with built-in sensors, which detect the change with time. If it is based on a digital processor then also called a digital data logger (DDL)." />
    </Helmet>
<Topheader/>
<div className="container-fluid" id="logger">

      <div className="row" id="row1">
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div id="div">
   <h1> Scratch<span>Nest</span></h1>
   <h2> DATA <br></br> LOGGERs</h2>
        </div>
        </div>
      </div>

      <div className="row" id="row2">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div id="div2">
            <h1> What is a Data Logger?</h1>
            <p> 


            A data logger is an electronic device that records your data over time. It works with built-in sensors, which detect the change with time. Digital data loggers (DDL) are equipped with a digital microprocessor and built-in sensors to collect data and internal memory to store it. They are small, battery-powered, and portable.

</p>
        </div>
        </div>
      </div>


    </div>
<DataLogger/>

<Footer/>
    </>
  );
}

export default DataLoggerSec;
