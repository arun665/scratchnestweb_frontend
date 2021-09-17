import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React, { ReactNode, useEffect, useState , useContext  , createContext} from "react";
import "./topHeader2.scss";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import Sidemenu from "../SideMenu/Sidemenu";

import { Button } from "@material-ui/core";
import PersonModal from "./PersonModal";
import {UserContext}  from '../../App';
import LoggedIn from './Loggedin';
import LoggedOut from './LoggedOut';
// interface UserType {
//  user:Array<number|string>
// }

function Topheader(props: any) {
  var history=useHistory();

  const {state,dispatch}= useContext(UserContext);
  var [cancel,setCancel]=useState(true);
  var [login_done,setLogin]=useState(true);
  var [login_done2,setLogin2]=useState(true);
 
 // const [{ user,basket }] = useStateValue();
 // const [open, setOpen] = useState(false);
 // const history = useHistory();
 // const [hover, setHover] = useState(false);
 // var [displayname, setDisplayame] = useState("");

 // useEffect(() => {
 //   setDisplayame(user?.displayName);
//  }, [user]);

 // const onHover = () => {
 ///   setHover(true);
 // };

  //const onLeave = () => {
 //   setHover(false);
 // };

 // const Signin = () => {
 //   if (user) {
 //     auth.signOut();
  //  } else history.push("/account");
 // };

 $(document).ready(function(){
  $('.dropdown a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});




 // console.log(user);
 const [open, setOpen] = useState(false);
  
  return (

    <div className="topheader2">

<div style={{display:state?'block':'none'}}>

<LoggedIn/>
</div>

<div style={{display:!state?'block':'none'}}>

<LoggedOut/>
</div>

  
    </div>

  );
}

export default Topheader;
