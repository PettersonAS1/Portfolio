import React from 'react'
import './Header.css'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Petter</Navbar.Brand>
                <Navbar.Toggle bg="lg" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Início</Nav.Link>
                        <Nav.Link href="#link">Sobre</Nav.Link>
                        <Nav.Link href="#link">Projetos</Nav.Link>
                        <Nav.Link href="#link">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header