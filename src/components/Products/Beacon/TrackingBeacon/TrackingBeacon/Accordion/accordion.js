
import './accordion.scss';

function accordion(){
return(<>


<div class="container" id="accordiononeport">
<div id="div2">

<h1>Few more  <span>Details</span> about the Beacon </h1>
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
    <b>  Dimension - </b>  34 x 36 x 10 mm  <br></br>
    <b> Material -</b>   Polycarbonate<br></br>
 <b>     Size Tolerance - </b>  1mm<br></br>
 <b> Environmental Sealing - </b>  IP-65 rating<br></br>
    
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
        <b>      Operating Temperature - </b>-25 to 65 °C<br></br>
        <b> Storage Temperature - </b>-45 to 90 °C<br></br>
        <b> Relative Humidity - </b>10% to 90%<br></br>
    
        </div>
      </div>
    </div>
    

    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse4" data-target="#collapse4"
                            aria-expanded="true" aria-controls="faq1">
 RF Features
        </div>
      </div>
      <div id="collapse4" class="collapse" data-parent="#accordion">
        <div class="card-body">
        <b>  Based on -</b> NRF52805  <br></br>
        <b>CPU - </b>64 MHz Arm Cortex-M4<br></br>
        <b>Antenna - </b>Internal PCB Antenna<br></br>
        <b>Memory - </b>192 KB Flash + 24 KB RAM<br></br>
        <b>Performance -</b>144 Coremark/mA<br></br>
        <b>Efficiency -</b>65 CoreMark/mA<br></br>
        <b>Wireless protocol support - </b>Bluetooth Low Energy/2.4 GHz proprietary<br></br>
        <b>On-air data rate - </b>Bluetooth LE : 2 Mbps/1 Mbps<br></br>
        <b>2.4 GHz proprietary : </b>2 Mbps/1 Mbps<br></br>
        <b>TX power -</b> +4 dBm to -20 dBm<br></br>
        <b>RX sensitivity - </b>-97 dBm at 1 Mbps<br></br>
        <b>Maximum range -</b> 100m<br></br>
        <b>Battery -</b> Coin cell (CR2032)<br></br>
        <b>Switch -</b> Yes
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
      <b>  Sound </b>-Buzzer<br></br>
<b>Visual </b>- Multi Colour Led

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
                        href="/Downloadfile/Tracking_Beacon.pdf"
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
