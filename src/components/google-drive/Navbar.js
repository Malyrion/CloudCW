import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavbarComponent() {
    return (
        <Navbar bg="light" expand="sm">
            <Navbar.Brand as={Link} to="/">
                UG2 Drive
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to='/user'>
                    Profile
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavbarComponent
