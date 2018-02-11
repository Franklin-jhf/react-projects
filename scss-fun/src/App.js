import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Sun from './components/Sun/Sun';
import RainbowWheel from './components/RainbowWheel/RainbowWheel';

import logo from './logo.svg';
import './App.css';
import './global/Custom.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RainbowWheel></RainbowWheel>
        <Sun></Sun>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
