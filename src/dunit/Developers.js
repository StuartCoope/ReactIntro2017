import React, { Component } from 'react';
import Developer from './Developer';

class Developers extends Component {
  render() {
    return (
      <div>
        <Developer name='Aiden' />
        <Developer name='Laura' />
        <Developer name='Hristo' />
        <Developer name='Ambra' />
      </div>
    )
  }
}

export default Developers;
