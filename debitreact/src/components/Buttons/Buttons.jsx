import React from "react";
import style from "./Buttons.module.css";
import Table from "./../Table/Table";
import { time1, time2, pokaz } from "./../Calc/Calc";


let t1 = "";
let t2 = "";
let p1 = "";
let deb = "";

let debit = () => {
 t1 = time1.current.value;
  let tt1 = t1.split(":");
  t2 = time2.current.value;
  let tt2 = t2.split(":");
  p1 = pokaz.current.value;

  let h1 = +tt1[0] * 60 + +tt1[1];
  let h2 = +tt2[0] * 60 + +tt2[1];
  if (h1 > h2) {
    deb = Math.round((1440 * p1) / (1440 - (h1 - h2)));
  } else if (h1 < h2) {
    deb = Math.round((1440 * p1) / (1440 + (h2 - h1)));
  } else {
    deb = p1;
  }
};
class Buttons extends React.Component {
  render() {
    return (
      <div className={style.b}>
        <button onClick={debit}>Расчитать дебит</button>
        <hr />
        <Table t1={t1} t2={t2} p1={p1} deb={deb} />
      </div>
    );
  }
}


export default Buttons;
