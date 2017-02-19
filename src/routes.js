import React from 'react'
import UserSignUp  from './components/UserSignUp'
import UserLogin  from './components/UserLogin'
import App from './components/App'
import { Route, Router, IndexPath, browserHistory } from 'react-router'
import PartyTemplateList from './components/PartyTemplateList'
import PartyTemplateShow from './components/PartyTemplateShow'
import PartyTemplateNew from './components/PartyTemplateNew'
import PartyTemplateEdit from './components/PartyTemplateEdit'
import UserShow from './components/UserShow'
import Form from './components/form'

import AltApp from './components/AltApp'
import AltSignUp from './components/Alt/SignUp'
// import AltPartyTemplate from './components/Alt/PartyTemplate'

export default (
  <Router history={browserHistory}>

    <Route path='/tachyoned' component={AltApp} >
      <Route path='signup' component={AltSignUp} />
    </Route>

    <Route path='/' component={App} >
    	<Route path='signup' component={UserSignUp} />
    	<Route path='login' component={UserLogin} />
      <Route path='parties' component={PartyTemplateList}  />
    	<Route path='parties/new' component={PartyTemplateNew} />
      <Route path='form' component={ Form } />
      
      <Route path='parties/:id' component={PartyTemplateShow} />
      <Route path='parties/:id/edit' component={ PartyTemplateEdit } />

      <Route path='users/:id' component={UserShow} />
    </Route>

    </Router>

)
