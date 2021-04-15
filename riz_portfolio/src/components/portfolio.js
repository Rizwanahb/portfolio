import React from 'react';
import { Col, Card, CardImg, CardTitle, CardDeck, CardBody, Container} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase} from "@fortawesome/free-solid-svg-icons";
import Portfolioimg1 from "../images/volvorace.png";
import Portfolioimg2 from "../images/geotema.png";
import Portfolioimg3 from "../images/lax.png";



const portfolio = () => {
  return (

    <div className="portfolio" id="portfolio">

      <h1 className="text-center text-white p-5">PORT<span className="text-warning">FOLIO</span></h1>
      <Col sm="12">  <hr className="line bg-warning"></hr></Col>

      <Container className="p-5" fluid={true}>
        <div className="row">
          <CardDeck className="mb-5 p-5">
            <Card color="warning">
              <CardImg top src={Portfolioimg1} />
              <CardBody>
                <CardTitle tag="h5">Volvo Ocean Race Project</CardTitle>
                <a href="https://github.com/Rizwanahb" target="_blank" className="btn btn-outline-light">See Profile <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></a>
              </CardBody>
            </Card>

            <Card color="warning">
              <CardImg top src={Portfolioimg2} />
              <CardBody>
                <CardTitle tag="h5">GEO Tema Project</CardTitle>
                <a href="https://github.com/Rizwanahb/WpfGeoTema" target="_blank" className="btn btn-outline-light">See Profile <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></a>
              </CardBody>
            </Card>

            <Card color="warning">
              <CardImg top src={Portfolioimg3} />
              <CardBody>
                <CardTitle tag="h5"> CRUD-interface in WPF Project</CardTitle>
                <a href="https://github.com/Rizwanahb/FilmWebApp-med-MVC" target="_blank" className="btn btn-outline-light">See Profile <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></a>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </Container>

    </div>
  );
};

export default portfolio;