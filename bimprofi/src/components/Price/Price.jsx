import React, { Component } from "react";
import style from "./Price.module.css";

export default class Price extends Component {
  render() {
    let rub = <sub>руб.*</sub>;
    return (
      <div className={style.prc}>
        <h3>Прайс</h3>
        <div className={style.info}>
          <div className={style.p}>
            <p className={style.head}>Отопление</p>
            <p className={style.pr}>80{rub}</p>
          </div>
          <div className={style.p}>
            <p className={style.head}>Вентиляция</p>
            <p className={style.pr}>90{rub}</p>
          </div>
          <div className={style.p}>
            <p className={style.head}>Водоснабжение</p>
            <p className={style.pr}>100{rub}</p>
          </div>
          <div className={style.p}>
            <p className={style.head}>Канализация</p>
            <p className={style.pr}>100{rub}</p>
          </div>
        </div>
        <p className={style.ofert}>
          * - не является офертой. Для уточнения стоимости обратитесь по
          кантактам
        </p>
      </div>
    );
  }
}
