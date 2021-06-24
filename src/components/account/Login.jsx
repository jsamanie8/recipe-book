import React, { useState } from 'react';
import { login } from '../../services/userService';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, handleUser] = useState({ email: '', password: '' });
    const [owner, handleOwner] = useState(false);

    const handleEmailChange = (event) => {
        handleUser({ email: event.target.value, password: user.password });
    }

    const handlePasswordChange = (event) => {
        handleUser({ email: user.email, password: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (owner) {
            console.log('Owner Submitted');
        } else {
            login(user)
                .then(handleSuccessLogin)
                .catch(handleErrorLogin);
        }
        console.log('submit!!', event);
    }

    const handleLoginType = (event) => {
        event.preventDefault();
        handleOwner(!owner);
    }

    const handleSuccessLogin = (data) => {
        console.log(data);
    }

    const handleErrorLogin = (err) => {
        console.log(err);
    }

    return (
        <>
            <Container className="mt-4">
                <Row className="justify-content-md-center">
                    <Col md={{ span: 4, offset: 10 }}>
                        {owner ? 'Not an Owner?' : 'Recipe Owner?'} <Button variant="warning" onClick={handleLoginType}>Click here</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row className="justify-content-md-center mb-3">
                    <Col md={{ span: 4, offset: 0 }}>
                        Login to View your Favorite Recipes!
                    </Col>
                </Row>
                <Form>
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 4, offset: 0 }} className="border">
                            <Form.Group controlId="formName" className="mt-3 mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={user.email} onChange={handleEmailChange}></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={user.password} onChange={handlePasswordChange}></Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3 mb-3" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Row className="justify-content-md-center mb-3">
                    <Col md={{ span: 4, offset: 0 }} className="mt-2">
                        <Link to="/createAccount">Don't have an account?</Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;