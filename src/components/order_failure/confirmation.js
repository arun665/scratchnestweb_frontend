import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import axios from 'axios';
import Topheader from '../top_header';
import Footer from '../Footer/footer2';
import './confirmation.scss';
import Success from './error.png';
import Beacon from './beacon2.png';

class Confirmation extends React.Component {
  state = {
    loader:true,
        order_id: new URLSearchParams(this.props.location.search).get("order_id"),
        billing_name: new URLSearchParams(this.props.location.search).get("billing_name"),
        billing_address: new URLSearchParams(this.props.location.search).get("billing_address"),
        billing_city: new URLSearchParams(this.props.location.search).get("billing_city"),
        billing_state:new URLSearchParams(this.props.location.search).get("billing_state"),
        billing_zip:new URLSearchParams(this.props.location.search).get("billing_zip"),
        amount:new URLSearchParams(this.props.location.search).get("amount"),
        order_status:new URLSearchParams(this.props.location.search).get("order_status"),
        prods:[]
      };
componentDidMount = () => {
    //console.log(new URLSearchParams(this.props.location.search).get("amount"));
    this.getCart();
  }

  getCart = () => {
    axios({
        url: 'http://localhost:5000/cart',
        method: 'GET',
        withCredentials:true
        //data: payload
      })
      .then((res) => { 
        console.log(res.data.user.cart.items);
        const prods = res.data.user.cart.items;
        this.setState({prods:prods})

      }).catch((err) => {
        console.log(err);
        
      });
  }
//function Confirmation(){
  cartprod = (prods) => {
    if (prods.length) {
return prods.map((post, i) => (
    /* thses are the real igtems from database */

      <div className="row" id="items" key={i}>
        <div className="col-sm-4 col-md-4 col-5">
          <img src={Beacon} />
        </div>
        <div className="col-sm-8 col-md-8 col-7">
          <h1> {post.product_title} </h1>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          {/* desktop listing of products */}
          <div id="desktop">
            <div className="form-group- form-inline" >
              <label id="itemquantity">Qty:</label>
             
 {/* here is the new button gruoup to increment ans decrement the items quantity*/}
 
 <select className="form-control" >
    <option>{post.qty} </option>

  </select>
                
{/*------------------------------------------------------------*/}
            </div>
            <table>
              <tr>
                <td>
                  <h2>Price: <span>( <del>₹ {post.price + (post.price / 10)} </del>) </span>  <span id="span2">₹ {post.price} </span>  </h2>
                </td>
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
    <option>{post.qty}</option>

  </select>
</div>
</td>
<td></td>
</tr>
    <tr>
        <td colSpan={2}>
<h2>Price: <span>( <del>₹ {post.price + (post.price / 10)}</del>) </span>  <span id="span2">₹  {post.price}</span>  </h2>
</td>

</tr>
</table>
</div>
</div>
      </div>  ))}}
    
    render() {
        return (

<>    
    <Topheader/>
<div id="fail">

<div className="container-fluid">
 <div id="div1">
          <h1> Hi {this.state.billing_name}</h1><br></br>
 <h2> <img src={Success} /> Your Order is not Placed</h2> <br></br>
 <p> Oops , facing some difficulty in placing your order , please try again</p>
    </div>

<div className="row" id="row1">
{/* order id  ------------------------------------------------------------------*/}
<div className="col-sm-4 col-md-4 col-12">
<div id="div2">
 <h2>  Order : <span>{this.state.order_id}</span></h2> <br></br>
 <button className="btn btn-danger"> View or Manage Order</button>
    </div>


</div>
{/* here we have added the selected address for delivery ------------------------------------------------------------------*/}

<div className="col-sm-4 col-md-4 col-12">
<div id="div3">
 {/*
 <h2>  Order Will Be send to </h2> 
  <p> {this.state.billing_address} <br></br>{this.state.billing_city}<br></br>{this.state.billing_state}<br></br>{this.state.billing_zip}</p>
 */}  
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
        <td id="left">Total Amount:</td> <td id="right"> <span > {this.state.amount}</span></td>
        </tr>
        </table>
</div>
    
</div>

</div>
{/* list of items starts here ------------------------------------------------------------------*/}
<div id="list">

<div id="heading">
    <h1> Order Summary </h1>
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
{this.cartprod(this.state.prods)}
{/* sample code for item , later we will add an array here  ------------------------------------------------------------------*/}
{/*
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
</td>

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
<td></td>
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
*/}
{/* sample item fo product end herer ------------------------------------------------------------------*/}


</div>





</div>





</div>
<Footer/>
    </>);
}

}


export default Confirmation;