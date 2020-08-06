import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";

export default class EmailCertificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHide: false,
      email: "",
    };
  }

  //saves the email address entered in the textfield to the state object
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  // handleUserInput = (e) => {
  //   const email = e.target.email;
  // };

  sendEmail = (e) => {
    e.preventDefault();
    // user_f6tt833GFucVWlamKULHy
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    //     content: base64
    // });

    let self = this;
    emailjs
      .sendForm("gmail", "emailpdf", e.target, "user_f6tt833GFucVWlamKULHy") //Sends an acknowledgement email to the user using emailjs library
      .then(
        (result) => {
          alert("Email sent!");
          window.location.reload();
          this.handleModalShowHide();
        },
        (error) => {
          console.log(error.text);
        }
      );
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
              <form onSubmit={this.sendEmail}>
                <input
                  className="form-control "
                  type="email"
                  id="email"
                  name="email"
                  ref="email"
                  value={this.state.email}
                  onChange={(e) => this.handleEmailChange(e)}
                  placeholder="Email"
                  required
                  autoFocus
                />
                <button className="btn btn-primary supportButton"  
>
                  Submit
                </button>
              </form>
            </div>
            {/* <Button onClick={this.sendEmail}>Submit</Button> */}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
