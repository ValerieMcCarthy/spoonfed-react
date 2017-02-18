import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './routes.js'


class App extends Component {
  render() {
    return (
      <div className="App">

      	<h1> Welcome to SpoonFed </h1>
          {this.props.children}
      </div>
    );
  }
}

export default App;
