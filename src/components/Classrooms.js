import React, { Component } from "react";
import Classrommlist from "./Classrommlist";
import SearchClasses from "./SearchClasses";
export default class Classrooms extends Component {
  render() {
    return (
      <div className="container">
        <SearchClasses />
        <Classrommlist />
      </div>
    );
  }
}
