import React from "react";
import style from "./Table.module.css";
import { t1, t2, p1, deb } from "./../Buttons/Buttons";

class Table extends React.Component {
  render() {
    return (
      <table className={style.t}>
        <thead>
          <tr>
            <td>Время 1</td>
            <td>Время 2</td>
            <td>Показание</td>
            <td>Ответ</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t1}</td>
            <td>{t2}</td>
            <td>{p1}</td>
            <td>{deb}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Table;
