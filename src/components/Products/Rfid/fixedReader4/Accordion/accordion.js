
import './accordion.scss';

function accordion(){
return(<>


<div class="container" id="accordiononeport">
<div id="div2">

<h1>Few more  <span>Details</span> about the Reader </h1>
<p> Parameters and Technical specifications of our product are listed below.</p>
  


  
    </div>
  <div id="accordion">
    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapseOne" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="faq1">
        Physical Characteristics
        </div>
      </div>
      <div id="collapseOne" class="collapse" data-parent="#accordion">
        <div class="card-body">
     <b>  Dimension -</b>  200 x 160 x 30 mm   <br></br>
     <b> Material - </b> Aluminium alloy<br></br>
 <b>     Communication Interfaces - </b> USB, RS-232, RS-485, Wiegand, and LAN<br></br>
 <b> Input Voltage - </b> 9-24 V DC supply<br></br>
 <b> Current Rating - </b> 2 A<br></br>
 <b> Cooling Mode -</b>  Air cooling<br></br>
 <b> Ethernet Interface -</b>  10/100 Base T-Ethernet (RJ45)<br></br>
 <b> GPIO - </b> 4 input and 4 output<br></br>
 <b> Dense Reader Mode - </b> Supported<br></br>
    
        </div>
      </div>
    </div>
 
    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapseTwo" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="faq2">
     User Environment
        </div>
      </div>
      <div id="collapseTwo" class="collapse" data-parent="#accordion">
        <div class="card-body">
        <b>  Operating Temperature - </b>-25 to 65 °C  <br></br>
        <b>Storage Temperature -</b> -45 to 90 °C<br></br>
        <b>Relative Humidity - </b>10% to 90%<br></br>
        </div>
      </div>
    </div>
    

    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse4" data-target="#collapse4"
                            aria-expanded="true" aria-controls="faq1">
 UHF RFID
        </div>
      </div>
      <div id="collapse4" class="collapse" data-parent="#accordion">
        <div class="card-body">
        <b>  Operating Frequency - </b>840 - 960 MHz  <br></br>
        <b>Protocol - </b>ISO18000-62 & -63, ISO29143 <br></br>
        <b>Air Interface Protocol - </b>EPC Class1 Gen2 (ISO 18000-6C), ISO 18000-6A/B <br></br>
        <b>Antenna Port -</b> Four 50 Ohm external antenna ports <br></br>
        <b>MCU -</b>Arm Cortex-M4 <br></br>
        <b>RF Power - </b>31.5 dBm, adjustable via software <br></br>
        <b>RF Sensitivity -</b> less than -90 dBm <br></br>
        <b>RSSI data readout - </b>Supported <br></br>
        <b>Maximum Tag Read Rate -</b> 700 tags/s (with 16-bit tag EPC length) <br></br>
        <b>Tag Read Indication - </b>LED and buzzer <br></br>
        <b>Carrier Cancellation Circuitry - </b>Enabling pre- and re-tuning <br></br>



        </div>
      </div>
    </div>



    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse5" data-target="#collapse5"
                            aria-expanded="true" aria-controls="faq1">
Visual & Sound Indicator
        </div>
      </div>
      <div id="collapse5" class="collapse" data-parent="#accordion">
        <div class="card-body">
        <b>  Power -</b> Red LED  <br></br>
        <b>Antenna 1 - </b>Yellow LED<br></br>
   <b>Antenna 2 - </b>Yellow LED<br></br>
<b>Antenna 3 - </b>Yellow LED<br></br>
<b>Antenna 4 - </b>Yellow LED<br></br>
<b>Tag - </b>Green LED and buzzer<br></br>


        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse5" data-target="#collapse7"
                            aria-expanded="true" aria-controls="faq1">
Connectors Type

        </div>
      </div>
      <div id="collapse7" class="collapse" data-parent="#accordion">
        <div class="card-body">
        <b>  USB -</b>USB type B  <br></br>
        <b>LAN - </b>RJ45<br></br>
        <b>RS232 - </b>DB9 connector<br></br>
        <b>RS485 - </b>DB9 connector<br></br>
        <b>GPIO</b><br></br>
        <b>Antenna -</b> TNC connector<br></br>


        </div>
      </div>
    </div>



    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse5" data-target="#collapse6"
                            aria-expanded="true" aria-controls="faq1">
Accessories Included
        </div>
      </div>
      <div id="collapse6" class="collapse" data-parent="#accordion">
        <div class="card-body">
        Reader<br></br>
Power adapter<br></br>
Mounting brackets<br></br>
USB cable<br></br>
User manual<br></br>
        </div>
      </div>
    </div>



    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse3" data-target="#collapse3"
                            aria-expanded="true" aria-controls="faq1">
 Downloads
        </div>
      </div>
      <div id="collapse3" class="collapse" data-parent="#accordion">
        <div class="card-body">
        <a
                        href="/Downloadfile/fr4.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                      Get DataSheet
                      </a>
    
        </div>
      </div>
    </div>
  </div>
</div>
</>)
}


export default accordion;
