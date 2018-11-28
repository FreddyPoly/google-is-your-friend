import React, { Component } from 'react';

class First extends Component {
  render() {
    return (
      <div className="First">
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h3 style={{textAlign: 'center', fontSize: 32, color: '#c6b251'}}>The answer is in the question</h3>

          <input style={{
            alignSelf: 'center',
            width: '60%',
            backgroundColor: 'transparent',
            borderBottomColor: 'white',
            borderBottomWidth: 4,
            borderTop: 0,
            borderRight: 0,
            borderLeft: 0,
            height: 42,
          }} type="text"/>
        </div>
      </div>
    );
  }
}

export default First;
