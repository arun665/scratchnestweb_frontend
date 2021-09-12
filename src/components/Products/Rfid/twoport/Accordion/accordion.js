
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
      <b>Dimension - </b>  300 x 300 x 50 mm<br></br>
      <b>Material - </b>Polycarbonate and Aluminium alloy<br></br>
      <b>Communication Interfaces - </b>USB, RS-232, RS-485, Wiegand, and LAN<br></br>
      <b>Input Voltage - </b>9-24 V DC supply<br></br>
      <b>Current Rating - </b>2 A<br></br>
      <b>Cooling Mode -</b> Air cooling<br></br>
      <b>Ethernet Interface - </b>10/100 Base T-Ethernet (RJ45)<br></br>
      <b>GPIO -</b> 4 input and 4 output<br></br>
      <b>Dense Reader Mode -</b> Supported<br></br>
    
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
        <b> Environmental Sealing - </b>IP65 rating<br></br>
        <b>Operating Temperature - </b>-25 to 65 °C<br></br>
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
        <b>Protocol -</b>EPC Class1 Gen2 (ISO 18000-6C), ISO 18000-6A/B  <br></br>
        <b>Antenna -</b> Inbuilt 9 dBi Circular Polarized Antenna  <br></br>
        <b>MCU -</b>Arm Cortex-M4  <br></br>
        <b>RF Power - </b>31.5 dBm, adjustable via software  <br></br>
 <b>RF Sensitivity  less than 90 dBm </b> <br></br>
 <b>RSSI - </b>Supported  <br></br>
<b>Maximum Tag Read Rate -</b>700 tags/s (with 16-bit tag EPC length)  <br></br>
<b>Tag Read Indication -</b> LED and buzzer  <br></br>
<b>Carrier Cancellation Circuitry -</b> Enabling pre- and re-tuning  <br></br>



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
  <b>       Power </b>- Red LED  <br></br>
  <b> Inbuilt Antenna </b>- Yellow LED <br></br>
  <b> External Antenna</b> - Yellow LED<br></br>
  <b> Tag </b>- Green LED and buzzer <br></br>

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
                        href="/Downloadfile/ir2.pdf"
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
