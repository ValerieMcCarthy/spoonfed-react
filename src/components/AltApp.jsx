import React, { Component } from 'react'
import Header from './Alt/Header.jsx'
import Errors from './Errors'
import '../css/tachyons.css'
import defaultStyles from '../utils/defaultStyles'

export default class App extends Component {
  render(){
    return(
      <div className="athelas" >
        <Header location={this.props.location}/>
        <Errors />
        <section className={defaultStyles.base.center}>
        {this.props.children}
        </section>
      </div>
    )
  }
}
