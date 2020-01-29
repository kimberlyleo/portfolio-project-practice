import React from 'react';
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row
} from 'reactstrap';


const ProjectShow = (props) => {
  // let projects = props.project
  // let id = props.params.id
  // let card-show-spec = {max-width: "300px"}
  let project = props.projects.find((project) => project.id == props.params.id)

  return (
    <Container>
      <Row>
        <Col md= "6">
          <Card className= "card-show">
            <CardImg className= "card-img"  src={project.image}  alt="Project Image" />
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
              <CardSubtitle>{project.description}</CardSubtitle>
              <Row>
                <Col md="6" >
                  <Button href= {"https://github.com/kimberlyleo/" + project.name} target = "blank" alt= "link to project code" > {project.name} Code Base</Button>
                </Col>
                <Col md="6">
                  <Button href="/projects" alt= "back button" > Back </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectShow;
