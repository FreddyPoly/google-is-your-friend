import React, { Component } from 'react';

import { Link } from "react-router-dom";

import enigmas from '../data/enigmas.json';
import fond from '../assets/fond.jpg';

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
        <header style={{ display: 'flex', justifyContent: 'center'}}>
          <h2 style={{ fontSize: 64, color: 'white'}}>
            { currentEnigma.name }
          </h2>
        </header>

        <Link style={{position: 'absolute', top: 40, left: 20}} to='/'>Go To Home</Link>

        <$ComponentEnigma />

        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${fond})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: .65,
          position: 'absolute',
          top: 0,
          zIndex: -1,
        }}></div>
      </div>
    );
  }
}

export default Enigmas;
