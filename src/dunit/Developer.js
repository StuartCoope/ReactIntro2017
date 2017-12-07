import React, { Component } from 'react';
import TaskList from './TaskList';

class Developer extends Component {
  constructor() {
    super();
    this.state = {
      image: '//style.anu.edu.au/_anu/4/images/placeholders/person_6x8.png',
      tasks: []
    }
  }

  render() {
    return (
      <div className='col-xs-6 col-md-3'>
        <img src={ this.state.image } />
        <h3>{ this.props.name }</h3>
        <TaskList tasks={ this.state.tasks } />
      </div>
    )
  }
}

export default Developer;
