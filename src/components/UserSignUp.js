import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser, getUser } from '../actions/index'
import { connect } from 'react-redux'

class UserSignUp extends Component {

	constructor (){
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		event.preventDefault()

		const user = {name: this.refs.name.value, email: this.refs.email.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value}
		this.props.createUser(user)
	}

	render(){
		return (
			<div className='row'>
			<h4 className='center'> Please create your new account here:</h4>
				<form className='col s12' onSubmit={this.handleSubmit} >
				<div className='row'>
					<div className="input-field col s6">
					<input ref='name' placeholder='Enter Name'/>
					</div>
					<div className="input-field col s6">
					<input ref='email' placeholder='Enter Email'/>
					</div>
					<div className="input-field col s6">
					<input type='password' ref='userPassword' placeholder="Enter Password"/>
					</div>
					<div className="input-field col s6">
					<input type='password' ref='passwordConfirmation' placeholder="Confirm Password"/>
					</div>
					</div>
					<button type='submit'> Submit </button>
				</form>
			</div>


			)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({createUser, getUser}, dispatch )
}

export default connect(null, mapDispatchToProps)(UserSignUp)
