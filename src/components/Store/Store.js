import Topheader from "../top_header";

import Footer from '../Footer/footer2';
import './store.scss';
import Items from './items';
import OurItems from './Ouritems';
import {useState , useEffect} from 'react';

function Store(){

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Store";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      }, [])
    
    var [search,setSearch]=useState(false);
    var [text,setText]=useState('');
    var [found,setFound]=useState(false);
const ShowAll=()=>{
    
    setSearch(false);
    setText('');
    
}
const handleChange=(x)=>{
setSearch(true);

setText(x);

setFound(false);
}


const Search_Products=OurItems.map((item=>{
    var count=0;

 if(item.Item_name.toLowerCase().indexOf(text.trim().toLowerCase())>=0  ||  item.Item_type.toLowerCase().indexOf(text.trim().toLowerCase())>=0 ){
return(
    <div className="col-sm-6 col-md-4 col-12" data-aos="zoom-out">
        <div id="box">
            <div id="img_div">
                <img src={item.image} id="img"/>
            </div>
    
    <div id="heading2">
    <div className="container-fluid">
    <div className="row row2">
        <div className="col-sm-3 col-md-3 col-3">
            <h2>{item.Item_name}</h2>
        </div>
        <div className="col-sm-1 col-md-1 col-1">
            <div id="line"></div>
        </div>
        <div className="col-sm-7 col-md-7 col-7">
            <h3>{item.Item_type} </h3>
        </div>
    </div>
    
        <div className="row row3">
        <div className="col-sm-12 col-md-12 col-12">
            <p>{item.Description}</p>
        </div>
        <div className="col-sm-12 col-md-12 col-12">
            <h4>₹ {item.price}</h4>
        </div>
        <div className="col-sm-6 col-md-6 col-6" >
        <div class="input-group">
                      
                      <span class="input-group-btn">
                          <button type="button" class="quantity-left-minus btn btn-danger btn-number button1"  data-type="minus" data-field="" >
                          <i class="fa fa-minus" ></i>
                          </button>
                      </span>
                      <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" />
                      <span class="input-group-btn">
                          <button type="button" class="quantity-right-plus btn btn-success btn-number button2" data-type="plus" data-field="">
                          <i class="fa fa-plus" ></i>
                          </button>
                      </span>
                  </div>
        </div>
      
        <div className="col-sm-6 col-md-6 col-6">
        <button className="cart_button button1" >Buy Now</button>
        </div>
        
    
        <div className="col-sm-12 col-md-12 col-12">
        <button className="cart_button button2" ><i class="fa fa-shopping-cart"></i>  Add To Cart</button>
        </div>
    
        <div className="col-sm-12 col-md-12 col-12">
        <button className="cart_button button3" ><i class="fa fa-star"></i>Move to wishlist</button>
        </div>
        
        
    
      </div>
        
    </div>
       
    
    
    
    
    </div>
    
    
        </div>
    </div>
)
 }
 


 


 }



        ) );
    
    



    const Products=Items.map((item)=>(

<div className="col-sm-6 col-md-4 col-12" data-aos="zoom-out">
    <div id="box">
        <div id="img_div">
            <img src={item.image} id="img"/>
        </div>

<div id="heading2">
<div className="container-fluid">
<div className="row row2">
    <div className="col-sm-3 col-md-3 col-3">
        <h2>{item.Item_name}</h2>
    </div>
    <div className="col-sm-1 col-md-1 col-1">
        <div id="line"></div>
    </div>
    <div className="col-sm-7 col-md-7 col-7">
        <h3>{item.Item_type} </h3>
    </div>
</div>

    <div className="row row3">
    <div className="col-sm-12 col-md-12 col-12">
        <p>{item.Description}</p>
    </div>
    <div className="col-sm-12 col-md-12 col-12">
        <h4>₹ {item.price}</h4>
    </div>
    <div className="col-sm-6 col-md-6 col-6" >
    <div class="input-group">
                  
                  <span class="input-group-btn">
                      <button type="button" class="quantity-left-minus btn btn-danger btn-number button1"  data-type="minus" data-field="" >
                      <i class="fa fa-minus" ></i>
                      </button>
                  </span>
                  <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" />
                  <span class="input-group-btn">
                      <button type="button" class="quantity-right-plus btn btn-success btn-number button2" data-type="plus" data-field="">
                      <i class="fa fa-plus" ></i>
                      </button>
                  </span>
              </div>
    </div>
  
    <div className="col-sm-6 col-md-6 col-6">
    <button className="cart_button button1" >Buy Now</button>
    </div>
    

    <div className="col-sm-12 col-md-12 col-12">
    <button className="cart_button button2" ><i class="fa fa-shopping-cart"></i>  Add To Cart</button>
    </div>

    <div className="col-sm-12 col-md-12 col-12">
    <button className="cart_button button3" ><i class="fa fa-star"></i>Move to wishlist</button>
    </div>
    
    

  </div>
    
</div>
   




</div>


    </div>
</div>

    ) );




    const OurProducts=OurItems.map((item)=>(

        <div className="col-sm-6 col-md-4 col-12" data-aos="zoom-out">
            <div id="box">
                <div id="img_div">
                    <img src={item.image} id="img"/>
                </div>
        
        <div id="heading2">
        <div className="container-fluid">
        <div className="row row2">
            <div className="col-sm-3 col-md-3 col-3">
                <h2>{item.Item_name}</h2>
            </div>
            <div className="col-sm-1 col-md-1 col-1">
                <div id="line"></div>
            </div>
            <div className="col-sm-7 col-md-7 col-7">
                <h3>{item.Item_type} </h3>
            </div>
        </div>
        
            <div className="row row3">
            <div className="col-sm-12 col-md-12 col-12">
                <p>{item.Description}</p>
            </div>
            <div className="col-sm-12 col-md-12 col-12">
                <h4>₹ {item.price}</h4>
            </div>
            <div className="col-sm-6 col-md-6 col-6" >
            <div class="input-group">
                          
                          <span class="input-group-btn">
                              <button type="button" class="quantity-left-minus btn btn-danger btn-number button1"  data-type="minus" data-field="" >
                              <i class="fa fa-minus" ></i>
                              </button>
                          </span>
                          <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" />
                          <span class="input-group-btn">
                              <button type="button" class="quantity-right-plus btn btn-success btn-number button2" data-type="plus" data-field="">
                              <i class="fa fa-plus" ></i>
                              </button>
                          </span>
                      </div>
            </div>
          
            <div className="col-sm-6 col-md-6 col-6">
            <button className="cart_button button1" >Buy Now</button>
            </div>
            
        
            <div className="col-sm-12 col-md-12 col-12">
            <button className="cart_button button2" ><i class="fa fa-shopping-cart"></i>  Add To Cart</button>
            </div>
        
            <div className="col-sm-12 col-md-12 col-12">
            <button className="cart_button button3" ><i class="fa fa-star"></i>Move to wishlist</button>
            </div>
            
            
        
          </div>
            
        </div>
           
        
        
        
        
        </div>
        
        
            </div>
        </div>
        
            ) );
        
        





    return(<>
    <Topheader/>
<div id="store">
    <div className="container">
        <div className="row">
<div className="col-sm-8 col-md-6 col-12" id="input">
<input type="text"  placeholder="Search for Products..." onChange={(e)=>{handleChange(e.target.value)}}  value={text}/> 
</div>

</div>
    </div>




    <div className="container-fluid" id="div2" style={{display:search?'block':'none'}}>
    <div className="row">

<div id="heading" className="col-sm-12 col-md-12 col-12">
    <h1> Your Search Results</h1> 
      
</div>



{/*Product code begins here -------------------------------------------------------------------*/}
{Search_Products}
{/*Product code end here -------------------------------------------------------------------*/}

    </div>
</div>

<div className="container">
<button className="btn btn-outline-primary" style={{display:search?'block':'none'}} onClick={ShowAll} >Show All Products </button>
</div>

<div className="container-fluid" id="div2" style={{display:!search?'block':'none'}}>
    <div className="row">

<div id="heading" className="col-sm-12 col-md-12 col-12">
    <h1> Popular Products</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>



{/*Product code begins here -------------------------------------------------------------------*/}
{Products}
{/*Product code end here -------------------------------------------------------------------*/}

    </div>
</div>




<div className="container-fluid" id="div2" style={{display:!search?'block':'none'}}>
    <div className="row">

<div id="heading" className="col-sm-12 col-md-12 col-12">
    <h1> Our Products</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>



{/*Product code begins here -------------------------------------------------------------------*/}
{OurProducts }
{/*Product code end here -------------------------------------------------------------------*/}

    </div>
</div>







     </div>
    
    <Footer/>
     </>
    );
}


export default Store;