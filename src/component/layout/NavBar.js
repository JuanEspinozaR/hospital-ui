import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';
export default function NavigationBar() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Link className="navbar-brand" to="/">
                    Hospital-Tests
                </Link>
            </Container>
        </Navbar>
    )
}
