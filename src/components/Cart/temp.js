import React from 'react';
//import { BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
//import ReactDOM from 'react-dom';
import './Cart.scss';
import Topheader from "../top_header";
import Footer from '../Footer/footer2';
import Beacon from './beacon2.png';
import BarLoader from "react-spinners/ScaleLoader";
import { LoadingOverlay, Loader } from 'react-overlay-loader';

import 'react-overlay-loader/styles.css';
//import { Modal, Button, Form } from "react-bootstrap";
class Temp extends React.Component {


  
  state = {
loader:true,
    street_add: '',
    city: '',
    pin: '',
    user: [],
    prods: [],
    total: [],
    street_addTitle: [],
    cityTitle: [],
    pinTitle: [],
    response: [],
    address: []
  };


  

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  changeShow = () => {

  }

  componentDidMount = () => {
    this.getproduct();
  }

  //select address functionality
  onChange = i => {
    this.setState({
      street_addTitle: this.state.address[i].street_add,
      cityTitle: this.state.address[i].city,
      pinTitle: this.state.address[i].pin,
      checked: i
    });
  };

  //delete an item from cart
  doDelete = (e) => {

    this.setState({loader:true});

    const payload = {
      prodId: e
    };
    axios({
      url: 'https://api.scratchnest.com/deleteInCart',
      method: 'POST',
      data: payload,
      withCredentials : true ,
    }).then(() => {
      this.setState({loader:false});
      this.getproduct();
    }).catch((err) => {
      console.log(err);
    });
  }

  //increase the quantity of item in cart
  doIncrease = (e) => {
    this.setState({loader:true});
    const payload = {
      id: e
    };
    axios({
      url: 'https://api.scratchnest.com/addToCart',
      method: 'POST',
      data: payload,
      withCredentials : true 
    }).then(() => {
      this.setState({loader:false});
      this.getproduct();
    }).catch((err) => {
      console.log(err);
    });
  }

  //decrease the quantity of item in cart
  doDecrease = (e) => {
    console.log(e)
    this.setState({loader:true});
    const payload = {
      id: e
    };
    axios({
      url: 'https://api.scratchnest.com/do-decreaseItem',
      method: 'POST',
      data: payload,
      withCredentials : true 
    }).then(() => {
      this.setState({loader:false});
      this.getproduct();
    }).catch((err) => {
      console.log(err);
    });
  }

  //add address from submit request 
  submit = (e) => {
    e.preventDefault();
    const payload = {
      street_add: this.state.street_add,
      city: this.state.city,
      pin: this.state.pin
    };

    axios({
      url: 'https://api.scratchnest.com/do-addAddress',
      method: 'POST',
      data: payload,
      withCredentials : true ,
      
    }).then(() => {
      console.log('Data sent');
      this.resetUserInputs();
      this.getproduct();
    }).catch((err) => {
      console.log(err);
    });
  }

  //clear the inputs after add address form submission and success response
  resetUserInputs = () => {
    this.setState({ street_add: '', city: '', pin: '' });
  }

  //get all the cart information for the logged in user
  getproduct = async() => {

      window.scrollTo(0, 0);
      document.title = "Cart";


    try{
      axios.get('https://api.scratchnest.com/cart',{withCredentials : true})
      .then((res) => {
        const user = res.data.user;
        const prods = res.data.user.cart.items;
        const total = res.data.user.cart.totalPrice;
        const address = res.data.user.address;
        this.setState({ user: user });
        this.setState({ prods: prods });
        this.setState({ total: total });
        this.setState({ address: address });
        this.setState({ checked: 0 });
        this.setState({ street_addTitle: this.state.address[0].street_add })
        this.setState({ cityTitle: this.state.address[0].city })
        this.setState({ pinTitle: this.state.address[0].pin })
        this.setState({date:'SNORD'+new Date().toLocaleDateString('en-GB').replace(/-|\//g,'').split("").reverse().join("")+'-'+this.state.user._id.slice(0,-16)})
      
        if(user){
          this.setState({loader:false});
        }
      
      })
      .catch((err) => {
        console.log(err);
        const {history}=this.props;
    history.push('/login');        
      });
    }catch(err){
      const {history}=this.props;
    history.push('/login');
    }
  }

  const 
  //from here we are dynamically listing the products
  cartprod = (prods) => {
    if (!prods.length && !this.state.loader) {
      return (

        /* this is demo item*/

        <div className="row" id="items">
        
          <div className="col-sm-8 col-md-8 col-6">
            <h1>   <i class='fas fa-frown' style={{"color":"#fbba08","fontSize":"30px"}} loading="lazy"></i> Oops!! Your cart is empty </h1>
          
            
       </div>
        </div>
      );
    }

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

 <div class="input-group">
                  
                  <span class="input-group-btn">
                      <button type="button" class="quantity-left-minus btn btn-danger btn-number button1"  data-type="minus" data-field="" value={post.productId} onClick={() => this.doDecrease(post.productId)}>
                      <i class="fa fa-minus" ></i>
                      </button>
                  </span>
                  <input type="text" id="quantity" name="quantity" class="form-control input-number" value={post.qty} />
                  <span class="input-group-btn">
                      <button type="button" class="quantity-right-plus btn btn-success btn-number button2" data-type="plus" data-field="" value={post.productId} onClick={() => this.doIncrease(post.productId)}>
                      <i class="fa fa-plus" ></i>
                      </button>
                  </span>
              </div>
{/*------------------------------------------------------------*/}
            </div>
            <table>
              <tr>
                <td>
                  <h2>Price: <span>( <del>₹ {post.price + (post.price / 10)} </del>) </span>  <span id="span2">₹ {post.price} </span>  </h2>
                </td>
                <td>
                  <button className="btn btn-outline-danger" id="delete" value={post.productId} onClick={() => this.doDelete(post.productId)}>
                    <i className="fa fa-trash" ></i>Delete</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/* mobile listing of products */}
        <div className="col-sm-0 col-md-0 col-12">
          <div id="phone">
            <table>
              <tr>
                <td>
                  <div className="form-group- form-inline" >
                  <label id="itemquantity">Qty:</label>
            
            
 {/* here is the new button gruoup  for phone view to increment ans decrement the items quantity*/}

 <div class="input-group">
                  
                  <span class="input-group-btn">
                      <button type="button" class="quantity-left-minus btn btn-danger btn-number button1"  data-type="minus" data-field="" value={post.productId} onClick={() => this.doDecrease(post.productId)}>
                      <i class="fa fa-minus" ></i>
                      </button>
                  </span>
                  <input type="text" id="quantity" name="quantity" class="form-control input-number" value={post.qty} />
                  <span class="input-group-btn">
                      <button type="button" class="quantity-right-plus btn btn-success btn-number button2" data-type="plus" data-field="" value={post.productId} onClick={() => this.doIncrease(post.productId)}>
                      <i class="fa fa-plus" ></i>
                      </button>
                  </span>
              </div>
{/*------------------------------------------------------------*/}

                  </div>
                </td>
                <td>
                <button className="btn btn-outline-danger" id="delete" value={post.productId} onClick={() => this.doDelete(post.productId)}>
                    <i className="fa fa-trash" ></i>Delete</button>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <h2>Price: <span>( <del>₹ {post.price + (post.price / 10)} </del>)</span>  <span id="span2">₹  {post.price}</span>  </h2>
                </td>

              </tr>
            </table>
          </div>
        </div>

      </div>
    ));
  };

  //from here we are listing the different address
  useraddress = (address) => {
    if (!address.length) {
      return (
        <div>
          <label className="form-check-label" style={{ "marginTop": "5px" }}>
            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked />

            this is demo address<br />demo city <br /> demo pin
          </label>
        </div>
      );
    }
    return address.map((add, i) => (
      <div>
        <label className="form-check-label" style={{ "marginTop": "5px" }} key={i}>
          <input type="radio" className="form-check-input"
            checked={this.state.checked === i ? true : false} key={i}
            name="deliver" value={this.state.address[i]._id} onChange={this.onChange.bind(this, i)} />
          {add.street_add}<br />{add.city}<br />{add.pin}
        </label>
      </div>

    ));
  };

  //from here return starts
  render() {
    return (

      <>
        <Topheader />
        <div id="cart">
        <LoadingOverlay display={true} style={{ "width": "100vw" , "minHeight": "60vh" , "opacity":"0.8" }}> 
            <Loader loading={this.state.loader}  style={{"color":"red","backgroundColor":"red", "marginLeft":"auto", "marginRight":"auto", "textAlign":"center","marginBottom":"auto"}}/>

          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-12 heading">
              
                <h1>My Cart Items  </h1>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="col-sm-12 col-md-8 col-12">

                {/* listing fo the items */}
                {this.cartprod(this.state.prods)}

              </div>

              <div className="col-sm-12 col-md-4 col-12">


                <div className="checkout" style={{ display: this.state.prods.length ? "block" : "none" }}>
                  <table >
                    <div >
                    <tr>
                      <td colSpan={2}> <h1> Order Details</h1></td>
                    </tr>
                    <tr>
                      <td id="left" style={{ "color": "grey" }}>Bag Details</td> <td id="right">₹ {this.state.total}</td>
                    </tr>
                    <tr>
                      <td id="left" style={{ "color": "grey" }}>Bag Discounts</td> <td id="right"> <span style={{ "color": "grey" }}> -₹ {this.state.total + (this.state.total / 10)}</span></td>
                    </tr>
                    <tr>
                      <td id="left" style={{ "color": "grey" }}>Delivery</td> <td id="right"> <span style={{ "color": "grey" }}> ₹ 199</span></td>
                    </tr>
                    <tr>
                      <td id="left">Total Amount:</td> <td id="right"> <span > ₹ {this.state.total / 10 + 199}</span></td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <form method="POST" name="customerData" action="https://api.scratchnest.com/ccavRequestHandler">
                          <input type="hidden" name="merchant_id" id="merchant_id" value="271474" readOnly='true'/>
                          <input type="hidden" name="order_id"
                           value={this.state.date} readOnly='true'/>
                          <input type="hidden" name="currency" value="INR" />
                          <input type="hidden" name="amount" value={this.state.total} readOnly='true' />
                          <input type="hidden" name="redirect_url"
                            value="https://api.scratchnest.com/ccavResponseHandler" />
                          <input type="hidden" name="cancel_url"
                            value="https://api.scratchnest.com/ccavResponseHandler" />
                          <input type="hidden" name="language" id="language" value="EN" />
                          <input type="hidden" name="billing_name" value={this.state.user.username} />
                          <input type="hidden" name="billing_address"
                            value={this.state.street_addTitle} />
                          <input type="hidden" name="billing_city" value={this.state.cityTitle} />
                          <input type="hidden" name="billing_state" value="UP" />
                          <input type="hidden" name="billing_zip" value={this.state.pinTitle} />
                          <input type="hidden" name="billing_country" value="India" />
                          <input type="hidden" name="billing_tel" value={this.state.user.contact_no} />
                          <input type="hidden" name="billing_email" value={this.state.user.email} />
                          <input type="hidden" name="delivery_name" value={this.state.user.name} />
                          <input type="hidden" name="delivery_address"
                            value={this.state.street_addTitle} />
                          <input type="hidden" name="delivery_city" value={this.state.cityTitle} />
                          <input type="hidden" name="delivery_state" value="Maharashtra" />
                          <input type="hidden" name="delivery_zip" value={this.state.pinTitle} />
                          <input type="hidden" name="delivery_country" value="India" />
                          <input type="hidden" name="delivery_tel" value={this.state.user.contact_no} />
                          <input type="submit" value="Proceed to Checkout" className="btn btn-primary" id="checkoutbtn" />
                        </form></td>
                    </tr>
                    </div>
                    <tr>
                      <td colSpan={2}> <h2> Select Delivery address</h2></td>
                    </tr>
                    <tr>
                      <td colSpan={2}>

                        <form className="form">
                          <div className="form-check">

                            {/* here we are listing address*/}
                            {this.useraddress(this.state.address)}
                          </div>
                        </form>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}> <button className="btn btn-primary" id="addaddress" data-toggle="collapse" data-target="#collapse" aria-expanded="true"
                        aria-controls="collapsePages" > Add new Address </button>
                        <div  >

                          {/* this is the form to add new address */}
                          <div id="collapse" className="collapse" style={{ "margin-top": "5%" }}>
                            <form onSubmit={this.submit}>
                              <div className="form-group">
                                <div className="row">
                                  <div className="col-md-12 div-col-sm-12 col-12">
                                    <label>Street Address</label>
                                    <input type="text" name="street_add" value={this.state.street_add} placeholder="Enter Street Address"
                                      onChange={this.handleChange} className="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="row">
                                  <div className="col-md-12 div-col-sm-12 col-12">
                                    <label>City</label>
                                    <input type="text" name='city' value={this.state.city} placeholder="Enter City"
                                      onChange={this.handleChange} className="form-control" />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="row">
                                  <div className="col-md-12 div-col-sm-12 col-12">
                                    <label>Pin</label>
                                    <input type="text" name="pin" value={this.state.pin} placeholder="Enter PIN"
                                      onChange={this.handleChange} className="form-control" />
                                  </div>
                                </div>
                              </div>
                              <button className="btn btn-outline-primary"  >Submit</button>
                            </form>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper">

          </div>
          </LoadingOverlay>
        </div>
        <Footer />
      </>
    );
  }
}
export default Temp;
