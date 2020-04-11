import React, { Component } from "react";
import AlertDialog from "./Dialog/AlertDialog";
import style from "./Slide2.module.css";
import support from "./../../../../img/icons/support.png";
import pc from "./../../../../img/icons/pc.png";
import dollar from "./../../../../img/icons/dollar.png";
import bitcoin from "./../../../../img/icons/bitcoin.png";
import connect from "./../../../../img/icons/connect.png";
import freelance from "./../../../../img/icons/freelance.png";

class Slide2 extends React.Component {
  render() {
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
            <AlertDialog
              title="Опытные проектировщики"
              text="Вашим проектом займутся опытные проектировщики со высшим образованием. У каждого из них сотни удачных проектов за спиной."
            />
          </div>
          <div className={style.pic}>
            <img className={style.img} src={pc} />
            <p>Современное ПО</p>
            <AlertDialog
              title="Современное ПО"
              text="В работе используется современное специализированное программное обеспечение. Также мы выдаём и весь исходный материал."
            />
          </div>
          <div className={style.pic}>
            <img className={style.img} src={dollar} />
            <p>Конкурентные цены</p>
            
          </div>
          <div className={style.pic}>
            <img className={style.img} src={bitcoin} />
            <p>Любые формы оплаты</p>
            
          </div>
          <div className={style.pic}>
            <img className={style.img} src={connect} />
            <p>Всегда на связи: 24/7</p>
            
          </div>
          <div className={style.pic}>
            <img className={style.img} src={freelance} />
            <p>Удаленная работа</p>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Slide2;
