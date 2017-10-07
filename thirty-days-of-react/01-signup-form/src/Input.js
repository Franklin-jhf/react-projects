import React, { Component } from 'react';

export class Input extends Component {
  render() {
    return (
      <div className='input'>
        <input
          id={this.props.id}
          autoComplete='false'
          required
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
        <label htmlFor={this.props.id}></label>
      </div>
    );
  }
}

export default Input;