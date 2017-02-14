import React from 'react'
import UserSignUp  from './components/UserSignUp'
import UserLogin  from './components/UserLogin'
import App from './components/App'
import { Route } from 'react-router'
import PartyTemplateList from './components/PartyTemplateList'


export default (

<Route path='/' component={App} >
	<Route path='signup' component={UserSignUp} />
	<Route path='login' component={UserLogin} />
  <Route path='party-template-list' component={PartyTemplateList} />

</Route>

)
