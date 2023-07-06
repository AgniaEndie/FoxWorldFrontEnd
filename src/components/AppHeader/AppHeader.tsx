import React, {useState} from 'react';
import {Button, Col, Container, Nav, Navbar, Row,Form} from "react-bootstrap";
import "./AppHeader.scss";
import Modal from "react-bootstrap/Modal";

function AppHeader() {

    const [isRegOpen, setIsRegOpen] = useState(false)

    function RegModal(){
        console.log(123)
        const handleClose = () => setIsRegOpen(false);

        return (
            <>
                <Modal
                    show={isRegOpen}
                    onHide={handleClose}
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Регистрация</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label htmlFor="inputNickname">Никнейм</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputNickname"
                            aria-describedby="nicknameHelpBlock"
                        />
                        <Form.Text id="nicknameHelpBlock" muted>
                            Ваш пароль должен состоять из 8-20 символов, содержать буквы и цифры,
                            и не должен содержать пробелы, специальные символы или эмоджи.
                        </Form.Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Закрыть
                        </Button>
                        <Button variant="success">Регистрация</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );

    }

    return (
<>
            <Navbar expand="lg" className={""}>
                <Container>
                    <Navbar.Brand href="#home">FoxWorld</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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
                            <Container>
                                <Row>
                                    <Col><Button variant="outline-orange" onClick={() => setIsRegOpen(true)}>Регистрация</Button>{' '}</Col>
                                    <Col><Button variant="outline-orange">Войти</Button>{' '}</Col>
                                </Row>
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <RegModal />
    </>
            )
}

export default AppHeader;