import React, { Component } from "react";
import EditList from "./EditList";
import Editform from "./EditForm";
import { Nav, Row, Col, Tab } from "react-bootstrap";
export default class EditProfile extends Component {
  render() {
    return (
      // <div className="container">
      //   <div className="row mt-5">
      //     <div className="column mx-5">
      //       <EditList />
      //     </div>
      //     <div className="column">
      //       <Editform />
      //     </div>
      //   </div>
      // </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="mt-4">
          <Col sm={3}>
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Change Password</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Delete Account</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Editform />
              </Tab.Pane>
              <Tab.Pane eventKey="second">{/* <Sonnet /> */}</Tab.Pane>
              <Tab.Pane eventKey="third">{/* <Sonnet /> */}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
