import React from "react";
import {Button} from 'react-bootstrap';
import {Progress, Row, Col, Container, Form, FormGroup, Label, Input} from 'reactstrap';
import 'holderjs';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faFilePdf, faStar} from "@fortawesome/free-solid-svg-icons";





const about = () => {
    return (
      <div className="bgcolor">
        <Container className="p-5" fluid={true}>
        <Row>
          <Col sm="4">
      
          <div className="fakeimg"></div> 
      
      </Col>
        <Col sm="8">
         <h1 className="text-center"><a className="text-white">ABOUT</a> <a className="text-warning">ME</a></h1>                        
         <hr class="line bg-warning"></hr>
      
      
          <Row className="mb-3">            
                            <FontAwesomeIcon className="icon"  icon={faUser} size="2x"/>                         
                                   <h4 className="align mb-3">Personal info</h4>          
            </Row>
         <p className="text-white">I am a Software Engineer intern, who wants to work with a company that deals in the development of new technologies 
      and advances my skills as a developer while also having a hand in developing the innovations of tomorrow.</p>

      <Container className="p-5 text-white">
        <Row className="mb-3">
          <Col sm="6">
        
          <li>First Name: Rizwanah</li>
                                        <li>Last Name: Mustafa</li>
                                        <li>Date of birth: 12 june 1981 </li>
                                        <li>Nationality: Pakistani</li>
					<li>Marital Status: Married</li>
          
      </Col>
        <Col sm="6">
                                        <li>Phone: +45 42220032</li>
                                        <li>Address: Copenhagen, Denmark</li>
                                        <li>Email: rizwanah_batool@hotmail.com</li>
                                        <li>Languages: English - Urdu - Danish</li>
					                              <li>LinkedIn: <a href="https://www.linkedin.com/in/rizwanah-mustafa/"> rizwanah-mustafa</a></li>
          
      </Col>
					
      </Row>
</Container>
                  <Button variant="outline-warning">
									Download Resume <FontAwesomeIcon  icon={faFilePdf}></FontAwesomeIcon>
                  </Button>

                  <hr class="line bg-warning"></hr>
 
                  <Row className="mb-3">                 
                            <FontAwesomeIcon className="icon pb-6"  icon={faStar} size="2x"/>                         
                                   <h4 className="align mb-1">Skills</h4>  
    
    <Container className="p-5  text-white">
    <Row className="mb-1">
    <Col sm="6">
      <Container className="p-2  text-white">
            <Progress animated color="warning" value={50}>50%</Progress>
            C#.NET    
      </Container>    

      <Container className="p-2 text-white">
            <Progress animated color="warning" value={80}>80%</Progress>
            HTML     
      </Container>   

      <Container className="p-2 text-white">
            <Progress animated color="warning" value={75}>75%</Progress>
            CSS      
      </Container>   

      <Container className="p-2 text-white">
            <Progress animated color="warning" value={50}>50%</Progress>
            MSSQL      
      </Container> 
    </Col>
    <Col sm="6">
      <Container className="p-2 text-white">
            <Progress animated color="warning" value={60}>60%</Progress>
            JavaScript      
      </Container>       

       <Container className="p-2 text-white">
            <Progress animated color="warning" value={75}>75%</Progress>
            PHP      
      </Container> 

       <Container className="p-2 text-white">
            <Progress animated color="warning" value={70}>70%</Progress>
            React      
      </Container>  
      <Container className="p-2 text-white">
            <Progress animated color="warning" value={75}>75%</Progress>
            Bootstrap 4      
      </Container> 
      </Col>  
      </Row>  
      </Container>                                 
            </Row>

            
      </Col>
						
</Row>
</Container>

<div className="bgcolor">
<h1 className="text-center"><a className="text-white">GET IN</a> <a className="text-warning">TOUCH</a></h1>                        
         <hr class="line bg-warning"></hr>
      <Container className="p-5" fluid={true}>
      <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button>Sign in</Button>
    </Form>

      </Container>
</div>

</div>




    )
}

export default about