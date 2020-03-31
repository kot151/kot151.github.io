import React, { Component } from "react";
import style from "./Header.module.css";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import MenuIcon from "./MenuIcon/MenuIcon";
import MobileMenu from "./MobileMenu/MobileMenu";

class Header extends Component {
  render() {
    return (
      <div className={style.hdr}>
        <Logo />
        <MenuIcon />
        
        <Menu />
      </div>
    );
  }
}

export default Header;
