import React, {useState} from 'react';
import {Button, Col, Container, Nav, Navbar, Row,Form} from "react-bootstrap";
import "./AppHeader.scss";
import Modal from "react-bootstrap/Modal";

function AppHeader() {

    const [isRegOpen, setIsRegOpen] = useState(false)
    const [registryData,setRegistryData] = useState({
        nickname : "",
        email: "",
        password: "",
        password_repeat: ""
    })

    function sendRegistry(data : any){
        setRegistryData({
            nickname: data.inputNickname, email: data.inputEmail, password: data.inputPassword, password_repeat: data.inputPasswordRepeat
        });

        if(registryData  != null){
            console.warn(registryData);
        }
    }



    function RegModal(){
        const handleClose = () => setIsRegOpen(false);
        const [inputNickname, setInputNickname] = useState("");
        const [inputEmail, setInputEmail] = useState("");
        const [inputPassword, setInputPassword] = useState("");
        const [inputPasswordRepeat, setInputPasswordRepeat] = useState("");
        return (

             <>
                <Modal
                    show={isRegOpen}
                    onHide={handleClose}
                    size={"lg"}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Регистрация</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className={"mb-3"} controlId="formBasicNickname">
                                <Form.Label htmlFor="inputNickname">Никнейм</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputNickname"
                                    aria-describedby="nicknameHelpBlock"
                                    autoFocus
                                    onChange={(e)=>{setInputNickname(e.target.value)}}
                                />
                                <Form.Text id="nicknameHelpBlock" muted>
                                    Никнейм - это ваше внутриигровое имя, тщательно выбирайте его перед регистрацией, взвесьте все за и против, не используйте специальные символы, а также мат.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className={"mb-3"} controlId="formBasicEmail">
                                <Form.Label htmlFor="inputEmail">Почта</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="inputEmail"
                                    aria-describedby="EmailHelpBlock"
                                    onChange={(e)=>{setInputEmail(e.target.value)}}
                                />
                                <Form.Text id="EmailHelpBlock" muted>
                                    Мы используем вашу почту для идентификации вашего аккаунта, для связи с вами в случае неожиданных акций, а также для обратной связи в случае неполадок!
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className={"mb-3"} controlId="formBasicPassword">
                                <Form.Label htmlFor="inputPassword">Пароль</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPassword"
                                    aria-describedby="PasswordHelpBlock"
                                    onChange={(e)=>{setInputPassword(e.target.value)}}
                                />
                                <Form.Text id="PasswordHelpBlock" muted>
                                    Ваш пароль должен состоять из 8-20 символов, содержать буквы и цифры,
                                    и не должен содержать пробелы, специальные символы или эмоджи.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className={"mb-3"} controlId="formBasicPassword">
                                <Form.Label htmlFor="inputPasswordRepeat">Повтор пароля</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPasswordRepeat"
                                    aria-describedby="PasswordRepeatHelpBlock"
                                    onChange={(e)=>{setInputPasswordRepeat(e.target.value)}}
                                />
                                <Form.Text id="PasswordRepeatHelpBlock" muted>
                                    Ваш пароль должен состоять из 8-20 символов, содержать буквы и цифры,
                                    и не должен содержать пробелы, специальные символы или эмоджи.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Закрыть
                        </Button>
                        <Button variant="success" onClick={()=> {
                            sendRegistry({inputNickname:inputNickname,inputEmail:inputEmail,inputPassword:inputPassword,inputPasswordRepeat:inputPasswordRepeat})
                        }}>Регистрация</Button>
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
                            <Nav.Link href="#about">Наши сервера</Nav.Link>
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