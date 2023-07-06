import React from "react";
import {Carousel} from "react-bootstrap";
import bg1 from "../../assets/background-1.jpg";
import bg2 from "../../assets/background-2.jpg";
import bg3 from "../../assets/background-3.jpg";
import LoveIcon from "../../assets/icons/LoveIcon";
import FriendsIcon from "../../assets/icons/FriendsIcon";
import "./AppCarousel.scss";
import MagicWand from "../../assets/icons/MagicWand";
function AppCarousel(){
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bg1}
                        alt="First slide"
                />
                <Carousel.Caption className ={"text-orange"}>
                    <h3>FoxWorld - место где тебя ждут {LoveIcon()}</h3>
                    <p>Именно для тебя мы и стараемся!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bg2}
                    alt="Second slide"
                />

                <Carousel.Caption className ={"text-orange"}>
                    <h3>Реализация фантазий {MagicWand()}</h3>
                    <p>Вместе - мы сможем материализовать все ваши мечты!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bg3}
                    alt="Third slide"
                />

                <Carousel.Caption className ={"text-orange"}>
                    <h3>Новые знакомства {FriendsIcon()}</h3>
                    <p>Найдите новых друзей вместе с нами!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default AppCarousel;