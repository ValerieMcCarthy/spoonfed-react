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
    this.props.updateCurrentTemplate(this.props.params.id)
  }


  // updateCurrentTemplate(){
  //     let curr = this
  //     axios.get(`http://localhost:3000/api/v1/party_templates/${curr.props.params.id}`).then(response => curr.setState({
  //       currentTemplate: response.data
  //       }))
  // }

  handleClick(event, template){
    debugger
  }


  render() {
    let template = this.props.template

    if (!template || !template.user) {
      return(<div> Sorry, not found! </div>)
    } else {
       return(
        <div>
          <h1> { template.title } </h1>
          <h4> Description: {template.description} </h4>
          <h4> Target Age Range: {template.min_age} - {template.max_age}</h4>
          <h4> Party Template Creator: {template.user.name} </h4>
          <Link to={`/parties/new?id=${template.id}`} params={{id: template.id}}>Clone</Link>
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
