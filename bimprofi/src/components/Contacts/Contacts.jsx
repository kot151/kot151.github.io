import React from "react";
import style from "./Contacts.module.css";
import email from "./../../img/icons/email.png";
import phone from "./../../img/icons/phone.png";
import whatsapp from "./../../img/icons/whatsapp.png";
import telegram from "./../../img/icons/telegram.png";

class About extends React.Component {
  render() {
    return (
      <div className={style.cntcts}>
        <p>Контакты:</p>
        <p>
          <img src={email} /> email
        </p>
        <p>
          <img src={phone} /> phone
        </p>
        <p>
          <img src={whatsapp} /> WhatsApp
        </p>
        <p>
          <img src={telegram} /> Telegram
        </p>
      </div>
    );
  }
}

export default About;
