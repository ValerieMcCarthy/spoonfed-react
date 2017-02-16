import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'
import PartyTemplateForm from './PartyTemplateForm'
import { updateCurrentTemplate } from '../actions'



class PartyTemplateNew extends React.Component{
  constructor(props){
    super(props)
    if (props.location.query.id ){
      debugger
    props.updateCurrentTemplate(props.location.query.id)
  }
  }


  render(){

      return <PartyTemplateForm template={this.props.template} />
    
  }

}


function mapStateToProps(state){
  return {
    template: state.currentPartyTemplate
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateCurrentTemplate }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyTemplateNew)
