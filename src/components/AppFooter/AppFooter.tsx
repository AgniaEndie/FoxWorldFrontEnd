import React from "react";
import {Container} from "react-bootstrap";
import DiscordIcon from "../../assets/icons/DiscordIcon";
import TelegeramIcon from "../../assets/icons/TelegeramIcon";
import LoveIcon from "../../assets/icons/LoveIcon";
function AppFooter(){
    return(
      <>
          <Container>
              <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                  <div className="col-md-4 d-flex align-items-center">
                      {/*logo*/}
                      <span className="mb-3 mb-md-0 text-orange">© 2023 Foxworld</span>
                  </div>

                  <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                      <li className="ms-3">
                          <a className="text-orange" href="#discord">
                             <DiscordIcon/>
                          </a>
                      </li>
                      <li className="ms-3">
                          <a className="text-orange" href="#telegram">
                              <TelegeramIcon/>
                          </a>
                      </li>
                      <li className="ms-3">
                          <a className="text-danger" href="#love">
                              <LoveIcon/>
                          </a>
                      </li>
                  </ul>
              </footer>
          </Container>
      </>
    );
}
export default AppFooter;