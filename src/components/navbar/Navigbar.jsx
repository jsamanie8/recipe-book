import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Navigbar = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand>Recipe Paradise</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link>Dashboard</Nav.Link>
                    <NavDropdown title="Options" id="options-dropdown">
                        <NavDropdown.Item>Example 1</NavDropdown.Item>
                        <NavDropdown.Item>Example 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Example 3</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigbar;