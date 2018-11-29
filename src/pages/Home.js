import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Radium from 'radium';

import enigmas from '../data/enigmas.json';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enigmaHover: null,
    };
  }

  render() {
    return (
      <div className="Home" style={{ height: '100vh' }}>
        <div style={styles.titleContainer}>
          <h1 style={[styles.title, styles.titleFirstLine]}>Google</h1>
          <h1 style={[styles.title, styles.titleSecondLine]}>is your friend</h1>
        </div>

        <div style={styles.enigmasContainer}>
          {enigmas.map((enigma) => (
            <Link
              to={`/enigmas/${enigma.slug}`}
              key={enigma.slug}
              style={{
                margin: 48,
                textAlign: 'center',
                textDecoration: 'none',
                padding: 5,
                backgroundColor: this.state.enigmaHover === enigma.slug ? '#00ff00' : 'transparent'
              }}
              onMouseLeave={() => this.setState({ enigmaHover: null })}
              onMouseEnter={() => this.setState({ enigmaHover: enigma.slug })}>
                <span
                  style={{
                    color: this.state.enigmaHover === enigma.slug ? '#373737' : 'white',
                    fontFamily: 'Courier New',
                    fontSize: 16,
                    textDecoration: 'none',
                  }}
                  key={enigma.slug}>
                    {enigma.name}
                </span>
            </Link>
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
}

export default Radium(Home);
