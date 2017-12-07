import React, { Component } from 'react';

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  doSubmit() {
    this.props.addTask(this.state.text);
    this.setState({
      text: ''
    });

  }

  render() {
    return (
      <div className='input-group'>
        <input
          type='text'
          placholder='New Task'
          className='form-control'
          value={this.state.text}
          onChange={this.onChange.bind(this)} />
        <span className='input-group-btn'>
          <button
            type='button'
            className='btn btn-default'
            onClick={this.doSubmit.bind(this)}>
            +
          </button>
        </span>
      </div>
    )
  }
}

export default NewTask;
