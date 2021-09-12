import Topheader from '../top_header/index';
import Footer from '../Footer/footer2';
import { Profiler, useState } from 'react';
import Man from './man.jpg';
import './profile.scss';
import axios from 'axios';
import React from 'react';
import Beacon from './beacon2.png';
class Profile extends React.Component {

  state = {
    loader: true,
    user: [],
    current_order:[],
    previous_order:[],
    //total: [],
    street_add: '',
    city: '',
    pin: '',
    number:''
  };
  componentDidMount = () => {
    //console.log(new URLSearchParams(this.props.location.search).get("amount"));
    this.getDetail();
  }

  getDetail = () => {
    axios({
      url: 'http://localhost:5000/orders',
      method: 'GET',
      withCredentials: true
      //data: payload
    })
      .then((res) => {
        console.log(res.data.user.address[0].pin);
        const user = res.data.user;
        const current_order = res.data.user.orders.current_order;
        const previous_order = res.data.user.orders.previous_order;
        //const total = res.data.user.cart.totalPrice;
        const address = res.data.user.address;
        this.setState({ user: user });
        this.setState({ current_order: current_order });
        this.setState({ previous_order: previous_order });
        //this.setState({ total: total });
        this.setState({ street_add: this.state.user.address[0].street_add })
        this.setState({ city: this.state.user.address[0].city })
        this.setState({ pin: this.state.user.address[0].pin })

      }).catch((err) => {
        console.log(err);

      });
  }

  currentOrder = (current_order) => {
      if (current_order.length) {
      return current_order.products.map((post,i) => (
         <div className="row" id="items" key={i}>
            <div className="col-sm-4 col-md-4 col-5">
              <img src={Beacon} />
            </div>
            <div className="col-sm-8 col-md-8 col-7">
              <h1> {post.product_title} </h1>
              <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div id="desktop">
                <div className="form-group- form-inline" >
                  <label id="itemquantity">Qty:</label>
                 {post.qty}
                </div>
                <table>
                  <tr>
                    <td>
                      <h2>Price: <span>( <del>₹ {post.price + (post.price / 10)} </del>) </span>  <span id="span2">₹ {post.price} </span>  </h2>
                    </td>

                    <td>

                      
      {/*---------------------- fill the cart status Delivered or not ---------------------*/}
    <span className="badge badge-success" id="delete" style={{"fontSize":"20px"}}>Deliver</span>
    
      {/*------------------------------------------*/}
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
     {post.qty}
    </div>
    </td>
    <td>

      {/*---------------------- fill the cart status Delivered or not ---------------------*/}
      
    <span className="badge badge-primary" id="delete"> Delivered</span>


      {/*----------------------  ---------------------*/}
      
    </td>
    </tr>
        <tr>
            <td colSpan={2}>
    <h2>Price: <span>( <del>₹ {post.price + (post.price / 10)}</del>) </span>  <span id="span2">₹  {post.price}</span>  </h2>
    </td>   
    </tr>
    </table>
    </div>
    </div>
          </div>))
    }
  }


  prevOrder = (previous_order) => {
    if (previous_order.length) {
    return previous_order.products.map((post,i) => (
      post.status==true ?
        (
       <div className="row" id="items" key={i}>
          <div className="col-sm-4 col-md-4 col-5">
            <img src={Beacon} />
          </div>
          <div className="col-sm-8 col-md-8 col-7">
            <h1> {post.product_title} </h1>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div id="desktop">
              <div className="form-group- form-inline" >
                <label id="itemquantity">Qty:</label>
               {post.qty}
              </div>
              <table>
                <tr>
                  <td>
                    <h2>Price: <span>( <del>₹ {post.price + (post.price / 10)} </del>) </span>  <span id="span2">₹ {post.price} </span>  </h2>
                  </td>
                  <td>
                    
      {/*---------------------- fill the cart status Delivered or not ---------------------*/}
    <span className="badge badge-success" id="delete" style={{"fontSize":"20px"}}> Deliver</span>
    
      {/*-------------------------------------------*/}
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
   {post.qty}
  </div>
  </td>
  <td>   
    
      {/*---------------------- fill the cart status Delivered or not ---------------------*/}
  <span className="badge badge-success" id="delete"> Delivered</span>
    
      {/*---------------------------------------*/}
  </td>
  </tr>
      <tr>
          <td colSpan={2}>
  <h2>Price: <span>( <del>₹ {post.price + (post.price / 10)}</del>) </span>  <span id="span2">₹  {post.price}</span>  </h2>
  </td>   
  </tr>
  </table>
  </div>
  </div>
        </div>):null)
       )
    }else{
      return <p>No orders</p>
    }
  }

  
  render() {
    return (
      <>
        <Topheader />
        <div id="profile">

          <div className="container-fluid out">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-12 " >

                <div id="left">
                  {/* -------------------------------------------------Image will be added here-------------------------------*/}
                  <img src={Man} className="rounded-circle" id="image" />
                  <br></br>    <br></br>


                  <div id="data">
                    <h1> {this.state.user.name} </h1>

                    <h2><i class="fa fa-map-marker"></i>  State , India </h2>

                    <hr></hr>
                    <h3> <i class="fa fa-phone"></i>{this.state.user.contact_no}</h3>

                    <h4><i class="fa fa-envelope"></i>{this.state.user.email}</h4>

                    <hr></hr>
                    <h5> My Address:</h5>
                    <h5>{this.state.street_add}</h5>
                    <h5> {this.state.city}</h5>
                    <h5> PinCode-{this.state.pin}</h5>
                    <br></br>
                    <br></br>
                    <button className="btn btn-primary">Edit Profile Details</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-md-8 col-12 right">

                <div id="list">

                  <div id="heading">
                    <h1> Your Profile </h1>
                  </div>
                  <br></br>

                  
                  <div id="heading">
                  <p> Your Orders ({this.state.current_order.length}) </p>
                  </div>
                  {/* sample code for item , later we will add an array here  ------------------------------------------------------------------*/}

                  {/*<div className="row" id="items">

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
<td>

</td>
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
    <br></br>*/}
                  {/*<button className="btn btn-outline-primary" onClick={ this.setState({display:true})}>Show More</button>*/}


                  {this.currentOrder(this.state.current_order)}
                  {/* saple item fo product end herer ------------------------------------------------------------------*/}


                </div>




                {/* This is the section for previous orders ------------------------------------------------------------------*/}

                <div id="list">


                  <br></br>

                  <div id="heading">
                    <p> Previous Orders ({this.state.previous_order.length})</p>
                  </div>
                  {/* sample code for item , later we will add an array here  ------------------------------------------------------------------*/}
                  {this.prevOrder(this.state.previous_order)}
                  {/*<div className="row" id="items">

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
                            <td>

                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <h2>Price: <span>( <del>₹ 2620 </del>) </span>  <span id="span2">₹ 2629</span>  </h2>
                            </td>

                          </tr>
                        </table>
                      </div>
                    </div>

  </div>*/}
                  <br></br>
                  {/*<button className="btn btn-outline-primary" onClick={ this.setState({display2:!this.state.display2})}>Show More</button>*/}

                  {/* sample item fo product end herer ------------------------------------------------------------------*/}


                </div>










              </div>

            </div>
          </div>

        </div>


        <Footer />
      </>
    );
  }
}


export default Profile;