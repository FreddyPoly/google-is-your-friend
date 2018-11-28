import React, { Component } from 'react';
import { Link } from "react-router-dom";

import enigmas from '../data/enigmas.json';

import fond from '../assets/fond.jpg';

const titleContainer = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};

const enigmasContainer = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto',
  gridTemplateRows: '120 50',
};

const enigmaLink = {
  margin: 48,
  textAlign: 'center',
  padding: 12,
  borderRadius: 4,
  backgroundColor: '#D6BD9C',
  textDecoration: 'none',
  boxShadow: '1px 1px 1px #373737',
};

class Home extends Component {
  render() {
    return (
      <div className="Home" style={{ height: '100vh' }}>
        <div style={titleContainer}>
          <h1 style={{
            fontSize: '140px',
            alignSelf: 'center',
            color: 'white',
            fontFamily: 'Noto Sans',
            fontWeight: '500',
            marginBottom: 0,
            marginTop: 32,
          }}>Google</h1>
          <h1 style={{
            fontSize: '72px',
            alignSelf: 'center',
            color: 'white',
            fontFamily: 'Noto Sans',
            fontWeight: '700',
            marginTop: 0,
          }}>is your friend</h1>
        </div>

        <div style={enigmasContainer}>
          {enigmas.map((enigma) => (
            <Link to={`/enigmas/${enigma.slug}`} key={enigma.slug} style={enigmaLink}>{enigma.name}</Link>
          ))}
        </div>

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

export default Home;
