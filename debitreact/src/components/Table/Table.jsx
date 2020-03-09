import React from "react";
import style from "./Table.module.css";
import { t1 } from "./../Buttons/Buttons";
import { t2 } from "./../Buttons/Buttons";
import { p1 } from "./../Buttons/Buttons";
import { deb } from "./../Buttons/Buttons";

const Table = () => {
  return (
    <table className={style.t}>
      <thead>
        <tr id="tabliz">
          <td>Время 1</td>
          <td>Время 2</td>
          <td>Показание</td>
          <td>Ответ</td>
        </tr>
      </thead>
      <tbody id="tableBody"></tbody>
    </table>
  );

  
};
export default Table;
