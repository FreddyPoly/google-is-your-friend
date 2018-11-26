import React, { Component } from 'react';
import { Link } from "react-router-dom";

import enigmas from '../data/enigmas.json';

const generalContainer = {
  height: '100vh',
  backgroundColor: '#BFBFBF',
};

const titleContainer = {
  display: 'flex',
  justifyContent: 'center',
};

const title = {
  fontSize: '72px',
  alignSelf: 'center',
  color: 'white',
  fontFamily: 'Noto Sans',
  fontWeight: '700',
};

const enigmasContainer = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto',
  gridTemplateRows: '120 50',
};

const enigmaLink = {
  margin: 48,
  textAlign: 'center',
  backgroundColor: 'gold',
  padding: 12,
  borderRadius: 8,
};

class Home extends Component {
  render() {
    return (
      <div className="Home" style={generalContainer}>
        <div style={titleContainer}>
          <h1 style={title}>Google is your friend</h1>
        </div>

        <div style={enigmasContainer}>
          {enigmas.map((enigma) => (
            <Link to={`/enigmas/${enigma.slug}`} key={enigma.slug} style={enigmaLink}>Enigmas {enigma.name}</Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
