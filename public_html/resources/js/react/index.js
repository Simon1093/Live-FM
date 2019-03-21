import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch } from "react-router-dom";

import "./assets/css/index.css";
import TopNav from './src/Layouts/TopNav';
import Home from "./src/containers/Home";
import Stuff from "./src/containers/Stuff";
import Contact from "./src/containers/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <div style={{ 'padding-top': '60px' }}>
            <div >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/stuff" component={Stuff} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
