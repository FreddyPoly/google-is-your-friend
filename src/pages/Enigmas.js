import React, { Component } from 'react';
import Radium from 'radium';

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
      <div className="Enigmas" style={styles.container}>
        <header style={styles.containerHeader}>
          <h2 style={styles.title}>
            { currentEnigma.name }
          </h2>
        </header>

        <Link style={styles.btnBack} to='/'>Go To Home</Link>

        <$ComponentEnigma />
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100vh',
  },
  containerHeader: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Courier New',
    fontSize: 42,
    color: '#00ff00',
    textAlign: 'center',
  },
  btnBack: {
    fontFamily: 'Courier New',
    color: 'white',
    textDecoration: 'none',
    position: 'absolute',
    top: 40,
    left: 20,
  },
};

export default Radium(Enigmas);
