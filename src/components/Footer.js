import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assests/img/logo.svg";
import navIcon1 from '../assests/img/nav-icon1.svg';
import navIcon2 from '../assests/img/nav-icon2.svg';
import navIcon3 from '../assests/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Company Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/anisha.raj.54540/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="Facebook Icon" />
                            </a>
                            <a href="https://github.com/anishayh" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon2} alt="Instagram Icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/anisha-raj-162152229/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon3} alt="LinkedIn Icon" />
                            </a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};


















