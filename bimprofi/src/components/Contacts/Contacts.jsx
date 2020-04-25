import React from "react";
import style from "./Contacts.module.css";
import email from "./../../img/icons/email.png";
import phone from "./../../img/icons/phone.png";
import whatsapp from "./../../img/icons/whatsapp.png";
import telegram from "./../../img/icons/telegram.png";
import EmailForm from "./EmailForm/EmailForm";

export default class Contacts extends React.Component {
  render() {
    return (
      <div>
        <div className={style.emlfrm}>
          <EmailForm />
        </div>
        <div className={style.cntcts}>
          <h3>Контакты:</h3>
          <div className={style.mssngrs}>
            <p>
              <a className="mailto" href="mailto:bimprofi2018@gmail.com">
                <img src={email} />
                <span>Напишите нам на email</span>
              </a>
            </p>
            <p>
              <a href="tel:+79377735590">
                <img src={phone} />
                <span>Позвоните нам</span>
              </a>
            </p>
            <p>
              <a href="https://wa.me/79377735590">
                <img src={whatsapp} />
                <span>WhatsApp</span>
              </a>
            </p>
            <p>
              <a href="tg://resolve?domain=79377735590">
                <img src={telegram} />
                <span>Telegram</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
