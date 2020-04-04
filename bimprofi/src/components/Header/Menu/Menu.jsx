import React from "react";
import style from "./Menu.module.css";
import {NavLink} from 'react-router-dom';
import menuIcon from "./../../../img/icons/menu.png";
import close from "./../../../img/icons/close.png";


class Menu extends React.Component {
  render() {
    return (
      <div className={style.menu}>
        <NavLink className={style.nav} to="/home">
          Главная
        </NavLink>
        <NavLink className={style.nav} to="/projects">
          Наши работы
        </NavLink>
        <NavLink className={style.nav} to="/price">
          Прайс
        </NavLink>
        <NavLink className={style.nav} to="/contacts">
          Контакты
        </NavLink>
        <img src={menuIcon} className={style.menuicon}/>
        <img src={close} className={style.close}/>
      </div>
    );
  }
}

export default Menu;
