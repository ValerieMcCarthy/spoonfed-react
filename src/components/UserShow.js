import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreator } from 'redux'
import axios from 'axios'
import moment from "moment"
import Dropzone from 'react-dropzone';
import request from 'superagent';

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
      let userValidate = (user.id == sessionStorage.id)
       return(
        <div className='row'>
          <div className="col s6">
          <h3> { user.name } </h3>
          <h5> Email: { user.email } </h5>
          <h5> Zip Code: { user.zipcode } </h5>
          <h5> Gender: { user.gender } </h5>
          <h5> Date of birth: { moment(user.date_of_birth).format("MMM Do YYYY") } </h5>
          <h5> Bio: { user.bio } </h5>
          </div>
          <div className="col s6">

              <div>
              {user.user_profile_picture === '' ? null :
                  <div>
                    <img className='responsive-img circle' src={user.user_profile_picture} />
                  </div>}
              </div>


          </div>

        <div>
            <br/>
            <h3> My Party Templates </h3>

            <ul>
            {user.party_templates ? (user.party_templates.map((temp, i) =>
              <li><a href={`/parties/${temp.id}`}><h5>{temp.title}</h5></a>
                <p>{temp.description}</p>
                <p>Category: {temp.theme_category}</p>
                <br/>
                </li>
              )) : null}



            </ul>
          </div>


        <div>
            <br/>
            {userValidate && <h3>My Events</h3>}
            <ul>
            {userValidate ? user.events ? (user.events.map((eve, i) =>
              <li><a href={`/events/${eve.id}`}><h5>{eve.title}</h5></a>
                <p>{eve.description}</p>
                <p>Category: {user.event_parties[i].theme_category}</p>
                <br/>
                </li>
              )) : null : null}



            </ul>
          </div>
        </div>


       )
      }
  }
}




export default UserShow
