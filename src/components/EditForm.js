import React, { Component } from "react";
import { Form, Image, Col, Button } from "react-bootstrap";

export default class EditForm extends Component {
  render() {
    var url = require(`../assets/profile.jpg`);
    const imageStyle = {
      width: "171px",
      height: "171px",
    };
    return (
      <div class="card text-center editform">
        <div class="card-header">Profile</div>
        <div class="card-body">
          <div className="row mx-5">
            <div className="column">
              <Image src={url} roundedCircle style={imageStyle} />
              <h5 class="card-title mt-2">Darpan Patel</h5>
            </div>
            <div className="column ml-5">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="patel.darpan@dal.ca"
                      disabled
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter Username" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridWeblink">
                    <Form.Label>Website</Form.Label>
                    <Form.Control placeholder="Website" />
                  </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                  Update Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
