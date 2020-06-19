import React, { Component } from "react";

export default class EditList extends Component {
  render() {
    const deleteStyle = {
      color: "red",
    };
    return (
      <div className="card editlist">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a href="/editProfile">Profile</a>
          </li>
          <li className="list-group-item">
            <a href="/changePassword">Change Password</a>
          </li>
          <li className="list-group-item" style={deleteStyle}>
            <a href="/deletePassword">Delete Account</a>
          </li>
        </ul>
      </div>
    );
  }
}
