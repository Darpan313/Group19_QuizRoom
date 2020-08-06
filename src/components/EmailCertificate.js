import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import Certificate from './Certificate';

export default class EmailCertificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHide: false,
      email: "",
    };
  }

  //save email address from the form to the state object
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  //Modal view handling
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
    
  }

  //Send email function using Email.js https://www.emailjs.com/
  sendEmail = (e) => {
    e.preventDefault();
    const emailID = this.state.email;

    //Get the locally stored pdf's Base64 value
    var base64 = window.localStorage.getItem("pdfGen");
  
    var template_params = {
      "email": emailID,
      "base64_url": base64    //attach the pdf
   }
   
   var service_id = "gmail";
   var template_id = "emailpdf";
   emailjs.send(service_id, template_id, template_params,"user_f6tt833GFucVWlamKULHy").then(
        (result) => {
          alert("Email sent!");
          window.location.reload();

          //Hide modal once email sent
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
        {/* https://react-bootstrap.github.io/components/modal/ */}
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
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
