import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect,
  useHistory,
} from "react-router-dom";
import HomeSector from "./components/HomeSectors/HomeSector.tsx";

import React, { useEffect, useState } from "react";
import Topheader from "./components/top_header";

import Splashscreen from "./components/Splash Screen/Splashscreen";

import DataLoggerSec from "./components/Sector/Logger/DataLogger_sec";
import EducationSec from "./components/Sector/Education/Education";

import BeaconSec from "./components/Sector/Beacon/Beacon";

import RfidSec from './components/Sector/RFID/Rfid';
import Cart from './components/Cart/temp';
import Temp2 from './components/Cart/temp';

import Dataloggern from "./components/Products/Dataloggern/Dataloggern";

import Twoport_Rfid from "./components/Products/Rfid/twoport/Rfidproduct2";
import OnePort_Rfid from "./components/Products/Rfid/oneport/Rfidproduct2";
import Beacon_product from "./components/Products/Beacon/TrackingBeacon/TrackingBeacon/Rfidproduct2";
import CircularAntenna from './components/Products/Antenna/CircularAntenna/Rfidproduct2';
import LinearAntenna from './components/Products/Antenna/LinearAntenna/Rfidproduct2';

import FixedReader_Two from "./components/Products/Rfid/fixedReader2/Rfidproduct2";
import Error from './components/Error/error';
import Register from './components/Registration/Register.js';
import TempRegister from './components/Registration/code';
import Profile from './components/Profile/profile';
import FixedReader_Four from "./components/Products/Rfid/fixedReader4/Rfidproduct2";

import Login from "./components/Login/Login";
import NewLogin from "./components/NewUserLogin/Login";

 import {Provider} from 'react-redux';
 import Topheader2 from "./components/top_header/index2";


import store from './redux/store';
import Getdetails from './components/getDetails/GetDetails';
import Temp from './components/temp/temp'
import Confirmation from './components/orderConfirmation/confirmation';
import About from './components/About/About2';
import Contact from './components/Contact/Contact.js';
import Support from './components/Support/Support';
import Order_failure from './components/order_failure/confirmation';
import GetDetails from "./components/getDetails/GetDetails";
function App() {
  
  const [loading, setLoading] = useState(true);
  const reload = () => window.location.reload();
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);




/*  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    console.log("USER IS>>", user);

    return () => {
      //cleanup once logout
      unsubscribe();
    };
  }, []);

*/

  return (
    <>
       <Provider store={store}>
      <div className="App" >
        {loading == true ? (
          <Splashscreen />
        ) : (
          <Router>
        
            <Switch>
              <Route component={HomeSector} exact path="/" />
              <Route component={DataLoggerSec} exact path="/sector/datalogger" />
              <Route component={RfidSec} path="/sector/RFID" exact/>
              <Route component={Register} path="/register" exact/>
              <Route component={Login} path="/login" exact/>
              <Route component={NewLogin} path="/new_login" exact/>
              <Route component={About} path="/about" exact/>
              <Route component={Contact} path="/contact" exact/>
              <Route component={Support} path="/support" exact/>
              <Route component={Profile} path="/profile" exact/>
              <Route component={GetDetails} path="/get_details" exact/>
            
              <Route component={Confirmation} path="/order_confirmation" exact/>
              <Route component={Order_failure} path="/order_failure" exact/>
              
              <Route component={TempRegister} path="/register2" exact/>
              
              
              <Route component={EducationSec} path="/sector/Education" exact/>
              
              <Route component={Cart} path="/cart" exact/>
              <Route component={Temp2} path="/temp2" exact/>
              
              <Route component={Temp} path="/temp" exact/>
              
              <Route component={Dataloggern} path="/products/logger" exact/>
              <Route component={OnePort_Rfid} path="/products/Rfid/oneport" exact/>
              <Route component={Twoport_Rfid} path="/products/Rfid/twoport" exact/>
              <Route component={FixedReader_Two} path="/products/Rfid/fixedReader_Twoport" exact />
              <Route component={FixedReader_Four} path="/products/Rfid/fixedReader_Fourport" exact/>
              <Route component={Beacon_product} path="/products/Beacon" exact/>
              <Route component={LinearAntenna} path="/products/LinearAntenna" exact/>
              
              <Route component={CircularAntenna} path="/products/CircularAntenna" exact/>
              
              <Route component={BeaconSec} path="/sector/Beacon" exact/>
              <Route component={Error} path="/error"/>
              <Redirect to="/error"/>
            </Switch>
          </Router>
        )}
      </div>
      </Provider>
    </>
  );
}

export default App;
