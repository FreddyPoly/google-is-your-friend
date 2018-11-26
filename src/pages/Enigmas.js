import React, { Component } from 'react';

import { Link } from "react-router-dom";

import enigmas from '../data/enigmas.json';

import * as components from './enigmas/index';

class Enigmas extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const slug = this.props.location.pathname.split('/')[2];
    const currentEnigma = enigmas.filter(e => e.slug === slug)[0];
    const $ComponentEnigma = components[currentEnigma.component];

    return (
      <div className="Enigmas">
        <header>
          <p>
            Enigmas
          </p>
        </header>

        <Link to='/'>Go To Home</Link>

        <$ComponentEnigma />
      </div>
    );
  }
}

export default Enigmas;
