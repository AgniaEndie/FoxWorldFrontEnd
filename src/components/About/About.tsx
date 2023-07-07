import React, {useState} from "react";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import "./About.scss";

function About() {
    return (
        <div className={"divCol h-100"} id={"about"}>
            <Container className={"h-100 mt-5 mb-25"}>
                <h1 className={"text-orange text-center"}>Наши сервера</h1>
                <Row className={"align-items-start h-100 mt-5"}>
                    <Col xs={12} className={"mx-auto"}>
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Political 1.12.2" className={"text-orange"}>
                                Political 1.12.2 - сервер для постоянного политического рп в условиях наличия
                                технологий массового поражения. Стройте, развивайтесь, защищайтесь, договаривайтесь,
                                нападайте или создавайте альянсы для того чтобы доминировать над всем сервером и получить власть над игроками!
                            </Tab>
                            <Tab eventKey="profile" title="Svitliss 1.16.5" className={"text-orange"}>
                                Svitliss - ролевой сервер с авторским сюжетом от нашей команды! Ты можешь стать кузнецом, плотником или охотником на чудовищ! А если у тебя много друзей, то вы можете создать своё поселение с своими квестами и историями! Исследуй, зарабатывай и строй!
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;