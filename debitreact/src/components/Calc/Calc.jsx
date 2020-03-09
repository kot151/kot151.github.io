import React from "react";
import style from "./Calc.module.css";

const Calc = () => {
  time1 = React.createRef();
  time2 = React.createRef();
  pokaz = React.createRef();

  return (
    <div className={style.p}>
      <hr />
      <p>Введите в нижние поля данные по скважине:</p>
      <p>
        Введите показание счетчика:
        <input type="number" id="pokaz" ref={pokaz} />
      </p>
      <p>
        Введите время установки счетчика:
        <input type="time" id="time1" ref={time1} />
      </p>
      <p>
        Введите время снятия показаний:
        <input type="time" id="time2" ref={time2} />
      </p>
      <hr />
    </div>
  );
};

export let time1; 
export let time2; 
export let pokaz; 

export default Calc;
