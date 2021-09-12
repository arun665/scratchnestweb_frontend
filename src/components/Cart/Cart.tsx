import './Cart.scss';
import Topheader from "../top_header";
import Footer from '../Footer/footer2';
import Beacon from './beacon2.png';
function Cart(){
return(
    <>
<Topheader/>
<div id="cart">

    <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-12 col-12 heading">

<h1>My Cart Items (3)</h1>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>    
<div className="col-sm-12 col-md-8 col-12">




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
    <option>2</option>
    <option>3</option>
    <option>4</option>
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
    <option>2</option>
    <option>3</option>
    <option>4</option>
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
    <option>2</option>
    <option>3</option>
    <option>4</option>
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
    <option>2</option>
    <option>3</option>
    <option>4</option>
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




</div>

<div className="col-sm-12 col-md-4 col-12">


    <div className="checkout">
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
        <tr>
    <td colSpan={2}> <button className="btn btn-primary" id="checkoutbtn"> Proceed to Checkout</button></td>
    </tr>
    <tr>
    <td colSpan={2}> <h2> Select Delivery address</h2></td>
    </tr>
<tr>
    <td colSpan={2}>
    <form className="form">
    <div className="form-check">
      <label className="form-check-label" style={{"marginTop":"5px"}}>
        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked/>601 - Random Add
        Random City and state
        Pincode : 2390134
      </label>
      <label className="form-check-label" style={{"marginTop":"5px"}}>
        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked/>601 - Random Add
        Random City and state
        Pincode : 2390134
      </label>
    </div>
    
  </form>
    </td>
</tr>

<tr>
    <td colSpan={2}> <button className="btn btn-primary" id="addaddress"> Add new Address </button></td>
    </tr>

        </table>

    </div>

    
</div>

        </div>
    </div>





</div>

<Footer/>
    </>
)



}




export default Cart;