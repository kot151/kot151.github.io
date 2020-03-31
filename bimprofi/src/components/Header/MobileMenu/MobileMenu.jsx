import React from "react";
import style from "./MobileMenu.module.css";
import {NavLink} from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <div className={style.mobilemenu}>
        <NavLink className={style.mobnav} to="/home">
          Главная m
        </NavLink>
        <NavLink className={style.mobnav} to="/projects">
          Наши работы
        </NavLink>
        <NavLink className={style.mobnav} to="/price">
          Прайс
        </NavLink>
        <NavLink className={style.mobnav} to="/contacts">
          Контакты
        </NavLink>
      </div>
    );
  }
}

export default Menu;
