import React, { Component } from "react";
import style from "./Slide1.module.css";
import { Button } from "react-bootstrap";
import img1 from "./../../../../img/img1.png";

class Slide1 extends Component {
  render() {
    return (
      <div className={style.slide1}>
        <div className={style.text}>
          <p className={style.txt1}>Закажите проект отопления на BIMпрофи.ru</p>
          <p className={style.txt2}>
            Получите качественный продукт, соответствующий всем нормативам, за
            короткие сроки
          </p>
          <Button className={style.button} variant="primary">
            Напишите нам
          </Button>
        </div>
        <div className={style.image}>
          <img className={style.img1} src={img1} />
        </div>
      </div>
    );
  }
}

export default Slide1;
