import React, { Component } from 'react'
import { Link } from 'react-router'

class SpecialLink extends Component {
  render() {

    const props = this.props
    return <Link {...props} />
  }
  
}

export default SpecialLink