import React, { Component } from 'react';
import './main.css';
import router from './router';
import Nav from './Components/Nav/Nav';
// import axios from 'axios';

class App extends Component {
  constructor() {
      super();
      this.state = {
        userOnSession: {}
      }
  }
  render() {
    return (
      <div className="App">
        <Nav/>
        {router}
      </div>
    );
  }
}

export default App;
