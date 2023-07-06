import React, {useState} from "react";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import "./About.scss";

function About() {
    return (
        <div className={"divCol h-100"}>
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
                            <Tab eventKey="home" title="Political 1.12.2">
                                Political 1.12.2 - сервер рассчитаный на постоянное политическое рп в условиях наличия
                                технологий массового поражения, стройте, развивайтесь, защищайтесь, договаривайтесь,
                                нападайте или стройте альянсы для того чтобы доминировать!
                            </Tab>
                            <Tab eventKey="profile" title="Svitliss 1.16.5">
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