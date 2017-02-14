import React, { Component } from 'react'
import { connect } from 'react-redux'

class Errors extends Component{
  render(){
    return(
      <div className='error'>
        {this.props.errors ? this.props.errors : null}
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps)(Errors)
