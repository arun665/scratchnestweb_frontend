
import Topheader from '../top_header';
import Footer from '../Footer/footer2';
import './confirmation.scss';
import Success from './success.png';
import Beacon from './beacon2.png';
function Confirmation(){
    return(<>
    <Topheader/>
<div id="confirmation">

<div className="container-fluid">
 <div id="div1">
          <h1> Hi First Name</h1><br></br>
 <h2> <img src={Success} /> Your Order is Confirmed</h2> <br></br>
 <p>Thanks for shopping! Your order on Integrated RFID 1- Port Reader and 2 more items are successfully placed. We’ll send you an email regarding the same.</p>
    </div>

<div className="row" id="row1">
{/* order id  ------------------------------------------------------------------*/}
<div className="col-sm-4 col-md-4 col-12">
<div id="div2">
 <h2>  Order : <span>#109-221321341</span></h2> <br></br>
 <button className="btn btn-success"> View or Manage Order</button>
    </div>


</div>
{/* here we have added the selected address for delivery ------------------------------------------------------------------*/}

<div className="col-sm-4 col-md-4 col-12">
<div id="div3">
 <h2>  Order Will Be send to </h2> 
<p> Randow Address <br></br>Randow Address<br></br>Randow Address</p>
    </div>


    
</div>

{/* order details starts here ------------------------------------------------------------------*/}
<div className="col-sm-4 col-md-4 col-12">

<div id="div4">
<table >
<tr>
    <td colSpan={2}> <h1> Order Details</h1></td>
    </tr>
    <tr>
        <td id="left" style={{"color":"grey"}}>Bag Details</td> <td id="right"> ₹ 6920</td>
        </tr>
        <tr>
        <td id="left" style={{"color":"grey"}}>Bag Discounts</td> <td id="right"> <span style={{"color":"grey"}}> -₹ 2720</span></td>
        </tr>
        <tr>
        <td id="left" style={{"color":"grey"}}>Delivery</td> <td id="right"> <span style={{"color":"grey"}}> ₹ 199</span></td>
        </tr>
        <tr>
        <td id="left">Total Amount:</td> <td id="right"> <span > ₹ 4960</span></td>
        </tr>
        </table>
</div>
    
</div>

</div>
{/* list of items starts here ------------------------------------------------------------------*/}
<div id="list">

<div id="heading">
    <h1> Order Summary (3 items)</h1>
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
{/* sample code for item , later we will add an array here  ------------------------------------------------------------------*/}
<div className="row" id="items">

<div className="col-sm-4 col-md-4 col-5">

<img src={Beacon} />
</div>


<div className="col-sm-8 col-md-8 col-7">
    <h1> Tracking Beacon SN-TB101 </h1>
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <div id="desktop">
    <div className="form-group- form-inline" >
  <label id="itemquantity">Qty:</label>
  <select className="form-control" >
    <option>1</option>
 
  </select>
</div>
<table>
    <tr>
        <td>
<h2>Price: <span>( <del>₹ 2620 </del>) </span>  <span id="span2">sdfsdf</span>  </h2>
</td>
<td>
<button className="btn btn-outline-danger" id="delete">  <i className="fa fa-trash" ></i>Delete</button></td>
</tr>
</table>
</div>
</div>

<div className="col-sm-0 col-md-0 col-12">
<div id="phone">
<table>
    <tr>
        <td>
    <div className="form-group- form-inline" >
  <label id="itemquantity">Qty:</label>
  <select className="form-control" >
    <option>1</option>

  </select>
</div>
</td>
<td>
<button className="btn btn-outline-danger" id="delete">  <i className="fa fa-trash" ></i>Delete</button></td>
</tr>
    <tr>
        <td colSpan={2}>
<h2>Price: <span>( <del>₹ 2620 </del>) </span>  <span id="span2">₹ 2629</span>  </h2>
</td>

</tr>
</table>
</div>
</div>

</div>
{/* saple item fo product end herer ------------------------------------------------------------------*/}


</div>





</div>





</div>
<Footer/>
    </>);
}



export default Confirmation;