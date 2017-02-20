import React from 'react'
import UserSignUp  from './components/UserSignUp'
import UserLogin  from './components/UserLogin'
import App from './components/App'
import Welcome from './components/Welcome'
import { Route, IndexPath, IndexRedirect } from 'react-router'
import PartyTemplateList from './components/PartyTemplateList'
import PartyTemplateShow from './components/PartyTemplateShow'
import PartyTemplateNew from './components/PartyTemplateNew'
import PartyTemplateEdit from './components/PartyTemplateEdit'
import UserShow from './components/UserShow'
import EventNew from './components/EventNew'
import EventShow from './components/EventShow'
import { requireAuth, requireAuthRedirectToShow, requireAuthForProfile } from './actions/'


export default (

<Route path='/' component={App} >
	<IndexRedirect to='welcome' />
	<Route path='welcome' component={Welcome} />
	<Route path='signup' component={UserSignUp} onEnter={requireAuthForProfile} />
	<Route path='login' component={UserLogin} onEnter={requireAuthForProfile}/>
	<Route path='parties' component={PartyTemplateList} />
	<Route path='parties/new' component={PartyTemplateNew} onEnter={requireAuth.bind('/parties')} />

	  <Route path='parties/:id' component={PartyTemplateShow} />
	  <Route path='parties/:id/edit' component={ PartyTemplateEdit } onEnter={requireAuthRedirectToShow} />
	  <Route path='parties/:id/events/new' component={ EventNew } onEnter={requireAuthRedirectToShow} />
	  <Route path='events/:id' component={ EventShow } />


	  <Route path='profile' component={UserShow} onEnter={requireAuth.bind('/')} />
	  <Route path='users/:id' component={UserShow} />


</Route>

)
