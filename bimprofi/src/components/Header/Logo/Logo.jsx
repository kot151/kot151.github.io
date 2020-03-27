import React from "react";
import style from "./Logo.module.css";
import logo from './../../../img/logo.png';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src={logo}/>
       
      </div>
    );
  }
}

export default Logo;
