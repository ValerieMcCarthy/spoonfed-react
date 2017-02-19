import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser, getUser } from '../actions/index'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'SpoonfedPartyTemplate';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/projects/upload';

class UserSignUp extends Component {

	constructor (){
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			uploadedFile: null,
      		uploadedFileCloudinaryUrl: ''
		}
	}

	onImageDrop(files) {
    
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
    
  }

   handleImageUpload(file) {
    const curr = this
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        
        curr.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
         
        });
      
      }
    });

  }

	handleSubmit(event){
		event.preventDefault()

		const user = {name: this.refs.name.value, email: this.refs.email.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value, zipcode: this.refs.zipcode.value, gender: this.refs.gender.value, date_of_birth: this.refs.dob.value, bio: this.refs.bio.value, user_profile_picture: this.state.uploadedFileCloudinaryUrl}
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
						<div className="input-field col s6">
							<input ref='zipcode' placeholder="Zip Code"/>
						</div>
						<div className="input-field col s6">
							<input ref='gender' placeholder="Gender"/>
						</div>
						<div className="input-field col s6">
							<input ref='dob' placeholder="Date of birth: FORMAT: YYYY-MM-DD"/>
						</div>
						<div className="input-field col s6">
							<input ref='bio' placeholder="Bio"/>
						</div>
						<div className='FileUpload input-field col s6'>
              				<Dropzone
                				multiple={false}
                				accept="image/*"
                				onDrop={this.onImageDrop.bind(this)}>
                				<p>Drop an image or click to select a file to upload.</p>
              				</Dropzone>
            			</div>
					</div>
					<button type='submit'> Submit </button>
				</form>
				<div>
              {this.state.uploadedFileCloudinaryUrl === '' ? null :
                  <div>
                    <img src={this.state.uploadedFileCloudinaryUrl} />
                  </div>}
              </div>
			</div>


			)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({createUser, getUser}, dispatch )
}

export default connect(null, mapDispatchToProps)(UserSignUp)
