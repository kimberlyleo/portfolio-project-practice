import React from 'react'
import {
  Container,
  Col,
  Row
} from 'reactstrap'

const ContactMe = (props) => {
  return (
    <div>
      <Container className= "justify-content">
        <Row >
          <Col className="text-center">
            <h1>Contact Me</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h5>kimeleonard@gmail.com</h5>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a href="http://www.github.com/kimberlyleo" target="blank"> <h5> Github </h5> </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a href="http://www.linkedin.com/in/kimberly-leo" target="blank"><h5>Linkedin</h5></a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactMe;
