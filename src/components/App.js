import React, { Component } from 'react'
import  { growlerContainer }  from './growler'
import NavBar from './NavBar'
import Errors from './Errors'




export default class App extends Component {

  render(){
    return(
      <div>
        <section>
          <growlerContainer />
        <NavBar url="/" title="Spoonfed"/>
        <Errors />
        {this.props.children}
       </section>
      </div>
    )
  }
}
