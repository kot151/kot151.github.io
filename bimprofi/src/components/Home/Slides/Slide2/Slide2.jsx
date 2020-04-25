import React, { Component } from "react";
import AlertDialog from "./Dialog/AlertDialog";
import style from "./Slide2.module.css";
import support from "./../../../../img/icons/support.png";
import pc from "./../../../../img/icons/pc.png";
import dollar from "./../../../../img/icons/dollar.png";
import bitcoin from "./../../../../img/icons/bitcoin.png";
import connect from "./../../../../img/icons/connect.png";
import freelance from "./../../../../img/icons/freelance.png";

export default class Slide2 extends React.Component {
  render() {
    let dial = [
      {
        title: "Опытные проектировщики",
        text:
          "Вашим проектом займутся опытные проектировщики со высшим образованием. У каждого из них сотни удачных проектов за спиной.",
      },
      {
        title: "Современное ПО",
        text:
          "В работе используется современное специализированное программное обеспечение. Также мы выдаём и весь исходный материал.",
      },
      {
        title: "Конкурентные цены",
        text:
          "Хороший продукт не обязательно должен стоить дороого. Цена всегда обговариваема и всегда можно найти компромисс.",
      },
      {
        title: "Любые формы оплаты",
        text:
          "Оплату можно производить любым удобным для вас методом. Перевод на карту, 'перечисление', bitcoin'ы...",
      },
      {
        title: "Всегда на связи",
        text:
          "Возможность связаться в любое время суток. Срочные изменения в проекте? Вам ответят в ближайшее время.",
      },
      {
        title: "Удалённая работа",
        text:
          "Вам не надо выходить из дома для заказа проекта, всё делается удаленно. Экономия времени и средств.",
      },
    ];
    return (
      <div className={style.slide2}>
        <div className={style.head}>
          <h4>Почему мы?</h4>
          <h5>Наши преимущества</h5>
        </div>
        <div className={style.info}>
          <div className={style.pic}>
            <img className={style.img} src={support} />
            <p>Опытные проектировщики</p>
            <AlertDialog title={dial[0].title} text={dial[0].text} />
          </div>
          <div className={style.pic}>
            <img className={style.img} src={pc} />
            <p>Современное ПО</p>
            <AlertDialog title={dial[1].title} text={dial[1].text} />
          </div>
          <div className={style.pic}>
            <img className={style.img} src={dollar} />
            <p>Конкурентные цены</p>
            <AlertDialog title={dial[2].title} text={dial[2].text} />
          </div>
          <div className={style.pic}>
            <img className={style.img} src={bitcoin} />
            <p>Любые формы оплаты</p>
            <AlertDialog title={dial[3].title} text={dial[3].text} />
          </div>
          <div className={style.pic}>
            <img className={style.img} src={connect} />
            <p>Всегда на связи: 24/7</p>
            <AlertDialog title={dial[4].title} text={dial[4].text} />
          </div>
          <div className={style.pic}>
            <img className={style.img} src={freelance} />
            <p>Удаленная работа</p>
            <AlertDialog title={dial[5].title} text={dial[5].text} />
          </div>
        </div>
      </div>
    );
  }
}


