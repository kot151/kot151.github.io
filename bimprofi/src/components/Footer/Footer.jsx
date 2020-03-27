import React, { Component } from "react";
import style from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        <span className={style.footerText}>Создание проектов отопления, вентиляции и канализации. <b>BIM</b>
        профи.ru</span>
      </div>
    );
  }
}

export default Footer;
