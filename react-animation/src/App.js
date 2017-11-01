import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Example from './components/Example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Example animationName='popup' />
      </div>
    );
  }
}

export default App;
