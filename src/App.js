import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import Enigmas from './pages/Enigmas';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/enigmas/" component={Enigmas} />
        </div>
      </Router>
    );
  }
}

export default App;
