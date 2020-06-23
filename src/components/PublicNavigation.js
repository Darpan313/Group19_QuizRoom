import React, { Component } from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import Login from "./Login";

class PublicNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, setModalShow: false };
  }
  render() {
    var url = require(`../assets/logo.png`);
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/">
          <img src={require("../assets/logo.png")} width="30" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/faqs">FAQ</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default PublicNavigation;
