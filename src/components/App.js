import React, { Component } from 'react'
import Growler     from './growlerContainer'
import NavBar from './NavBar'

export default class App extends Component {

  render(){
    return(
      <div>
        <section>
        <NavBar url="/" title="Spoonfed"/>
        <Growler shownFor="4785"/>
        {this.props.children}
       </section>
      </div>
    )
  }
}
