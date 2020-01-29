import React from 'react'
import {
  Col,
  Row
} from 'reactstrap'

const Skills = (props) => {
  return (
    <div>
      <Row>
        <Col className="text-center">
        <h1>Skills</h1>
        </Col>
      </Row>

      <Row >
        <Col>
          <img src="/react-icon.svg" alt="React.js" />
        </Col>
        <Col>
          <img src="/javascript-icon.svg" alt="Javascript" />
        </Col>
        <Col>
          <img src="/ruby-icon.svg" alt="Ruby" />
        </Col>
        <Col>
          <img src="/postgresql-icon.svg" alt="Postgresql" />
        </Col>
        <Col>
          <img src="/git.svg" alt="Git/Version Control" />
        </Col>
        <Col>
          <img src="/css-icon.png" alt="CSS" />
        </Col>
        <Col>
          <img src="/html-icon.svg" alt="HTML" />
        </Col>
      </Row>
    </div>
  )
}

export default Skills;
