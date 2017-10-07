import React, { Component } from 'react';
import Input from './Input';

export class Modal extends Component {
  render() {
    return (
      <div className='modal'>
        <form
          onSubmit={this.props.onSubmit}
          className='modal-form'>
          <Input
            id='name'
            type='text'
            placeholder='Franklin Floresca' />
          <Input
            id='password'
            type='password'
            placeholder='password' />
          <button>
            Log in <i className='fa fa-fw fa-chevron-right'></i>
          </button>
        </form>
      </div>
    );
  }
}


export default Modal;