import React, { Component } from 'react';

import Task from './Task';
import NewTask from './NewTask';

class TaskList extends Component {

  constructor() {
    super();
    this.state = {
      tasks: [],
    }
  }

  render() {
    return (
      <div className='list-group'>
        {this.state.tasks.map(this.renderTask)}
        <NewTask addTask={this.addTask.bind(this)} />
      </div>
    )
  }

  addTask(title) {
    const newTasks = this.state.tasks.concat([title]);

    this.setState({
      tasks: newTasks
    });
  }

  renderTask(text, i) {
    return <Task key={i} task={text} />;
  }
}

export default TaskList;
