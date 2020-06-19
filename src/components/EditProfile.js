import React, { Component } from "react";
import EditList from "./EditList";
import Editform from "./EditForm";
export default class EditProfile extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="column mx-5">
            <EditList />
          </div>
          <div className="column">
            <Editform />
          </div>
        </div>
      </div>
    );
  }
}
