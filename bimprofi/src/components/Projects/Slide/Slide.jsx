import React, { Component } from "react";
import style from "./Slide.module.css";

class Slide extends Component {
  render() {
    return (
      <div className={style.slide}>
        <div className={style.head}>
          
          <h6>
            Ознакомьтесь с примерами наших работ, увеличивая и листая рисунки
          </h6>
        </div>
        <div className={style.exam}></div>
        <p>Проект отпления частного дома 200 кв.м.</p>
        <div className={style.exam}></div>
        <div className={style.exam}></div>
        <div className={style.exam}></div>
        <div className={style.info}></div>
      </div>
    );
  }
}

export default Slide;
