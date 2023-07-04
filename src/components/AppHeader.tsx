import React from 'react';
import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import "./AppHeader.scss";
function AppHeader(){

    return(
        <div>
            <Navbar expand="lg" className={"bg-body-tertiary"}>
                <Container>
                    <Navbar.Brand href="#home">FoxWorld</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Главная</Nav.Link>
                            <Nav.Link href="#launcher">Лаунчер</Nav.Link>
                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>*/}
                        </Nav>
                        <Nav>
                            <Button variant="outline-orange" >Регистрация</Button>{' '}
                            <Button variant="outline-orange">Войти</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default AppHeader;