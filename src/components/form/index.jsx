import React, { Component } from 'react'

import Dropdown from './Dropdown'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: ['One', 'Two', 'Three'],
      categories: ['One', 'Two', 'Three']
    }
    
  }

  render() {
    const dropdownStyles = {
      
      label: 'a-great-label another-one-too',
      select: 'a-great-select',
      option: 'a-great-option'
    }
    
    return (
     
      <form>
        <Dropdown 
          selectOptions={ this.state.options } 
          label='Category'
          styles= { dropdownStyles }
        />
      </form>
    )
  }

}

export default Form

