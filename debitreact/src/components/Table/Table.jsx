import React from "react";
import style from "./Table.module.css";

class Table extends React.Component {
  render() {
    return (
      <div>
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
            <td>{this.props.t1}</td>
            <td>{this.props.t2}</td>
            <td>{this.props.p1}</td>
            <td>{this.props.deb}</td>
          </tr>
        </tbody>
      </table>
      </div>
      
    );
  }
  
}

export default Table;
