import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route,NavLink,HashRouter} from "react-router-dom";

import "./index.css";

import Home from "./src/containers/Home";
import Stuff from "./src/containers/Stuff";
import Contact from "./src/containers/Contact";

export default class App extends Component {
    render() {
        return (
          <HashRouter>
            <div>
              <h1>Simple SPA</h1>
              <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
              </div>
            </div>
          </HashRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
