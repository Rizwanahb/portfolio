import React from "react";
import Typed from "react-typed";
import {Row, Col, Container, Card, CardDeck, CardGroup, Image} from 'react-bootstrap';
import Rizpic from "../images/r_mustafa2.jpg";
import 'holderjs';


const about1 = () => {
    return (

            <div className="Container">
               
                
               
                
                <div className="bl-content">
                  
                    <div className="container page-title custom-page-title">
                        <h2 className="center-align">
                            <span>About</span>
                            <span>Me</span>
                        </h2>
                    </div>
                   
                    <div className="container infos">
					
                        <div className="divider center-align">
                            <span className="outer-line"></span>
                            <span className="fa fa-vcard" aria-hidden="true"></span>
                            <span className="outer-line"></span>
                        </div>
					
                        <div className="row">
							
                            <div className="col s12 m4 profile-picture show-on-medium-and-down section-padding">
								<div className="responsive-img my-picture fakeimg" alt="My Photo"></div>
                            </div>
						
                            <div className="col s12 m8 l12 xl12 personal-info section-padding">
                                <h6 className="uppercase"><i className="fa fa-user"></i> Personal Info</h6>
								<div className="col m12 l12 xl9 p-none">
									<p className="second-font">I'm a Freelance Web Designer & Developer based in Moscow, Russia.
									I have serious passion for UI effects, animations and creating intuitive, 
									with over a decade of experience.
									</p>
								</div>
                                <div className="col s12 m12 l6 p-none">
                                    <ul className="second-font list-1">
                                        <li><span className="font-weight-700">First Name: </span>Linda</li>
                                        <li><span className="font-weight-700">Last Name: </span>Smith</li>
                                        <li><span className="font-weight-700">Date of birth: </span>21 june 1990 </li>
                                        <li><span className="font-weight-700">Nationality: </span>Russian</li>
										<li><span className="font-weight-700">Freelance: </span>Available</li>
                                    </ul>
                                </div>
                                <div className="col s12 m12 l6 p-none">
                                    <ul className="second-font list-2">
                                        <li><span className="font-weight-700">Phone: </span>+34 21 18 40 10</li>
                                        <li><span className="font-weight-700">Address: </span>Moscow, Russia</li>
                                        <li><span className="font-weight-700">Email: </span>you@yourwebsite.com</li>
                                        <li><span className="font-weight-700">Spoken Langages: </span>French - German</li>
										<li><span className="font-weight-700">Skype: </span>linda.smith</li>
                                    </ul>
                                </div>
                                <a href="#" className="btn font-weight-700">
									Download Resume <i className="fa fa-file-pdf-o"></i>
								</a>
								<a href="blog-dark.html" className="btn btn-blog font-weight-700">
									My Blog <i className="fa fa-edit"></i>
								</a>
                            </div>
                        </div>
					
                    </div>
				
					<div className="resume-container">
                        <div className="container">
                            <div className="valign-wrapper row">
							
                                <div className="resume-list col l4 section-padding">
                                    <div className="resume-list-item is-active" data-index="0" id="resume-list-item-0">
                                        <div className="resume-list-item-inner">
                                            <h6 className="resume-list-item-title uppercase"><i className="fa fa-briefcase"></i> Experience</h6>
                                        </div>
                                    </div>
                                    <div className="resume-list-item" data-index="1" id="resume-list-item-1">
                                        <div className="resume-list-item-inner">
                                            <h6 className="resume-list-item-title uppercase"><i className="fa fa-graduation-cap"></i> Education</h6>
                                        </div>
                                    </div>
                                    <div className="resume-list-item" data-index="2" id="resume-list-item-2">
                                        <div className="resume-list-item-inner">
                                            <h6 className="resume-list-item-title uppercase"><i className="fa fa-star"></i> Skills</h6>
                                        </div>
                                    </div>
                                </div>
							
                                <div className="col s12 m12 l8 resume-cards-container section-padding">
                                    <div className="resume-cards">
									
                                        <div className="resume-card resume-card-0" data-index="0">
										
                                            <div className="resume-card-header">
                                                <div className="resume-card-name"><i className="fa fa-briefcase"></i> Experience</div>
                                            </div>
										
                                            <div className="resume-card-body experience">
                                                <div className="resume-card-body-container second-font">
												
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>Web Designer - </span>Envato</h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2015 - 2018</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper</p>
                                                    </div>
												
                                                    <span className="separator"></span>
												
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>Web Developer - </span>Google</h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2011 - 2015</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper</p>
                                                    </div>
													
                                                    <span className="separator"></span>
												
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>Community Manager - </span>Adobe</h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2007 - 2011</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper</p>
                                                    </div>
												
                                                </div>
                                            </div>
										
                                        </div>
								
                                        <div className="resume-card resume-card-1" data-index="1">
										
                                            <div className="resume-card-header">
                                                <div className="resume-card-name"><i className="fa fa-graduation-cap"></i> Education</div>
                                            </div>
									
                                            <div className="resume-card-body education">
                                                <div className="resume-card-body-container second-font">
												
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>Engineering Diploma - </span>Oxford University</h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2015 - 2018</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper</p>
                                                    </div>
												
                                                    <span className="separator"></span>
											
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>Masters Degree - </span>Paris University</h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2011 - 2015</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper</p>
                                                    </div>
										
                                                    <span className="separator"></span>
										
                                                    <div className="resume-content">
														<h6 className="uppercase"><span>Bachelor Degree - </span>Berlin Higher Institute</h6>
														<span className="date"><i className="fa fa-calendar-o"></i> 2007 - 2011</span>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium orci sit amet mi ullamcorper</p>
                                                    </div>
										
                                                </div>
                                            </div>
                                        </div>
								
                                        <div className="resume-card resume-card-2" data-index="2">
									
                                            <div className="resume-card-header">
                                                <div className="resume-card-name"><i className="fa fa-star"></i> Skills</div>
                                            </div>
								
                                            <div className="resume-card-body skills">
                                                <div className="resume-card-body-container second-font">
                                                    <div className="row">
									
                                                        <div className="col s6">
										
                                                            <div className="resume-content">
																<h6 className="uppercase">html</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></p>
                                                            </div>
														
                                                            <div className="resume-content">
																<h6 className="uppercase">javascript</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-half-empty"></i></p>
                                                            </div>
													
                                                            <div className="resume-content">
																<h6 className="uppercase">css</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-half-empty"></i></p>
                                                            </div>
													
                                                            <div className="resume-content">
																<h6 className="uppercase">php</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
												
                                                            <div className="resume-content">
																<h6 className="uppercase">jquery</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></p>
                                                            </div>
													
                                                            <div className="resume-content">
																<h6 className="uppercase">angular js</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
														
                                                        </div>
												
                                                        <div className="col s6">
												
                                                            <div className="resume-content">
																<h6 className="uppercase">wordpress</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-half-empty"></i></p>
                                                            </div>
													
                                                            <div className="resume-content">
																<h6 className="uppercase">joomla</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-half-empty"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
													
                                                            <div className="resume-content">
																<h6 className="uppercase">magento</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
													
                                                            <div className="resume-content">
																<h6 className="uppercase">drupal</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></p>
                                                            </div>
													
                                                            <div className="resume-content">
																<h6 className="uppercase">Adobe Photoshop</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
												
                                                            <div className="resume-content">
																<h6 className="uppercase">Adobe illustrator</h6>
																<p><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-half-empty"></i> <i className="fa fa-star-o"></i></p>
                                                            </div>
													
                                                        </div>
													
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
										
                                    </div>
                                </div>
							
                            </div>
                        </div>
                    </div>
					
                    <div className="container badges">
                        <div className="row">
                          
                            <div className="col s12 m4 l4 center-align">
                                <h3>
                                    <i className="fa fa-briefcase"></i>
									<span className="font-weight-900">4+</span>
                                </h3>
                                <h6 className="uppercase font-weight-700">Years Experience</h6>
                            </div>
                            
                            <div className="col s12 m4 l4 center-align">
                                <h3>
                                    <i className="fa fa-handshake-o"></i>
									<span className="font-weight-900">89+</span>
                                </h3>
                                <h6 className="uppercase font-weight-700">Done Projects</h6>
                            </div>
                 
                            <div className="col s12 m4 l4 center-align">
                                 <h3>
                                    <i className="fa fa-heart-o"></i>
									<span className="font-weight-900">77+</span>
                                </h3>
                                <h6 className="uppercase font-weight-700">Happy customers</h6>
                            </div>
                        
                        </div>
                    </div>
				
                </div>
           
                <img alt="close" src="images/close-button.png" className="bl-icon-close" />
            </div>

)
}

export default about1