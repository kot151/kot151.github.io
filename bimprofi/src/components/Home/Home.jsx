import React, { Component } from "react";
import style from "./Home.module.css";
import Slide1 from "./Slides/Slide1/Slide1";
import Slide2 from "./Slides/Slide2/Slide2";


import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    return (
      <div className={style.hm}>
        <Slide1 />
        <Slide2 />
      </div>
    );
  }
}

export default Home;
