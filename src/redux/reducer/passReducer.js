import { ADD_PASSCAT , FETCH_PASSCAT , GET_PASSCAT } from "../passType";


const initialState={
    category:''
    ,status:'',
    allData:[],
    message:'',loader:false
}


const passReducer=(state=initialState,action)=>{


    switch(action.type){
        case ADD_PASSCAT:return{
            ...state,
            category:action.payload,
        message:action.message
        }
        case FETCH_PASSCAT:return{
            ...state,
            allData:action.payload
        }
        case "MESSAGE":return{
            ...state,
            message:action.message,
            loader:false
        }
        case "DISAPPEAR":return{
            ...state,
            message:""
        }
        case "CAPTCHAERROR":return{
            ...state,
            message:"firstly , Proof that you are not a robot"
        }



        default : return state
    }

}



export default passReducer;