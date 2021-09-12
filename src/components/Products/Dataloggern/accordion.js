
import './accordion.scss';

function accordion(){
return(<>


<div class="container" id="accordion">
  <div id="accordion">
    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapseOne" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="faq1">
         Parameters Re-programmable using our software
        </div>
      </div>
      <div id="collapseOne" class="collapse" data-parent="#accordion">
        <div class="card-body">
    
     <b>   Log Interval -</b> 10 min to 19 hour <br></br>
     <b> Start Delay -</b> 0 min to 5 Hour <br></br>
     <b> Time Zone - </b>UTC - 14.00 to UTC + 14.00 <br></br>
     <b> Low Alarm - </b>Upto -40 °C<br></br>
     <b> High Alarm -</b> Upto 85 °C<br></br>
    
        </div>
      </div>
    </div>
 
    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapseTwo" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="faq2">
         Technical Specifications
        </div>
      </div>
      <div id="collapseTwo" class="collapse" data-parent="#accordion">
        <div class="card-body">
        <b>  Type -</b> Single use <br></br>
        <b>Measurement Range -</b>–40 °C to +85 °C<br></br>
        <b>Accuracy - </b>±0.5 °C<br></br>
        <b>Resolution -</b> 0.25 °C<br></br>
        <b>Memory Capacity -</b> 13000<br></br>
        <b>Batteryy - </b>3V Lithium<br></br>
        <b>Recording Interval -</b> 10 minutes(Customisable)<br></br>
        <b>Recording Duration - </b>90 days<br></br>
        <b>Initial Delay - </b>30 Mins<br></br>
        <b>Protection Class -</b> IP67<br></br>
        <b>Report Secured - </b>PDF<br></br>
        <b>Report Type - </b>Graphical and Tabular manner in PDF<br></br>
        <b>Connectivity - </b>USB 2.0<br></br>
        <b>Alarm Type - </b>High & Low Alarm<br></br>
        <b>High Alarm -</b> 8 °C(Customisable)<br></br>
        <b>Low Alarm - </b>2 °C(Customisable)<br></br>
        <b>Re-programmable - </b>Yes<br></br>
        <b>Shelf Life -</b> 12 months
    
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
                        href="/Downloadfile/ambitag.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Get DataSheet
                      </a>
                      <br></br>
                      <a
                        href="/Downloadfile/ambitagsoftware.exe"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Software to Customise various parameters
                      </a>

                      

    
        </div>
      </div>
    </div>
  </div>
</div>
</>)
}


export default accordion;
