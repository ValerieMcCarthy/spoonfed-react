import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { updateCurrentTemplate } from '../actions'
import Dropzone from 'react-dropzone';
import request from 'superagent';

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
      let userValidate = (template.user.id == sessionStorage.id)
       return(
        <div className='row'>
          <div className="col s6">
          <h1> { template.title } </h1>
          <p> Category: {template.theme_category} </p>
          <h4> Description: {template.description} </h4>
          <h4> Target Age Range: {template.min_age} - {template.max_age}</h4>
          <h4> Party Template Creator: {template.user.name} </h4>
          <br/>
           <div className="center">
              <div className='col s4'>
              <a href={`/parties/new?id=${template.id}`} className="waves-effect waves-light btn red-background">Clone</a>
              </div>

              <div className='col s4'>
                <a href={`/parties/${template.id}/events/new`} className="waves-effect waves-light btn red-background">Make Event</a>
               </div>
              
              <div className='col s4'>
              {userValidate ? <a href={`/parties/${template.id}/edit`} className="waves-effect waves-light btn red-background">Edit</a> : null}
              </div>
            </div>
          
          </div>
          <div className="col s6">
          {template.party_picture === '' ? null :
            <div>
              <img className='responsive-img' src={template.party_picture} />
            </div>}
          </div>
          
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
