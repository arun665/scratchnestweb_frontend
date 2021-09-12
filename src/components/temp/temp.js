import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';

import ReactDOM from 'react-dom';

class Temp extends React.Component {
  state = {
    street_add:'',
    city:'',
    pin:'',
    user: [],
    prods: [],
    total: [],
    street_addTitle: [],
    cityTitle: [],
    pinTitle: [],
    response:[],
    address: []
  };


handleChange=({target})=>{
    const {name,value} = target;
    this.setState({  [name]:value });
}
componentDidMount=()=>{
    this.getproduct();
}

onChange = i => {
    const street_add = this.state.address[i].street_add;
    const city = this.state.address[i].city;
    const pin = this.state.address[i].pin;
    this.setState({
      street_addTitle: street_add,
      cityTitle: city,
      pinTitle: pin,
      checked: i
  });
};

submit=(e)=>{
    e.preventDefault();
    const payload={
      street_add:this.state.street_add,
      city:this.state.city,
      pin:this.state.pin
};

axios({
      url:'http://localhost:5000/do-addAddress',
      method:'POST',
      data:payload
    }).then(()=>{
      console.log('Data sent');
      this.resetUserInputs();
      this.getproduct();
        }).catch((err)=>{console.log(err);
        });
}

resetUserInputs=()=>{
    this.setState({street_add: '',city: '' , pin:''});
}

getproduct = () => {
    axios.get('/cart')
      .then((res) => {
        console.log(res.data.user.cart.totalPrice);
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
      })
      .catch(() => {
        alert('error!!')
      });
}

cartprod = (prods) => {
    if (!prods.length) return null;
    return prods.map((post, index) => (
      <tbody key={index}>
        <tr>
          <td></td>
          <td>{post.product_title}</td>
          <td>{post.price}</td>
          <td>{post.qty}</td>
          <td>{post.price * post.qty}</td>
          <td><form method="POST" action="http://localhost:5000/deleteInCart">
            <input type="hidden" value={post.productId} name="prodId"/>
            <input type="submit" value="Delete" className="btn btn-danger"/></form></td>
        </tr>
      </tbody>));
      };

      useraddress = (address) => {
        if (!address) return null;
        return address.map((add, i) => (
          <div>
            <label key={i}>
              <input type="radio" checked={this.state.checked === i ? true : false} key={i}
                name="deliver" value={this.state.address[i]._id} onChange={this.onChange.bind(this, i)} />
                {add.street_add}<br />{add.city}<br />{add.pin}</label>
          </div>
        ));
      };
   render() {
    return ( 
        <Router>
      <div>
        < div className="cartprod">
          <div className="col-lg-8" >
          <h1>Order Preview</h1>
            <table className="table">
              <thead>
                <tr>
                  <th width="13%"></th>
                  <th width="34%">Product</th>
                  <th width="18%">Price</th>
                  <th width="13%">Quantity</th>
                  <th width="22%">Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              {
                this.cartprod(this.state.prods)
              }
              <tfoot>
                <tr>
                  <td colSpan="4"></td>
                  <td className="text-center">
                    <strong>Total:{this.state.total}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
            <input type="submit" value="Back to Cart" className="btn btn-warning"/>
            </div>
          
            
        <div className="col-lg-4">
          <h3><b>Select a delivery address</b></h3>
          {this.useraddress(this.state.address)}
          <button data-toggle="collapse" data-target="#collapse" aria-expanded="true"
           aria-controls="collapsePages" >Add Address</button>
          <div id="collapse" className="collapse" >
          <form onSubmit={this.submit}>
                    <div className="form-group">
                    <div className="row">
                        <div className="col-lg-8">
                        <label>Street Address</label>
                        <input type="text" name="street_add" value={this.state.street_add} placeholder="Enter Street Address" 
                        onChange={this.handleChange} className="form-control" />
                    </div>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="row">
                    <div className="col-lg-8">
                        <label>City</label>
                        <input type="text" name='city' value={this.state.city} placeholder="Enter City"
                        onChange={this.handleChange} className="form-control" />
                    </div>
                    </div>
                    </div>
                    <div className="form-group">
                    <div className="row">
                    <div className="col-lg-8">
                        <label>Pin</label>
                        <input type="text" name="pin" value={this.state.pin} placeholder="Enter PIN"
                        onChange={this.handleChange} className="form-control" />
                    </div>
                    </div>
                    </div>
                    <button>Submit</button>
                </form>
          </div>
          
          <div>
            </div>
            <br/>
        <div className="wrapper"> 
          <form method="POST" name="customerData" action="http://localhost:5000/ccavRequestHandler">
            <input type="hidden" name="merchant_id" id="merchant_id" value="271474" />
            <input type="hidden" name="order_id" value="SNORD1234" />
            <input type="hidden" name="currency" value="INR" />
            <input type="hidden" name="amount" value="1" />
            <input type="hidden" name="redirect_url"
              value="http://localhost:5000/ccavResponseHandler" />
            <input type="hidden" name="cancel_url"
              value="http://localhost:5000/ccavResponseHandler" />
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
            <input type="hidden" name="delivery_name" value="Sam" />
            <input type="hidden" name="delivery_address"
					value="Vile Parle" />
          <input type="hidden" name="delivery_city" value="Mumbai" />
          <input type="hidden" name="delivery_state" value="Maharashtra" />
          <input type="hidden" name="delivery_zip" value={this.state.pinTitle} />
          <input type="hidden" name="delivery_country" value="India" />
          <input type="hidden" name="delivery_tel" value="0123456789" />
            <input type="submit" value="Checkout" className="btn btn-success"/>
          </form>
        </div>
      </div>
      </div>
      </div>
    </Router>
    );
  }
}
export default Temp;