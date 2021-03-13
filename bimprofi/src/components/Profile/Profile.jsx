import React, { Component } from "react";
import style from "./Profile.module.css";


class Profile extends Component {
  render() {
    return (
      <div className={style.prf}>
       <h3>Примеры наших работ</h3> 
        <Slide />
      </div>
    );
  }
}

export default Projects;
