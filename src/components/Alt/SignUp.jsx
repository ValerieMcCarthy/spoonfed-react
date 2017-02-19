import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser } from '../../actions/index'
import { connect } from 'react-redux'
import defaultStyles from '../../utils/defaultStyles'

import { Input, Submit } from '../form'

class SignUpForm extends Component {

  constructor (){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateField = this.updateField.bind(this)
    this.state = {
      user: {}
    }
  }

  handleSubmit(event){
    event.preventDefault()
    this.validateForm()
  }

  validateForm() {
    // We could do some validations here
    this.props.createUser( this.state.user )
  }

  updateField(inputKey) {
    // This function gets attached to an 'onChange' event for the child inputs. When a user types, the form's state updates. For example, if you type your name, user.name gets updated in the form's state. Then, when it comes time to submit, we just pass along the form's state.

    const that = this

    return function(event){
        that.setState({
         user: {...that.state.user, [inputKey]: event.target.value }
        })
    }
  }

  render(){

    // When you want to pass class names to a child component, you can add a prop `styles`, and pass in an object or string. If you pass in a string, that class will get added to every child prop.
    // If you pass in an object, each key will get mapped to the corresponding HTML element
    // Everything gets assigned default classes (found in /utils/defaultStyles). If you'd prefer to override that, just add a key/value pair of overRide: true

    const newStylesWithOutOverRide = {
      input: 'hello there wonderful',
      label: 'not another label',
      // overRide: true
    }

    const exampleWithString = 'This is extra hip'

    
    return(
      <form onSubmit={this.handleSubmit} className={defaultStyles.base.form} >
        <Input label="Name"
               onChange={ this.updateField('name')}
               styles={ newStylesWithOutOverRide } />
        <Input label="Email"
               onChange={ this.updateField('email')} />
        <Input label="Password"
               type="password"
               onChange={ this.updateField('password')} />
        <Input label="Confirm Password"
               type="password"
               onChange={ this.updateField('password_confirmation') } />
        <Submit value="Join Us!" />
      </form>

      )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser }, dispatch )
}

export default connect(null, mapDispatchToProps)(SignUpForm)