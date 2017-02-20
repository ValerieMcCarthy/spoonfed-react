import React from 'react'
import { Link } from 'react-router'



export default class Portal extends React.Component{

  render(){
    return(
      <div>
        <Link to={`/parties/`} onClick={this.props.handleDelete}>Yes</Link>
        <Link to={`/parties/${this.props.templateId}/`} onClick={this.props.handleClick}>No</Link>
      </div>
    )
  }


}
