import React from 'react'
import UserSignUp  from './components/UserSignUp'
import UserLogin  from './components/UserLogin'
import App from './components/App'
import { Route } from 'react-router'


export default (

<Route path='/' component={App} >
	<Route path='signup' component={UserSignUp} />
	<Route path='login' component={UserLogin} />

</Route>

)
