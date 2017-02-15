import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreator } from 'redux'

class PartyTemplateShow extends Component {

  componentDidMount(){s
  }

  render() {

    if (!this.props.template) {
      return(<div> Sorry, not found! </div>)
    } else {
       return(
        <div>
          <h1> { this.props.template.title } </h1>
        </div>
       )
      }
  }
}

function mapStateToProps(state, ownProps){
  let template
  if ( state.currentPartyTemplateID ) {
        debugger
    template = state.partyTemplates.find( template => template.id == state.currentPartyTemplateID )
  } else {
       

    template = state.partyTemplates.find( template => template.id == ownProps.params.id )
     debugger
  }

  return {
    template: template
  }
}

export default connect(mapStateToProps)(PartyTemplateShow)

