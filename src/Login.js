import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import swal from 'sweetalert';

const config = require('./config.json');

export default function Login() {
    //1.states/hook variables
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')


    //2.functions
    let login =()=>{
        console.log("okok")
    }
    //3.return statements
    return (
        <Container>
            <Row>
                <Col xs={{ offset:3,span:6 }}>
                    <h1>Login System</h1>
                  <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="identifier" value={identifier} placeholder="Enter email" onChange={(e)=>{setIdentifier(e.target.value)}} />
                      <Form.Text className="text-muted">
                      </Form.Text>
                  </Form.Group>
              
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
                  </Form.Group>
                  <Button variant="primary" type="button" onClick={()=>{login()}}>
                  Submit
                  </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    );
  }

