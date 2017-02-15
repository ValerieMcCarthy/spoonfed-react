import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import { bindActionCreator } from 'redux'
import axios from 'axios'

class PartyTemplateShow extends Component {

  constructor (props){
    super(props)
    this.state = {
      currentTemplate: {}
    }
    this.updateCurrentTemplate()
  }


  updateCurrentTemplate(){
      let curr = this
      axios.get(`http://localhost:3000/api/v1/party_templates/${curr.props.params.id}`).then(response => curr.setState({
        currentTemplate: response.data
        }))
  }

  handleClick(event, template){
    debugger
  }


  render() {
    let template = this.state.currentTemplate

    if (!template || !template.user) {
      return(<div> Sorry, not found! </div>)
    } else {
       return(
        <div>
          <h1> { template.title } </h1>
          <h4> Description: {template.description} </h4>
          <h4> Target Age Range: {template.min_age} - {template.max_age}</h4>
          <h4> Party Template Creator: {template.user.name} </h4>
          <Link to='/parties/new' params={{template}}>Clone</Link>
        </div>
       )
      }
  }
}

function mapStateToProps(state, ownProps){
  let template
  if ( state.currentPartyTemplateID ) {

    template = state.partyTemplates.find( template => template.id == state.currentPartyTemplateID )
  } else if (state.partyTemplates){
       template = state.partyTemplates.find( template => template.id == ownProps.params.id )
  } else {

  }




  return {
    template: template
  }
}


export default connect(mapStateToProps)(PartyTemplateShow)
