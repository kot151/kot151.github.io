import React from "react";
import style from "./MenuIcon.module.css";
import menuIcon from "./../../../img/icons/menuSmall.png";

class Menu extends React.Component {
  render() {
    return (
      <div className={style.menuSmall}>
        <img className={style.menuIcon} src={menuIcon} />
      </div>
    );
  }
}

export default Menu;
