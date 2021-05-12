import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
    const [user, handleUser] = useState({ email: '', password: '' });

    const handleChange = (event) => {
        if (event.target.id === 'formName') {
            handleUser({ email: event.target.value, password: user.password });
        } else {
            handleUser({ email: user.email, password: event.target.value });
        }
    }

    return (
        <>
            <Container className="mt-4">
                <Row className="justify-content-md-center">
                    <Col md={{ span: 4, offset: 10 }}>
                        Recipe Owner? <Button variant="primary">Click here</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Form>
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 4, offset: 0 }}>
                            <Form.Group controlId="formName">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={user.email} onChange={handleChange}></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={user.password} onChange={handleChange}></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default Login;