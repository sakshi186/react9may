import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import swal from 'sweetalert';

const config = require('./config.json');

export default function Register() {
    //1.states
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //2.functions
    let submitData=(e)=>{
        console.log("clicked");
        console.log(config.dev_api_url);
        console.log(username);
        console.log(email);
        console.log(password);

        let data={
            username,email,password
        };
        fetch(`${config.dev_api_url}/api/auth/local/register`,{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then((response)=>{
            return response.json()
        }).then((response)=>{
            console.log(response)
            if(response.error){
                swal("error", response.error.message, "error");
            }
            if(response.user){
                swal("Good job!", JSON.stringify(response.user), "success");
            }
        }).catch((e)=>{
            console.log(e);
        });
    }
    //3.return statement
  return (
      <Container>
          <Row>
              <Col xs={{ offset:3,span:6 }}>
                  <h1>Registration system</h1>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username"value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter Username" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email"value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={ ()=>{submitData()}}>
                Submit
                </Button>
              </Form>
              </Col>
          </Row>
      </Container>
  );
}
