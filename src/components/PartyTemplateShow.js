import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { updateCurrentTemplate } from '../actions'

class PartyTemplateShow extends Component {

  componentDidMount(){
  }

  constructor (props){
    super(props)
    if (props.templateID) {
      this.props.updateCurrentTemplate(props.templateID)
    } else {
      this.props.updateCurrentTemplate(this.props.params.id)
    }
  }

  handleClick(event, template){
  }


  render() {
    let template = this.props.template

    if (!template || !template.user) {
      return(<div />)
    } else {
       return(
        <div>
          <h1> { template.title } </h1>
          <p> Category: {template.theme_category} </p>
          <h4> Description: {template.description} </h4>
          <h4> Target Age Range: {template.min_age} - {template.max_age}</h4>
          <h4> Party Template Creator: {template.user.name} </h4>
          <Link to={`/parties/new?id=${template.id}`}>Clone</Link>
          <Link to={`/parties/${template.id}/edit`}> Edit </Link>
          <Link to={`/parties/${template.id}/events/new`}> Create an Event </Link>
        </div>
       )
      }
  }
}

function mapStateToProps(state, ownProps){
  return {
    template: state.currentPartyTemplate
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateCurrentTemplate }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyTemplateShow)
