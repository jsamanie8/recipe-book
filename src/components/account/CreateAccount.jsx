import React from 'react';
import { create } from '../../services/ownerService';
import { default as SuccessAlert } from '../alerts/Success';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            ownerFlag: false,
            adminFlag: false
        },
        successMessage: 'Successfully created account!',
        creationSuccess: false
    }

    handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
            return {
                user: {
                    ...prevState.user,
                    [name]: value
                }
            }
        });
    }

    handleSelectChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = (event.target.value === 'true');
        this.setState(prevState => {
            return {
                user: {
                    ...prevState.user,
                    [name]: value
                }
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const payload = this.state.user;
        //Look at flags and call appropriate method: owner/user/admin
        create(payload)
            .then(res => {
                this.successCreation(res);
            })
            .catch(err => {
                this.errorCreation(err);
            });
    }

    createOwner = (payload) => {

    }

    createUser = (payload) => {

    }

    createAdmin = (payload) => {

    }

    clearForm = () => {
        this.setState({
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        })
    }

    successCreation = (result) => {
        console.log('Successfully Created', result);
        this.clearForm();
        this.setState({
            creationSuccess: true
        })
    }

    errorCreation = (err) => {
        this.setState({
            creationSuccess: false
        });
    }

    render() {
        return (
            <>
                <Container className="mt-5">
                    <Row className="justify-content-md-center mb-3">
                        <Col md={{ span: 4, offset: 0 }}>
                            Create your account!
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-3">
                        <Col md={{ span: 4, offset: 0 }}>
                            {this.state.creationSuccess ? (
                                <SuccessAlert message={this.state.successMessage}></SuccessAlert>
                            ) : null}
                        </Col>
                    </Row>
                    <Form>
                        <Row className="justify-content-md-center">
                            <Col md={{ span: 4, offset: 0 }} className="border">
                                <Form.Group controlId="formFirstName" className="mt-3 mb-3">
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter First Name"
                                        value={this.state.user.firstName}
                                        name="firstName"
                                        onChange={this.handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>Last Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Last Name"
                                        value={this.state.user.lastName}
                                        name="lastName"
                                        onChange={this.handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        value={this.state.user.email}
                                        name="email"
                                        onChange={this.handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.user.password}
                                        name="password"
                                        onChange={this.handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formOwner">
                                    <Form.Label>Are you an Owner?</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="ownerFlag"
                                        onChange={this.handleSelectChange}>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </Form.Control>
                                </Form.Group>
                                {this.state.user.ownerFlag ? null : (
                                    <Form.Group controlId="formAdmin">
                                        <Form.Label>Will you be an Admin?</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="adminFlag"
                                            onChange={this.handleSelectChange}>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </Form.Control>
                                    </Form.Group>
                                )}
                                <Button variant="primary" type="submit" className="mt-3 mb-3" onClick={this.handleSubmit}>
                                    Submit
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Row className="justify-content-md-center mb-3">
                        <Col md={{ span: 4, offset: 0 }} className="mt-2">
                            <Link to="/login">Have an account?</Link>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default CreateAccount;