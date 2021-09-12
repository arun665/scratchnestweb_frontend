import './video.scss';



import Accrodion from '../accordion';

function Video(){

    return (
<div id="last">
    <div id="div1">
<h1> Know More about AmbiTag</h1>
<p> Here’s a demonstration on how to use the AmbiTag Data Logger.</p>
<iframe id="video"     frameborder="0" 
    marginheight="0" 
    marginwidth="0" 
    width="100%" 
    height="100%" 
    scrolling="auto" src="https://www.youtube.com/embed/lyV6YLzjdBQ">
</iframe>

 
    </div>


    <div id="div2">

<h1>Few more  <span>Details</span> about the product </h1>
<p> Parameters and Technical specifications of our product are listed below.</p>
  


  
    </div>
    

    
</div>
    );
}


export default Video;