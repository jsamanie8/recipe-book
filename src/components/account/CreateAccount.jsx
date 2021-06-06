import React from 'react';
import { create } from '../../services/ownerService';
import { default as SuccessAlert } from '../alerts/Success';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CreateAccount extends React.Component {
    state = {
        owner: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
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
                owner: {
                    ...prevState.owner,
                    [name]: value
                }
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const payload = this.state.owner;
        create(payload)
            .then(res => {
                this.successCreation(res);
            })
            .catch(err => {
                this.errorCreation(err);
            });
    }

    clearForm = () => {
        this.setState({
            owner: {
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
        })
    }

    render() {
        return (
            <>
                <Container className="mt-5">
                    <Row className="justify-content-md-center mb-3">
                        <Col md={{ span: 4, offset: 0 }}>
                            Create your Owner's Account!
                        </Col>
                        {this.state.creationSuccess ? (
                            <SuccessAlert message={this.state.successMessage}></SuccessAlert>
                        ) : null}
                    </Row>
                    <Form>
                        <Row className="justify-content-md-center">
                            <Col md={{ span: 4, offset: 0 }} className="border">
                                <Form.Group controlId="formFirstName" className="mt-3 mb-3">
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter First Name"
                                        value={this.state.owner.firstName}
                                        name="firstName"
                                        onChange={this.handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>Last Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Last Name"
                                        value={this.state.owner.lastName}
                                        name="lastName"
                                        onChange={this.handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        value={this.state.owner.email}
                                        name="email"
                                        onChange={this.handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.owner.password}
                                        name="password"
                                        onChange={this.handleChange}>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-3 mb-3" onClick={this.handleSubmit}>
                                    Submit
                            </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </>
        );
    }
}

export default CreateAccount;