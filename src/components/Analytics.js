import React, { Component } from "react";
import ResultList from "./ResultList";
import StackedBar from "./charts/StackedBar";

export default class Analytics extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <ResultList
              data={this.props.location.state["questions"]}
            ></ResultList>
          </div>
          <div className="col-lg-6 ">
            <StackedBar
              data={this.props.location.state["categories"]}
            ></StackedBar>
          </div>
        </div>
      </div>
    );
  }
}
