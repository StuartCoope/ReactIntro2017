import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Developers from './dunit/Developers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dun it ✅</h1>
        </header>
        <div className="App-intro">
          <Developers />
        </div>
      </div>
    );
  }
}

export default App;
