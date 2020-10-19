import React from "react";
//Importando componentes
import {Navbar, Nav} from "react-bootstrap";

//Antes para retornar uma view simples usávamos function e interativas class, agora utilizaremos só pure functions.
const Menu = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
            <Navbar.Brand href="/">NYOUS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/cadastrar">Cadastrar-se</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;