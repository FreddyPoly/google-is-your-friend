import React, { Component } from 'react';
import { Link } from "react-router-dom";

import enigmas from '../data/enigmas.json';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="Home">
        <header>
          <p>
            Home
          </p>
        </header>

        {enigmas.map((enigma) => (
          <Link to={`/enigmas/${enigma.slug}`} key={enigma.slug}>Enigmas {enigma.name}</Link>
        ))}
      </div>
    );
  }
}

export default Home;
