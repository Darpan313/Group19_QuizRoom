import React, { Component } from "react";
import { Form, Image, Col, Button } from "react-bootstrap";
import { UserContext } from "../context/user";

export default class DeleteUser extends Component {
  static contextType = UserContext;
  
  onSubmit(e){
    
    e.preventDefault()
    const email = this.context.user.username
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email:email
      })
    };
    console.log('request ');
    console.log(requestOptions);
    
    fetch('http://localhost:5000/deleteUser', requestOptions)
      .then(response => response.json())
      .then(data => {

        if (data.data === "success") {
          console.log(data.data)
          // userLogout();
          <Dashboard/>
          // const { history } = this.props;
          // history.push('/login')
         
        }else{
          alert('Error in Deleting the User')
        }
      })

  }

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
          <div className="row mx-5">
            
            <div className="column ml-5">
              <Form>
                
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>It is hard for us to leave you go! :(</Form.Label>
                    
                  </Form.Group>
                </Form.Row>

                


                <Button variant="primary" type="submit" onClick={(e) => this.onSubmit(e)}>
                  Delete User
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
