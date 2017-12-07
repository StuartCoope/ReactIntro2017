import React, { Component } from 'react';

class Task extends Component {

  constructor() {
    super();
    this.state = {
      done: false
    }
  }

  render() {
    const titleStyle = {}

    if (this.state.done === true) {
      titleStyle.textDecoration = 'line-through';
    }

    return (
      <div className='list-group-item'>
       <span style={titleStyle}>{this.props.task}</span>
       <button style={{ float: 'right' }}
                className='btn btn-default btn-xs'
                onClick={this.markDone.bind(this)}>
            Done
        </button>
      </div>
    )
  }

  markDone() {
    this.setState({
      done: true
    });
  }

}

export default Task;
