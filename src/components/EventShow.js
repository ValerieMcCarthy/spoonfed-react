import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { updateCurrentEvent } from '../actions'

class EventShow extends Component {

  componentDidMount(){

  }

  constructor (props){
    super(props)
    this.props.updateCurrentEvent(this.props.params.id)
  }

  handleClick(event, template){
    debugger
  }


  render() {
    let event = this.props.event

    if (!event) {
      return(<div> Sorry, not found! </div>)
    } else {
       return(
        <div>
          <h1> Title: { event.title } </h1>
          <h2> Description: {event.description} </h2>
          <h3> Number of Attendees: {event.num_attendees} </h3>
        </div>
       )
      }
  }
}

function mapStateToProps(state, ownProps){
  return {
    event: state.event
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateCurrentEvent }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow)
