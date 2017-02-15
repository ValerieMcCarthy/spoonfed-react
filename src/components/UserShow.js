import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreator } from 'redux'
import axios from 'axios'

class UserShow extends Component {

  constructor (props){
    super(props)
    this.state = {
      user: {}
    }
    this.findUser()
  }


  findUser(){
      let curr = this
      axios.get(`http://localhost:3000/api/v1/users/${curr.props.params.id}`).then(response => curr.setState({
        user: response.data
        }))
  }



  render() {
    let user = this.state.user

    if (!user) {
      return(<div> Sorry, not found! </div>)
    } else {
       return(
        <div>
          <h1> { user.name } </h1>
        </div>
       )
      }
  }
}


export default UserShow
