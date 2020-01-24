import React from 'react'
import projectobjects from './project-objects.js';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';



const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
        <div>
          {this.projectobjects.map((project, index) => {
            return (
            <Card>
              <CardImg top width="100%" src={project.image} alt="Card image cap" />
              <CardBody>
              <CardTitle>{project.name}</CardTitle>
              <CardSubtitle>{project.description}</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
              </CardBody>
            </Card>
          )
          }
          )}
        </div>
    </div>
  )

};

export default Projects;
