import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { bindActionCreator } from 'redux'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { addTemplate } from '../actions'

const CLOUDINARY_UPLOAD_PRESET = 'SpoonfedPartyTemplate';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/projects/upload';



class PartyTemplateForm extends React.Component{

  componentWillReceiveProps(nextProps) {
    this.setState( nextProps.template )
  }

  constructor(props){
    super(props)
    const { 
          title, 
          description, 
          theme_category, 
          min_age, 
          max_age,
          uploadedFile,
          uploadedFileCloudinaryUrl }         = props.template 
      
    this.state = {
      title,
      description,
      theme_category,
      min_age,
      max_age,
      uploadedFile,
      uploadedFileCloudinaryUrl
    }
 }

  onImageDrop(files) {
    debugger
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

   handleImageUpload(file) {
    
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addTemplate(this.state)
  }


  handleOnChange(event){
    switch(event.target.name){
  	case  'title':
      this.setState({
        title: event.target.value
      })
      break
  	case  'description':
      this.setState({
        description: event.target.value
      })
      break
  	case  'theme_category':
      this.setState({
        theme_category: event.target.value
      })
      break
  	case  'min_age':
      this.setState({
        min_age: event.target.value
      })
      break
  	case  'max_age':
      this.setState({
        max_age: event.target.value
      })
      break
  	}
  }

  render(){
    return(
      <div>
        <h3>Make a Party Template!</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p><input placeholder='Party Template Name' type='text' onChange={this.handleOnChange.bind(this)} name='title' value={this.state.title}/></p>
          <p><input  placeholder='Description' type='text' onChange={this.handleOnChange.bind(this)} name='description' value={this.state.description}/></p>
          <p><input placeholder='Theme Category' type='text' onChange={this.handleOnChange.bind(this)} name='theme_category' value={this.state.theme_category}/></p>
          <p><input placeholder='Minimum Age' type='text' onChange={this.handleOnChange.bind(this)} name='min_age' value={this.state.min_age}/></p>
          <p><input placeholder='Maximum Age' type='text' onChange={this.handleOnChange.bind(this)} name='max_age' value={this.state.max_age}/></p>
            <div className='FileUpload'>
              <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p>Drop an image or click to select a file to upload.</p>
              </Dropzone>
            </div>
          <p><input type='submit'/></p>
          <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>}
        </div>
        </form>
      </div>

      )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { addTemplate }, dispatch )
}



export default connect(null, mapDispatchToProps)(PartyTemplateForm)
