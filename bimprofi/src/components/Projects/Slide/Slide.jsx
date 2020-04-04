import React, { Component } from "react";
import style from "./Slide.module.css";
import screen1 from "./../../../img/screen1.png";
import screen2 from "./../../../img/screen2.png";
import screen3 from "./../../../img/screen3.png";
import screen4 from "./../../../img/screen4.png";
import screen5 from "./../../../img/screen5.png";

class Slide extends Component {
  render() {
    return (
      <div className={style.slide}>
        <div className={style.head}>
          <h4>Примеры наших работ</h4>
          <h6>Ознакомьтесь с примерами наших работ, увеличивая и листая рисунки</h6>
        </div>
        <div className={style.info}>
          <div className={style.pic}>
            <img className={style.img} src={screen1} />
          </div>
          <div className={style.pic}>
            <img className={style.img} src={screen2} />
          </div>
          <div className={style.pic}>
            <img className={style.img} src={screen3} />
          </div>
          <div className={style.pic}>
            <img className={style.img} src={screen4} />
          </div>
          <div className={style.pic}>
            <img className={style.img} src={screen5} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default Slide;
