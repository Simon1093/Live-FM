import React, { Component } from 'react';
import {Route,NavLink, BrowserRouter as Router, Switch} from "react-router-dom";

import "./assets/css";

import Home from "./src/containers/Home";
import Stuff from "./src/containers/Stuff";
import Contact from "./src/containers/Contact";

class App extends Component {
    render() {
        return (
          <Router>
            <div>
              <h1>Simple SPA</h1>
              <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
              <div className="content">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
              </div>
            </div>
          </Router>
        );
    }
}

export default App;
