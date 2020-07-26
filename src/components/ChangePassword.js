//Author - Shwetha Subash (B00852743)
import React, { Component } from "react";
import { Form, Image, Col, Button } from "react-bootstrap";
import { FormErrors } from "./FormErrors";
import { UserContext } from "../context/user";
export default class ChangePassword extends Component {
  static contextType = UserContext;
  constructor(props){
    super(props);
    this.state={
      password:"",
      confirmPassword:"",
      passwordValid:false,
      formErrors:{
        password:"",
        confirmPassword:""
      }
    };
    this.handleUserInput = this.handleUserInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e){
    
    e.preventDefault()
    const email = this.context.user.username
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email:email,
        password:this.state.password
      })
    };
    console.log('request ');
    console.log(requestOptions);
    
    fetch('https://web-service-g19-quiz-app.herokuapp.com/changePassword', requestOptions)
      .then(response => response.json())
      .then(data => {
        
        if (data.data === "success") {
          console.log(data.data)
          alert('Password Updated successfully')
          this.state.password=''
          this.state.confirmPassword=''
          // const { history } = this.props;
          // history.push('/login')
         
        }else{
          alert('Error in Updating the password')
        }
      })

  }
  
   handleUserInput(e) {

    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [e.target.name]: e.target.value });
     if (name == "password") {
      
      if (value.length >= 6) {
        this.setState({passwordValid:true})
      } else {
        this.setState({passwordValid:false})
      }
      this.state.formErrors.Password = this.state.passwordValid ? "" : " is too short";
    }else if(name == "confirmPassword"){
      
      if(value != this.state.password)
      {
        this.state.formErrors.Password = 'do not match!';
      }else{
        this.state.formErrors.Password =  ''
      }
    }
    //setFormValid(emailValid && passwordValid);
  };
  render() {
    var url = require(`../assets/profile.jpg`);
    const imageStyle = {
      width: "171px",
      height: "171px",
    };
    return (
      <div className="card text-center editform " align='center'>
        <div className="card-header">Change Password</div>
        <div className="card-body">
          <div >
            
            <div className="column ml-5">
              <Form>
                {/* <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="patel.darpan@dal.ca"
                      disabled
                    />
                  </Form.Group>
                </Form.Row> */}
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password" onChange={(e) => this.handleUserInput(e)}  />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="Enter New Password"  onChange={(e) => this.handleUserInput(e)} />
                  </Form.Group>
                </Form.Row>
                <FormErrors formErrors={this.state.formErrors} />


                <Button variant="primary" type="submit"  onClick={(e) => this.onSubmit(e)}>
                  Update Password
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
