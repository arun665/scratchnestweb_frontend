import { ADD_PASSCAT , FETCH_PASSCAT , GET_PASSCAT  } from "../passType";

const axios = require("axios");

export const Disappear=()=>{
    return{type:"DISAPPEAR"}
}

export const captchaError=()=>{
    return{type:"CAPTCHAERROR"}
}


export const AddPassCat=(username,fullname,contact_no,email,address,city,pincode,password)=>{
  

    return function(dispatch){
    
    var OPTIONS = {
        url: " https://scratchnestserver.herokuapp.com/register/",
        method: "POST",
        data:{username:username,name:fullname,contact_no:contact_no,email:email,profile:"NaN",password:password,street_add:address,city:city,pin:pincode},
        headers: {
            "content-type": "application/json"
        },
        
      };
      
axios(OPTIONS)
.then(res=>{
var result=res.data.message;

if(result=="error occured in sending mail"){
    console.log(res.data.err);
}

dispatch({
type:ADD_PASSCAT,
payload:username,
message:result

})

})
.catch(err=>{
    console.log(err);
})





}

}


/*
export const AddMessage=(Message)=>{
  
    return function(dispatch){
        
    var OPTIONS = {
        url: "http://localhost:3000/",
        method: "POST",
        data:{Message:Message},
        headers: {
            "content-type": "application/json"
        },
        
      };
      
      var temp;
axios(OPTIONS)
.then(res=>{

    console.log(res.data.msg);
    if(res.data.msg == "message sended success"){

dispatch({
    type:"MESSAGE",
    message:"message sended success"

})


    }
    else{

        dispatch({
            type:"MESSAGE",
            message:"message sended success"
        
        })
        

    }


})
.catch(err=>{
    console.log(err);
})


    }
}









export const FetchPassCat=()=>{


    return function(dispatch){

    var OPTIONS = {
        url: "http://localhost:3000/api/",
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
        
      }
      axios(OPTIONS)
      .then(res=>{

      dispatch(GetPassCat(res.data));

      })
      .catch(err=>{
          console.log(err);
      })
      
  
}
  }
  

  
export const GetPassCat=(data)=>{
 
    return {
        type:FETCH_PASSCAT,
        payload:data
    }
  
  }
  */
