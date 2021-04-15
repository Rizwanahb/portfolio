import React from "react";
import { Button } from 'react-bootstrap';
import { Progress, Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFilePdf, faStar } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import cv from "../pdf/Rizwanah_Mustafa_CV.pdf";


const about = () => {
      return (
            <div className="division" id="about">
                  <Container className="p-5" fluid={true}>
                        <Row>
                              <Col sm="4">
                                    <div className="myimg"></div>
                              </Col>
                              <Col sm="8">
                                    <h1 className="text-center text-white">ABOUT <span className="text-warning">ME</span></h1>
                                    <hr className="line bg-warning"></hr>

                                    <Row className="mb-3">
                                          <FontAwesomeIcon className="icon" icon={faUser} size="2x" />
                                          <h4 className="align mb-3">Personal info</h4>
                                    </Row>
                                    <p className="text-white">I am a Software Engineer intern, who wants to work with a company that deals in the
                                    development of new technologies and advances my skills as a developer while also having a hand in developing the
            innovations of tomorrow.</p>

                                    <Container className="p-5 text-white">
                                          <Row className="mb-3">
                                                <Col sm="6" className="list1">

                                                      <li>First Name: Rizwanah</li>
                                                      <li>Last Name: Mustafa</li>
                                                      <li>Nationality: Pakistani</li>
                                                      <li>Marital Status: Married</li>
                                                </Col>

                                                <Col sm="6" className="list2">
                                                      <li>Phone: +45 42 22 00 32</li>
                                                      <li className="alignlist">Address: Copenhagen, Denmark</li>
                                                      <li className="alignlist">Email: rizwanah_batool@hotmail.com</li>
                                                      <li className="alignlist">Languages: English - Urdu - Danish</li>
                                                </Col>
                                          </Row>
                                    </Container>
                                    <div className="d-sm-flex align-items-justify">

                                          <a href={cv} downlaod="Rizwanah_Mustafa_CV" target="_blank">
                                                <Button variant="outline-warning">
                                                      Download Resume <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
                                                </Button>
                                          </a>
                                          <hr className="line"></hr>
                                          <ul>
                                                <a href="https://www.linkedin.com/in/rizwanah-mustafa/" target="_blank">
                                                      <FontAwesomeIcon className="socialicon" size="2x" icon={faLinkedin}></FontAwesomeIcon>
                                                </a>
                                          </ul>
                                          <ul>
                                                <a href="https://github.com/Rizwanahb" target="_blank">
                                                      <FontAwesomeIcon className="socialicon" size="2x" icon={faGithub}></FontAwesomeIcon>
                                                </a>
                                          </ul>
                                    </div>
                                    <hr className="line bg-warning"></hr>

                                    <Row className="mb-3">
                                          <FontAwesomeIcon className="icon pb-6" icon={faStar} size="2x" />
                                          <h4 className="align mb-1">Skills</h4>
                                          <Container className="p-5  text-white">
                                                <Row className="mb-1">
                                                      <Col sm="6">
                                                            <Container className="p-2  text-white">
                                                                  C#.NET
                               <Progress animated color="warning text-secondary" value={50}>50%</Progress>
                                                            </Container>

                                                            <Container className="p-2 text-white">
                                                                  HTML
                              <Progress animated color="warning text-secondary" value={80}>80%</Progress>

                                                            </Container>

                                                            <Container className="p-2 text-white">
                                                                  CSS
                              <Progress animated color="warning text-secondary" value={75}>75%</Progress>

                                                            </Container>

                                                            <Container className="p-2 text-white">
                                                                  MSSQL
                              <Progress animated color="warning text-secondary" value={50}>50%</Progress>

                                                            </Container>
                                                      </Col>

                                                      <Col sm="6">
                                                            <Container className="p-2 text-white">
                                                                  JavaScript
                              <Progress animated color="warning text-secondary" value={60}>60%</Progress>
                                                            </Container>

                                                            <Container className="p-2 text-white">
                                                                  PHP
                              <Progress animated color="warning text-secondary" value={75}>75%</Progress>

                                                            </Container>

                                                            <Container className="p-2 text-white">
                                                                  React
                              <Progress animated color="warning text-secondary" value={70}>70%</Progress>

                                                            </Container>

                                                            <Container className="p-2 text-white">
                                                                  Bootstrap 4
                              <Progress animated color="warning text-secondary" value={75}>75%</Progress>

                                                            </Container>
                                                      </Col>
                                                </Row>
                                          </Container>
                                    </Row>
                              </Col>

                        </Row>
                  </Container>
            </div>
      )
}
export default about