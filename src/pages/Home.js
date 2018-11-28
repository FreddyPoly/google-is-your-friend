import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Radium from 'radium';

import enigmas from '../data/enigmas.json';

import fond from '../assets/fond.jpg';

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

        <div style={styles.background}></div>
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
    color: 'white',
    fontFamily: 'Noto Sans',
    fontWeight: '500',
  },
  titleFirstLine: {
    fontSize: '140px',
    marginBottom: 0,
    marginTop: 32,
  },
  titleSecondLine: {
    fontSize: '72px',
    marginBottom: 32,
    marginTop: 0,
  },
  enigmasContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    gridTemplateRows: '120 50',
  },
  enigmaLink: {
    margin: 48,
    textAlign: 'center',
    padding: 12,
    borderRadius: 4,
    backgroundColor: '#D6BD9C',
    textDecoration: 'none',
    boxShadow: '1px 1px 1px #373737',
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${fond})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: .9,
    position: 'absolute',
    top: 0,
    zIndex: -1,
  }
}

export default Radium(Home);
