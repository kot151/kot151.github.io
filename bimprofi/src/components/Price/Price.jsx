import React, {Component} from "react";
import style from "./Price.module.css";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Price extends Component {
  render() {
    return (
      <div className={style.prc}>
        <Button variant="primary">Price</Button>
      </div>
    );
  }
}

export default Price;
