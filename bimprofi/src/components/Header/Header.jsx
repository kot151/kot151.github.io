import React, { Component } from "react";
import style from "./Header.module.css";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";

export default class Header extends Component {
  render() {
    return (
      <div className={style.hdr}>
        <Logo />
        <Menu />
      </div>
    );
  }
}
