import React from 'react';
import {
  Nav,
  NavItem,
  NavLink as Link
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import AboutMe from './pages/aboutme.js'
import Skills from './pages/skills';
import Projects from './pages/projects';
import ContactMe from './pages/contactme';


function App() {
  return (
    <div className="App">

      <Router>
        <Nav>
          <NavItem>
            <Link href="/">About Me</Link>
          </NavItem>
          <NavItem>
            <Link href="/skills">Skills</Link>
          </NavItem>
          <NavItem>
            <Link href="/projects">Projects</Link>
          </NavItem>
          <NavItem>
            <Link href="/contactme">Contact Me</Link>
          </NavItem>
        </Nav>

        <Switch>
          <Route path="/" exact component={AboutMe} />
          <Route path="/skills/" component={Skills} />
          <Route path="/projects/" exact component={Projects} />
          <Route path="/contactme/" component={ContactMe} />
          <Route exact path="/projects/:id" render={(props) => <Projects projects={this.state.projects}/>} />
        </Switch>
      </Router>


    </div>

  );
}



export default App;
