import React, { Component } from 'react'
import NavBar from './NavBar'
import Errors from './Errors'




export default class App extends Component {
  render(){
    return(
      <div>
        <section>
        <NavBar url="/" title="Spoonfed"/>
        <Errors />
        {this.props.children}
       </section>
      </div>
    )
  }
}
