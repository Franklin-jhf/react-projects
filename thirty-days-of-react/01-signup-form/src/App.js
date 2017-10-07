import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import logo from './logo.svg';
import './App.css';

import Input from './Input';
import Modal from './Modal';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mounted: false
    }
  }

  componentDidMount() {
    this.setState({
      mounted: true
    })
  }

  getInitialState() {
      return { mounted: false };
  };

  handleSubmit(e) {
    this.setState({ mounted: false });
    e.preventDefault();
  }

  render() {

    let child;
    if (this.state.mounted) {
      child = (<Modal onSubmit={this.handleSubmit} />);
    }


    return (
      <div className="app">
        <ReactCSSTransitionGroup
          transitionName='example'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
