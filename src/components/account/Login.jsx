import React, { useState } from 'react';
import { login } from '../../services/userService';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useHistory } from 'react-router-dom';
import { default as ErrorAlert } from '../alerts/Error';

const Login = () => {
    const [user, handleUser] = useState({ email: '', password: '', owner: false });
    const [owner, handleOwner] = useState(false);
    const [errorObj, handleError] = useState({ error: false, message: '', alertShow: false });
    let history = useHistory();

    const handleEmailChange = (event) => {
        handleUser({ email: event.target.value, password: user.password, owner: user.owner });
    }

    const handlePasswordChange = (event) => {
        handleUser({ email: user.email, password: event.target.value, owner: user.owner });
    }

    const handleSelectChange = (event) => {
        const value = (event.target.value === 'true');
        if (value) {
            handleOwner(true);
        } else {
            handleOwner(false);
        }

        handleUser({ email: user.email, password: user.password, owner: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        formValidation();
    }

    const attemptLogin = () => {
        if (owner) {
            console.log('Owner Submitted');
        } else {
            login(user)
                .then(handleSuccess)
                .catch(handleErrorLogin);
        }
    }

    // const handleLoginType = (event) => {
    //     event.preventDefault();
    //     handleOwner(!owner);
    // }

    const handleAlertClose = (event) => {
        handleError({ error: false, message: '', alertShow: false });
    }

    const formValidation = () => {
        if (!user.email) {
            handleError({ error: true, message: 'Please provide an email address.', alertShow: true });
        } else if (!user.password) {
            handleError({ error: true, message: 'Please provide a password.', alertShow: true });
        } else {
            attemptLogin();
        }
    }

    const handleSuccess = (data) => {
        if (data.length > 0) {
            history.push(`/dashboard/${data[0].id}`);
        } else {
            handleError({ error: true, message: 'No records were found. :(', alertShow: true });
        }
    }

    const handleErrorLogin = (err) => {
        handleError({ error: true, message: 'Incorrect email or password.', alertShow: true });
    }

    return (
        <>
            <Container className="mt-4">
                {/* <Row className="justify-content-md-center">
                    <Col md={{ span: 4, offset: 10 }}>
                        {owner ? 'Not an Owner?' : 'Recipe Owner?'} <Button variant="warning" onClick={handleLoginType}>Click here</Button>
                    </Col>
                </Row> */}
            </Container>
            <Container className="mt-5">
                <Row className="justify-content-md-center mb-3">
                    <Col md={{ span: 4, offset: 0 }}>
                        Login to View your Favorite Recipes!
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-3">
                    <Col md={{ span: 4, offset: 0 }}>
                        {errorObj.error ? (
                            <ErrorAlert message={errorObj.message} show={errorObj.alertShow} handleClose={handleAlertClose}></ErrorAlert>
                        ) : null}
                    </Col>
                </Row>
                <Form>
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 4, offset: 0 }} className="border">
                            <Form.Group controlId="formName" className="mt-3 mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={user.email}
                                    onChange={handleEmailChange}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={handlePasswordChange}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formOwner">
                                <Form.Label>Are you an Owner?</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="owner"
                                    onChange={handleSelectChange}
                                >
                                    <option value={false}>No</option>
                                    <option value={true}>Yes</option>
                                </Form.Control>
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