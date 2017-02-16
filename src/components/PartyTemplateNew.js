import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'
import PartyTemplateForm from './PartyTemplateForm'
import { updateCurrentTemplate } from '../actions'



class PartyTemplateNew extends React.Component{
  componentDidMount(){
    if (this.props.location.query.id){
    this.props.updateCurrentTemplate(this.props.location.query.id)
  }
  }


  render(){
    return(
      <PartyTemplateForm template={this.props.template}/>

      )
  }

}

// function mapStateToProps(
//
// ){
//
// }

function mapStateToProps(state){
  return{
    template: state.currentPartyTemplate
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateCurrentTemplate }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyTemplateNew)
