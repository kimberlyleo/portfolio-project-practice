import React, {Component} from 'react';
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
import ProjectShow from './pages/projectshow'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      projectobjects : [
          {id: 1,
          name: "Tic-Tac-Toe",
          image: "/Tic-Tac-Toe.jpg",
          description: "Built with React.js and CSS"
          },
          {id: 2,
          name: "Calculator",
          image: "/calculator.jpg",
          description: "Built with React.js and CSS"
          },
          {id: 3,
          name: "Text based adventure game",
          image: "/text-based-adventure-game.jpg",
          description: "Built in Ruby and and can be played directly in your terminal!"
          },
          {id: 4,
          name: "Ferm Cal",
          image: "/ferm-cal.jpg",
          description: "In-progress. Mobile app built in React native with a calender API"
          }
      ]
    }
  }
  render() {
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
          <Route exact path="/" component={AboutMe} />
          <Route path="/skills" component={Skills} />
          <Route exact path="/projects" render={(props) => < Projects projects={this.state.projectobjects} params={props.match.params} /> } />
          <Route path="/contactme" component={ContactMe} />
          <Route exact path="/projects/:id" render={(props) => <ProjectShow projects={this.state.projectobjects}
          params={props.match.params}/>} />
        </Switch>
      </Router>



    </div>

  )}
}



export default App;
