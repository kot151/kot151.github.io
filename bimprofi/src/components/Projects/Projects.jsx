import React, { Component } from "react";
import style from "./Projects.module.css";
import Slide from "./Slide/Slide";

class Projects extends Component {
  render() {
    return (
      <div className={style.prj}>
        <Slide />
      </div>
    );
  }
}

export default Projects;
