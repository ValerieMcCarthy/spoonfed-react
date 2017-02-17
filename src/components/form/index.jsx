import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'
import { addTemplate } from '../../actions'
import Dropdown from './Dropdown'
import Label from './Label'

class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      options: ['One', 'Two', 'Three']
    }
    
  }

  render() {
    return (
      <form>
        <Dropdown 
          selectOptions={ this.state.options } 
          label='Category'
          
           />

      </form>
    )
  }

}

export default Form