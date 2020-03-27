import React, { Component } from "react";
import style from "./Slide2.module.css";
import { Button } from "react-bootstrap";

class Slide2 extends Component {
  render() {
    return (
      <div className={style.slide2}>
        <div className={style.info}></div>
        <div className={style.info}></div>
        <div className={style.info}></div>
      </div>
    );
  }
}

export default Slide2;
