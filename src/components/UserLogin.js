import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser, getUser, loginUser } from '../actions/index'
import { connect } from 'react-redux'


class UserLogin extends Component {

	constructor (){
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		event.preventDefault()

		const user = {email: this.refs.email.value, password: this.refs.userPassword.value}
		// this.props.createUser(user)
		this.props.loginUser(user)
	}

	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit} >
					<input ref='email' placeholder='Enter Email'/>
					<input type='password' ref='userPassword' placeholder="Enter Password"/>
					<button type='submit'> Submit </button>
				</form>
			</div>


			)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({createUser, getUser, loginUser}, dispatch )
}

export default connect(null, mapDispatchToProps)(UserLogin)
