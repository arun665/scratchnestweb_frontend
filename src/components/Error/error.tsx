import './error.scss';
import img from './img.png';
import Topheader from '../top_header/index';
import Footer from '../Footer/footer2';
import {Link} from "react-router-dom";
import {useEffect} from 'react';
function Error(){
    useEffect(() => {
        window.scrollTo(0, 0);  
        document.title="Error:-404"
    
      
      }, [])
    return(<>
    <Topheader/>
<div className="container-fluid error">
<div className="row">
    <div className="col-sm-6 col-md-6 col-12">
<div className="div">
<h2><span> 404 </span><br></br>Oops! <br></br> Something went wrong. </h2><br></br>
<br></br>
<Link to="/">
<button className="btn btn-outline-primary">Go Back</button>
</Link>
</div>

    </div>
    <div className="col-sm-6 col-md-6 col-12">
<img src={img} />
    </div>
    
</div>
</div>
<Footer/>
</>
    );
}

export default Error;