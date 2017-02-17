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
    debugger

    if (!user) {
      return(<div> Sorry, not found! </div>)
    } else {
       return(
        <div>
          <h3> { user.name } </h3>
          <h5> Email: { user.email } </h5>
          <h5> Zip Code: { user.zipcode } </h5>
          <h5> Gender: { user.gender } </h5>
          <h5> Date of birth: { user.date_of_birth } </h5>
          <h5> Bio: { user.bio } </h5>
          <h5> Profile Picture: { user.profile_picture } </h5>


        </div>
       )
      }
  }
}

  // t.string   "email"
  //   t.string   "password_digest"
  //   t.integer  "zipcode"
  //   t.datetime "date_of_birth"
  //   t.string   "gender"
  //   t.text     "bio"
  //   t.string   "profile_picture"


export default UserShow
