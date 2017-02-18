import React, { Component } from 'react';
import logo from './logo.svg';
import Route from './routes.js'


class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
}

export default App;
