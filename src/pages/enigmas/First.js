import React, { Component } from 'react';

import Radium from 'radium';

class First extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: '',
    };
  }

  _handleSubmit = () => {
    if (this.state.response.toLowerCase() === 'in the answer') {
      alert('gagné');
    }
  }

  _respond = (event) => {
    this.setState({ response: event.target.value });
  }

  render() {
    return (
      <div className="First">
        <div style={styles.container}>
          <h3 style={styles.title}>The answer is in the question</h3>

          <form onSubmit={this._handleSubmit}>
            <input style={styles.inputText} type="text" value={this.state.response} onChange={this._respond} />

            <input type="submit" value="Valider" />
          </form>
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
    fontSize: 32,
    color: 'white',
    caretColor: 'white',
    caretWidth: 4,
    ':focus': {
      outline: 'none'
    }
  },
}

export default Radium(First);
