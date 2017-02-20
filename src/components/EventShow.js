import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { updateCurrentEvent } from '../actions'
import moment from "moment"


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
          <h3> Date: {moment(event.date).format("MMM Do YYYY")} </h3>
          <h3> Start Time: {moment.utc(event.start_time).format('LT')} </h3>
          <h3> End Time: {moment.utc(event.end_time).format('LT')} </h3>
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
