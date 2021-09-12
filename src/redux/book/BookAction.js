import {BUY_BOOK}  from "./bookType";


export const BuyBook=(number=1)=>{

    console.log("running");
    return{
        type:BUY_BOOK,
        num:number
    }
}

