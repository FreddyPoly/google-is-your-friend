import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Radium from 'radium';

import enigmas from '../data/enigmas.json';

class Home extends Component {
  render() {
    return (
      <div className="Home" style={{ height: '100vh' }}>
        <div style={styles.titleContainer}>
          <h1 style={[styles.title, styles.titleFirstLine]}>Google</h1>
          <h1 style={[styles.title, styles.titleSecondLine]}>is your friend</h1>
        </div>

        <div style={styles.enigmasContainer}>
          {enigmas.map((enigma) => (
            <Link to={`/enigmas/${enigma.slug}`} key={enigma.slug} style={styles.enigmaLink}>{enigma.name}</Link>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    alignSelf: 'center',
    color: '#00ff00',
    fontFamily: 'Courier New',
    fontWeight: '500',
  },
  titleFirstLine: {
    fontSize: '140px',
    marginBottom: 0,
    marginTop: 32,
  },
  titleSecondLine: {
    fontSize: '60px',
    marginBottom: 32,
    marginTop: 0,
  },
  enigmasContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    gridTemplateRows: '120 50',
  },
  enigmaLink: {
    color: 'white',
    margin: 48,
    textAlign: 'center',
    textDecoration: 'none',
  },
}

export default Radium(Home);
