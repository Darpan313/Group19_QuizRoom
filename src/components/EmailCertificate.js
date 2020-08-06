import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class EmailCertificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHide: false,
      email: "",
    };
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  handleUserInput = (e) => {
    const email = e.target.email;
  };

  sendEmail = (e) => {
    e.preventDefault();

    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    //     content: base64
    // });

    // client.send(message, function (err, message) {
    //     console.log(err || message);
    // });

  //   var template_params = {
  //     "reply_to": "reply_to_value",
  //     "from_name": "from_name_value",
  //     "to_name": "to_name_value",
  //     "message_html": "message_html_value"
  //  }
   
  //  var service_id = "default_service";
  //  var template_id = "template_9Tjf3eaC";
  //  emailjs.send(service_id, template_id, template_params);
    
  };

  render() {
    return (
      <div className="pt-3 pb-3">
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Email
        </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Email</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input
                type="email"
                name="email"
                required
                onChange={(e) => this.handleEmailChange(e)}
              />
            </div>
            <Button onClick={this.sendEmail}>Submit</Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
