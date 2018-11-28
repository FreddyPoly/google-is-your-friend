import React, { Component } from 'react';

import Radium from 'radium';

class First extends Component {
  render() {
    return (
      <div className="First">
        <div style={styles.container}>
          <h3 style={styles.title}>The answer is in the question</h3>

          <input style={styles.inputText} type="text"/>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: '#c6b251',
  },
  inputText: {
    alignSelf: 'center',
    width: '60%',
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    borderBottomWidth: 4,
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    height: 42,
  },
}

export default Radium(First);
