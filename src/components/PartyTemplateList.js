import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchTemplates } from '../actions'

class PartyTemplateList extends React.Component{
  componentDidMount(){
    this.props.fetchTemplates()
  }

  showTemplate(templateID){

  }

  render(){
    debugger
    const templates = this.props.partyTemplates
    
    return(
      <ul>
        <h2> All the delightful parties you could be throwing</h2>
        { templates.map( (template, index) => { return (
          <li key={index} onClick={this.showTemplate.bind(this, template.id )}> 
            < Link to={`/party-templates/${template.id}`} >
              { template.name }
            </ Link >
          </li> 
        )
        })}
      </ul>
      )
  }

  
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchTemplates }, dispatch )  
}

function mapStateToProps(state){
  return {
    partyTemplates: state.partyTemplates
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyTemplateList)