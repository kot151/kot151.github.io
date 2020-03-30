import React from "react";
import style from "./MenuSmall.module.css";
import menuSmall from "./../../../img/icons/menuSmall.png";

class Menu extends React.Component {
  render() {
    return (
      <div className={style.menuSmall}>
        <img className={style.menuIcon} src={menuSmall} />
      </div>
    );
  }
}

export default Menu;
