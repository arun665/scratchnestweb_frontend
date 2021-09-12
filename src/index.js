import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Provider} from 'react-redux';

import store from './redux/store';

import Topheader from "./components/top_header/index";

ReactDOM.render(
  
  <React.StrictMode>
    
    <Router>

      <App />
    </Router>
    
    </React.StrictMode>,

  document.getElementById("root")
);
AOS.init({
  offset: 0,
  duration:1500,
  once:false
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
