import React from 'react'
import {Link} from 'react-router-dom';
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from 'reactstrap';

const Projects = (props) => {
    return (
      <Container>
        <div>
          <Row classname="justify-content">
            <Col md="5">
               {props.projects.map((project, index) => {
                 return(
                    <Card key={index} className="cards-for-index">
                      <CardImg  className= "card-img" top width="100%" src={project.image} alt="Card image cap" />
                      <CardBody>
                      <CardTitle>{project.name}</CardTitle>
                      <CardSubtitle>{project.description}</CardSubtitle>
                      <Link to={"/projects/" + project.id}><Button>View More</Button></Link>
                      </CardBody>
                    </Card>
                )
              }
              )}
              </Col >
              </Row>
          </div>
        </Container>

      )

};

export default Projects;
