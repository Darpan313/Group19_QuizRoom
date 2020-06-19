import React, { Component } from "react";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import Login from "./Login";

class PublicNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, setModalShow: false };
  }
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Quizz room App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/faqs">FAQ</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {/* <Button bsStyle="primary">Login</Button> */}
            {/* <Button variant="primary" onClick={() => setModalShow(true)}>
              Launch vertically centered modal
            </Button>

            <LoginModal show={modalShow} onHide={() => setModalShow(false)} /> */}
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default PublicNavigation;
