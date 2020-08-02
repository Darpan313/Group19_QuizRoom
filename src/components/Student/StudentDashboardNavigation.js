import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../context/user";
import { useHistory } from "react-router-dom";

export default function StudentDashboardNavigation() {
  const history = useHistory();
  const { user, userLogout } = React.useContext(UserContext);
  const handleLogout = () => {
    userLogout();
    history.push("/");
  };
  return (
    <Navbar collapseSelect bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <img src={require("../../assets/logo.png")} width="30" height="30" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/StudentDashboard">Dashboard</Nav.Link>
          <Nav.Link href="/StudentClassroom">Classrooms</Nav.Link>
          <Nav.Link href="/StudentQuizzes">Quizzes</Nav.Link>
          <Nav.Link href="/faqs">Help</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <NavDropdown title="My Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/editprofile">
              Edit profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
