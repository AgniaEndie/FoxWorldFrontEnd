import React, {ChangeEvent, useState} from 'react';
import {Alert, Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import "./AppHeader.scss";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

interface props{
    isAccountActive: any,
    value: boolean,
    userData: any,
    userDataValue: {
        username : string,
        token : string,
        uuid: string
    }
}
function AppHeader(isAccountActive:props) {

    const [isRegOpen, setIsRegOpen] = useState(false)
    const [isAuthOpen, setIsAuthOpen] = useState(false)
    const [regMessageTitle, setRegMessageTitle] = useState("");
    const [regMessage, setRegMessage] = useState("");
    const [showRegMessage, setShowRegMessage] = useState(false);

    const [authMessageTitle, setAuthMessageTitle] = useState("");
    const [authMessage, setAuthMessage] = useState("");
    const [showAuthMessage, setShowAuthMessage] = useState(false);

    const instance = axios.create({
        baseURL: "https://diplom.foxworld.online/",
        timeout: 1000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
        }
    });

    function RegMessage() {
        if (showRegMessage) {
            return (
                <Alert variant="success" onClose={() => setShowRegMessage(false)} dismissible>
                    <Alert.Heading>{regMessageTitle}</Alert.Heading>
                    <p>
                        {regMessage}
                    </p>
                </Alert>
            );
        } else {
            return (
                <></>
            )
        }
    }
    function AuthMessage() {
        if (showRegMessage) {
            return (
                <Alert variant="success" onClose={() => setShowAuthMessage(false)} dismissible>
                    <Alert.Heading>{authMessageTitle}</Alert.Heading>
                    <p>
                        {authMessage}
                    </p>
                </Alert>
            );
        } else {
            return (
                <></>
            )
        }
    }



    async function Registry(data: any) {
        await instance.request({
            data, url: "auth/registry", method: 'POST'
        })
    }
    function MenuAccesses(){
        if(isAccountActive.value == false){
            return (
                <Container>
                    <Row>
                        <Col><Button variant="outline-orange"
                                     onClick={() => setIsRegOpen(true)}>Регистрация</Button>{' '}</Col>
                        <Col><Button variant="outline-orange"
                                     onClick={()=>setIsAuthOpen(true)}>Войти</Button>{' '}</Col>
                    </Row>
                </Container>
            )
        }else{
            return(
                <Container>
                    <Row>
                        <Col>
                            {isAccountActive.userDataValue.username}
                        </Col>
                        <Col>
                            <a href="#out" className="text-danger" onClick={()=> {isAccountActive.userData({username: null, token: null, uuid: null}); isAccountActive.isAccountActive(false)}}>Выйти</a>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }


    function AuthModal(){
        const handleClose = () => setIsAuthOpen(false);
        const [inputNickname, setInputNickname] = useState({value: ""});
        const [inputPassword, setInputPassword] = useState({value: ""});

        const handleChangeNickname = (event: ChangeEvent<{ value: string }>) => {
            setInputNickname({value: event?.currentTarget?.value});
        }
        const handleChangePassword = (event: ChangeEvent<{ value: string }>) => {
            setInputPassword({value: event?.currentTarget?.value});
        }
        const [authData, setAuthData] = useState({
            username : "",
            uuid: "",
            token: ""
        })

        const [messageAuth, setMessageAuth] = useState("");



        async function Auth(data: any) {
            const promise = await instance.request({
                data, url: "auth/auth", method: 'POST'
            })
            //console.log(promise.data)
            return promise.data;
        }
        async function sendAuth(){
            const response : any = await Auth({username: inputNickname.value, password: inputPassword.value});
            if(response.token != null){
                isAccountActive.isAccountActive(true);
                isAccountActive.userData(response)
                setIsAuthOpen(false)
            }else{
                setMessageAuth("Неверный пароль")
            }
        }

        return (
            <>
                <Modal
                    show={isAuthOpen}
                    onHide={handleClose}
                    size={"lg"}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className={"text-orange"}>Вход</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className={"mb-3"} controlId="formBasicNickname">
                                <Form.Label htmlFor="inputNickname" className={"text-orange"}>Никнейм</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputNickname"
                                    aria-describedby="nicknameHelpBlock"
                                    autoFocus
                                    required={true}
                                    onChange={(e) => {
                                        handleChangeNickname(e)
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className={"mb-3"} controlId="formBasicEmail">
                                <Form.Label htmlFor="inputEmail" className={"text-orange"}>Пароль</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="inputEmail"
                                    aria-describedby="EmailHelpBlock"
                                    required={true}
                                    onChange={(e) => {
                                        handleChangePassword(e)
                                    }}
                                />
                            </Form.Group>
                            <p>{messageAuth}</p>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" className={"w-100"} onClick={() => {
                            sendAuth()
                        }}>Вход</Button>
                    </Modal.Footer>
                </Modal>
            </>

        );

    }


    function RegModal() {
        const handleClose = () => setIsRegOpen(false);
        const [inputNickname, setInputNickname] = useState({value: ""});
        const [inputEmail, setInputEmail] = useState({value: ""});
        const [inputPassword, setInputPassword] = useState({value: ""});
        const [inputPasswordRepeat, setInputPasswordRepeat] = useState({value: ""});
        const handleChangeNickname = (event: ChangeEvent<{ value: string }>) => {
            setInputNickname({value: event?.currentTarget?.value});
        }
        const handleChangeEmail = (event: ChangeEvent<{ value: string }>) => {
            setInputEmail({value: event?.currentTarget?.value});
        }
        const handleChangePassword = (event: ChangeEvent<{ value: string }>) => {
            setInputPassword({value: event?.currentTarget?.value});
        }
        const handleChangePasswordRepeat = (event: ChangeEvent<{ value: string }>) => {
            setInputPasswordRepeat({value: event?.currentTarget?.value});
        }

        const [messageNick, setMessageNick] = useState("");
        const [messageEmail, setMessageEmail] = useState("");
        const [messagePassword, setMessagePassword] = useState("");
        const [messagePasswordRepeat, setMessagePasswordRepeat] = useState("");


        function sendRegistry() {
            if (inputNickname.value !== null && inputNickname.value !== "") {
                setMessageNick("");
                if (inputEmail.value !== null && inputEmail.value !== "") {
                    setMessageEmail("");
                    if (inputPassword.value !== null && inputPassword.value !== "") {
                        setMessagePassword("")
                        if (inputPasswordRepeat !== null && inputPasswordRepeat.value !== "") {
                            setMessagePasswordRepeat("")
                            if (inputPassword.value == inputPasswordRepeat.value) {
                                const check = {
                                    username: inputNickname.value,
                                    email: inputEmail.value,
                                    password: inputPassword.value
                                }
                                Registry(check);
                                setIsRegOpen(false);
                                setShowRegMessage(true)
                                setRegMessageTitle("Добро пожаловать!")
                                setRegMessage("Вы успешно зарегистрировались")
                            } else {
                                setMessagePassword("Пароли не совпадают");
                                setMessagePasswordRepeat("Пароли не совпадают");
                            }
                        } else {
                            setMessagePasswordRepeat("Данное поле не заполнено");
                        }
                    } else {
                        setMessagePassword("Данное поле не заполнено");
                    }
                } else {
                    setMessageEmail("Данное поле не заполнено");
                }
            } else {
                setMessageNick("Данное поле не заполнено");
            }

        }



        return (
            <>
                <Modal
                    show={isRegOpen}
                    onHide={handleClose}
                    size={"lg"}
                >
                    <Modal.Header closeButton>
                        <Modal.Title className={"text-orange"}>Регистрация</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className={"mb-3"} controlId="formBasicNickname">
                                <Form.Label htmlFor="inputNickname" className={"text-orange"}>Никнейм</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputNickname"
                                    aria-describedby="nicknameHelpBlock"
                                    autoFocus
                                    required={true}
                                    onChange={(e) => {
                                        handleChangeNickname(e)
                                    }}
                                />
                                <p className={"text-danger"}>{messageNick}</p>
                                <Form.Text id="nicknameHelpBlock" className={"text-soft-orange"}>
                                    Никнейм - это ваше внутриигровое имя, тщательно выбирайте его перед регистрацией,
                                    взвесьте все за и против, не используйте специальные символы, а также мат.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className={"mb-3"} controlId="formBasicEmail">
                                <Form.Label htmlFor="inputEmail" className={"text-orange"}>Почта</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="inputEmail"
                                    aria-describedby="EmailHelpBlock"
                                    required={true}
                                    onChange={(e) => {
                                        handleChangeEmail(e)
                                    }}
                                />
                                <p className={"text-danger"}>{messageEmail}</p>
                                <Form.Text id="EmailHelpBlock" className={"text-soft-orange"}>
                                    Мы используем вашу почту для идентификации вашего аккаунта, для связи с вами в
                                    случае неожиданных акций, а также для обратной связи в случае неполадок!
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className={"mb-3"} controlId="formBasicPassword">
                                <Form.Label htmlFor="inputPassword" className={"text-orange"}>Пароль</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPassword"
                                    aria-describedby="PasswordHelpBlock"
                                    required={true}
                                    onChange={(e) => {
                                        handleChangePassword(e)
                                    }}
                                />
                                <p className={"text-danger"}>{messagePassword}</p>
                                <Form.Text id="PasswordHelpBlock" className={"text-soft-orange"}>
                                    Ваш пароль должен состоять из 8-20 символов, содержать буквы и цифры,
                                    и не должен содержать пробелы, специальные символы или эмоджи.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className={"mb-3"} controlId="formBasicPassword">
                                <Form.Label htmlFor="inputPasswordRepeat" className={"text-orange"}>Повтор
                                    пароля</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPasswordRepeat"
                                    aria-describedby="PasswordRepeatHelpBlock"
                                    required={true}
                                    onChange={(e) => {
                                        handleChangePasswordRepeat(e)
                                    }}
                                />
                                <p className={"text-danger"}>{messagePasswordRepeat}</p>
                                <Form.Text id="PasswordRepeatHelpBlock" className={"text-soft-orange"}>
                                    Ваш пароль должен состоять из 8-20 символов, содержать буквы и цифры,
                                    и не должен содержать пробелы, специальные символы или эмоджи.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" className={"w-100"} onClick={() => {
                            sendRegistry()
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
                            <Nav.Link href={"Launcher.jar"} download>Лаунчер</Nav.Link>
                            <Nav.Link href="#about">Наши сервера</Nav.Link>
                        </Nav>
                        <Nav>
                            <MenuAccesses/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <RegMessage/>
            <RegModal/>
            <AuthModal/>
        </>
    )
}

export default AppHeader;