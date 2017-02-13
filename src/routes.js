import React from 'react'
import UserSignUp  from './components/UserSignUp'
import App from './App'
import { Route } from 'react-router'


export default (

<Route path='/' component={App} >
	<Route path='signup' component={UserSignUp} />

</Route>

)