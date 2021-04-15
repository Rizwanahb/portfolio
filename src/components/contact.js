import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col, Container, FormGroup, Label, Input, List } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUserCircle, faMap, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Form from './Form';


const contact = () => {
    return (
        <div className="bgcolor" id="contact">
            <Container className="p-5" fluid={true}>
                <Row>
                    <Col sm="6">
                        <h1 className="text-center text-white">GET IN <span className="text-warning">TOUCH</span></h1>
                        <hr className="line bg-warning"></hr>

                        <Form />

                    </Col>

                    <Col sm="6 p-4">
                        <div className="contact_info">
                            <Row className="p-5 text-white">
                                <h4 className="content-title">Contact Info</h4>
                                <p className="info-description text-secondary">Seeking an Internship position with a company in order to build upon skills necessary for the IT industry.</p>

                                <List type="unstyled">
                                    <Row>
                                        <Col xs="3">
                                            <FontAwesomeIcon className="icon" icon={faUserCircle} size="3x" />
                                        </Col>
                                        <div className="vl"></div>
                                        <Col xs="8">
                                            <h6 >Name</h6>
                                            <p className="text-secondary">Rizwanah Mustafa</p>
                                        </Col>
                                    </Row>

                                    <Row >
                                        <Col xs="3">
                                            <FontAwesomeIcon className="icon" icon={faMap} size="3x" />
                                        </Col>
                                        <div className="vl"></div>
                                        <Col xs="8">
                                            <h6 >Location</h6>
                                            <p className="text-secondary">Copenhagen,Denmark</p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs="3">
                                            <FontAwesomeIcon className="icon" icon={faPhoneAlt} size="3x" />
                                        </Col>
                                        <div className="vl"></div>
                                        <Col xs="8">
                                            <h6 >Call Me</h6>
                                            <a href="tel:+45 42 22 00 32">+45 42 22 00 32</a>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs="3">
                                            <FontAwesomeIcon className="icon" icon={faPaperPlane} size="3x" />
                                        </Col>
                                        <div className="vl"></div>
                                        <Col xs="8">
                                            <h6>Email Me</h6>
                                            <a href="mailto:rizwanah_batool@hotmail.com">rizwanah_batool@hotmail.com</a>
                                        </Col>
                                    </Row>
                                </List>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default contact
