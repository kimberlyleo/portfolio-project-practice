import React from 'react';
import ReactDOM from 'react-dom'
import { Jumbotron, Button } from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Skills from './skills';
import Projects from './projects';
import ContactMe from './contactme';

const AboutMe = (props) => {
  return (
    <div>
      <Jumbotron >
        <h1 className="display-3">hey babies!</h1>
        <p className="lead">welcome to my portfolio</p>
        <hr className="my-2" />
        <p>code by babies, for babies</p>
      </Jumbotron>
    </div>
  )
}


export default AboutMe;
