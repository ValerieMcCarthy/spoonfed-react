import React from 'react'
import UserSignUp  from './components/UserSignUp'
import UserLogin  from './components/UserLogin'
import App from './components/App'
import { Route } from 'react-router'
import PartyTemplateList from './components/PartyTemplateList'
import PartyTemplateShow from './components/PartyTemplateShow'
import PartyTemplateNew from './components/PartyTemplateNew'
import UserShow from './components/UserShow'


export default (

<Route path='/' component={App} >
	<Route path='signup' component={UserSignUp} />
	<Route path='login' component={UserLogin} />
  <Route path='parties' component={PartyTemplateList}  />
	<Route path='parties/new' component={PartyTemplateNew} handler={PartyTemplateShow}/>
  <Route path='parties/:id' component={PartyTemplateShow} />
  <Route path='users/:id' component={UserShow} />

</Route>

)
