import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolderPlus} from "@fortawesome/free-solid-svg-icons"
import {faUserCircle} from "@fortawesome/free-solid-svg-icons/faUserCircle";

function NavbarComponent() {
    return (
        <Navbar bg = 'primary' variant = 'light' expand='sm'>

            <Navbar.Brand as={Link} to="/">
                UG2 Google drive Clone
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to='/user' >
                    <FontAwesomeIcon icon={faUserCircle} size="lg"></FontAwesomeIcon>
                            Profile
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavbarComponent
