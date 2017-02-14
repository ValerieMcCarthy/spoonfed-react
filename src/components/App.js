import React, { Component } from 'react'
import NavBar from './NavBar'
import Errors from './Errors'

export default class App extends Component {
  render(){
    return(
      <div>
        <NavBar url="/" title="Spoonfed"/>
        <Errors />
        {this.props.children}
      </div>
    )
  }
}
