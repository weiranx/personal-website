import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from "./component/Nav.js";
import Main from './component/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App row">
          <Nav />
          <Main />

      </div>
    );
  }
}

export default App;
