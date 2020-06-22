import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";

export default function DashboardNavigation() {
  const history = useHistory();
  const { user, userLogout } = React.useContext(UserContext);
  const handleLogout = () => {
    userLogout();
    history.push("/");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Quizz room App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/classrooms">Classrooms</Nav.Link>
          <Nav.Link href="/quizzes">Quizzes</Nav.Link>
          <Nav.Link href="/analytics">Analytics</Nav.Link>
          <NavDropdown title="Help" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">User Manual</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Tutorial</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ml-auto">
          <NavDropdown title="My Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/editprofile">
              Edit profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Notifications
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}