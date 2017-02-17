import React, { Component } from 'react'
import { connect } from 'react-redux'


class Errors extends Component{


  render(){
    return(
      <div className="row">
        <div className="col s4  center">
          <h4 className="waves-effect waves-light" >{this.props.errors ? this.props.errors : null}</h4>
        </div>

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
