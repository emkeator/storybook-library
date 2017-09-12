import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <a href="http://localhost:3001/auth" className="App-intro">
           <button>Authenticate</button> 
        </a>
      </div>
    );
  }
}

export default App;
