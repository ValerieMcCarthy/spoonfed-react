import React from 'react'
import { logoutUser, checkSession } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class NavBar extends React.Component {

  componentDidMount(){
    this.props.checkSession()
  }

  handleSignOut(){
    this.props.logoutUser()
  }

  render(){
  return(
    <nav>
    <div className="nav-wrapper padding red lighten-1">
      <a href="#" className="brand-logo">SpoonFed</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {this.props.session ? <div>
      <li><a href="/login" onClick={this.handleSignOut.bind(this)}>Logout</a></li> <li><a href="collapsible.html">Profile</a></li>
      </div> : <div>
      <li><a href="/signup">Signup</a></li> <li><a href="/login">Login</a></li>
    </div>}
      </ul>
    </div>
  </nav>
  )
}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logoutUser, checkSession }, dispatch )
}

function mapStateToProps(state){
  return {
    session: state.session
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
