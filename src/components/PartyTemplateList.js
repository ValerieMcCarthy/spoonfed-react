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
    
    const templates = this.props.partyTemplates
    
    return(
      <div>

        <h3 className='center'> Delightful parties you could be throwing</h3>
      
      <div className="row">
        { templates.map( (template, index) => {
      return (
      
        <div className="col s4" key={index}>
          <div className="card purple darken-2">
            <div className="card-content white-text">
              <span className="card-title">{template.title}</span>
              <p>{template.description}</p>
              <br/>
              <p>Category: {template.theme_category}</p>
            </div>
            <div className="card-action">
              < Link to={`/parties/${template.id}`} >
              Learn More
            </ Link >
              <a href="#"></a>
            </div>
          </div>
        </div> )} )}
      </div>
     
       {this.props.children}
      </div>
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