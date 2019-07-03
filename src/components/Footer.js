import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import './Footer.css';
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title">BLK•</h1>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/" >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/landing-page" >
                    Landing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register-page" >
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/profile-page" >
                    Profile
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                <Link to="/Buttons">
                  Buttons
               </Link>
                </NavItem>
                <NavItem>
                  <Link to="/Imputs">
                    Imputs
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/CheckRadio">
                   CheckRadio
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/Tabs">
                    Tabs
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/Modals">
                    Modals
                  </Link>
                </NavItem>
              </Nav>
            </Col>
            
            <Col md="3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href=""
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                twitter
                </UncontrolledTooltip>

                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Like us
                </UncontrolledTooltip>

                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://dribbble.com/creativetim"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fab fa-google" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  google
                </UncontrolledTooltip>

                <Button
                  className="btn-icon btn-danger btn-round "
                  color="default"
                  href="https://dribbble.com/creativetim"
                  target="_blank"
                >
                  <i className="fab fa-google" />
                </Button>      
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;