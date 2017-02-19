import React from 'react'
import Link from '../base/Link'
import { logoutUser, checkSession } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import roboStyle from '../../utils/stylizer'



class Header extends React.Component {

  componentDidMount(){
    this.props.checkSession()
  }

  handleSignOut(){
    this.props.logoutUser()
  }

  showMenuItem(item, session) {
    if( item.loggedIn && !session ){
      return false
    } else if (item.loggedOut && session ) {
      return false
    } 
      return true
  }



  
  render() {
    const tweakedStyles = { 
    
    },
          blockStyles = roboStyle(tweakedStyles, 'header'),
          navLinks = [
      {
        title: 'Home',
        path: '/' 
      },
      {
        title: 'Browse Parties',
        path: '/parties'
      },
      {
        title: 'How it Works',
        path: '/about'
      },
      {
        title: 'Sign Up',
        path: '/tachyoned/signup',
        loggedOut: true
      },
      {
        title: 'Log In',
        path: '/login',
        loggedOut: true,
      },
      {
        title: 'Log Out',
        path: '/logout',
        loggedIn: true,
        action: this.handleSignOut.bind(this)
      }
      ]

    return(
      <nav className={ blockStyles('nav') } >
        <Link to='/' className={ blockStyles('logoLink') }>
          SpoonFed
        </Link>
        <div className={ blockStyles( 'linkNav' )} >
          { navLinks.map( (item, index) => {

              let active = ( item.path === this.props.location.pathname ? 'linkCurrent' : '' )
              let linkPosition = (item.index === ( navLinks.length - 1) ? 'linkLast' : 'link')
              if( this.showMenuItem(item, this.props.session) ){
                return (
                  <Link key={index} 
                        to={item.path} 
                        title={item.title} 
                        onClick={item.action} 
                        className={ blockStyles( linkPosition, active )} >
                    {item.title}
                  </Link>
              )
              }
              return '' 
            })}
        
          
         
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
    session: state.session,
    user_id: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
