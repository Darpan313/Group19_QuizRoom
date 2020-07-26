//Author - Shwetha Subash (B00852743)
import React, { Component } from "react";
import { Form, Image, Col, Button } from "react-bootstrap";
import { UserContext } from "../context/user";
import { FormErrors } from "./FormErrors";
export default function EditForm(){
  const context = React.useContext(UserContext);
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  React.useEffect(() => {
    
    console.log(context.user.username);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
       
        email:context.user.username
      })
    };
    console.log('request ');
    console.log(requestOptions);
    fetch('https://web-service-g19-quiz-app.herokuapp.com/getDetails', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        
        if (data.data === "success") {
          console.log(data.firstName)
          setEmail(data.email);
          setFirstName(data.firstName);
          setLastName(data.lastName);
        }else{
          alert(data.message)
        }
      })

    
  }, []);

   const onSubmit = (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email:email,
        firstName:firstName,
        lastName:lastName
      })
    };
    console.log('request ');
    console.log(requestOptions);
    
    fetch('https://web-service-g19-quiz-app.herokuapp.com/updateDetails', requestOptions)
      .then(response => response.json())
      .then(data => {
    
        if (data.data === "success") {
          console.log(data.data)
          alert('Details Updated successfully')
          // const { history } = this.props;
          // history.push('/login')
         
        }else{
          alert('Error in Updating the details')
        }
      })

  }

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "firstName") {
      setFirstName(value)
     }else if(name == "lastName"){
       setLastName(value)
     }
  };


  // render() {
    var url = require(`../assets/profile.jpg`);
    const imageStyle = {
      width: "171px",
      height: "171px",
    };
    return (
      
      <div class="card text-center editform">
        <div class="card-header">Profile</div>
        <div class="card-body">
        <div align="center">
          <div >
            {/* <div className="column">
              <Image src={url} roundedCircle style={imageStyle} />
              <h5 class="card-title mt-2" value={firstName}></h5>
            </div> */}
            
            
            <div className="column ml-5">
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder={email}
                      value={email}
                      onChange={(e) => handleUserInput(e)}
                      disabled
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" value={firstName} placeholder="Enter FirstName"  onChange={(e) => handleUserInput(e)}/>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" value={lastName} placeholder="Enter LastName" onChange={(e) => handleUserInput(e)} />
                  </Form.Group>
                </Form.Row>
                



                <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
                  Update Profile
                </Button>
              </Form>
            </div>
           
          </div>
        </div>
      </div>
      </div>
    );
  }
// }
