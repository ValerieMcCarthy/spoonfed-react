import axios from 'axios'
import { browserHistory} from 'react-router'

const URL='http://localhost:3000/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const editTemplate = (template) => {
	debugger
	return (dispatch) => {
		axios.patch( URL + `/party_templates/{template.id}`, template )
			.then( response =>  {
				dispatch( templateEdit(response.data) ),
				browserHistory.push(`/parties/${template.id}`)
				} )
	}
}

const templateEdit = (response) => {
	return { type: "SUCCESSFUL_EDIT",
						payload: response
					}
}

export const fetchTemplates = () => {
	return (dispatch) => {
		axios.get( URL + '/party_templates').then( (response) =>
			( dispatch(successfulFetch(response.data))))
	}}

function successfulFetch(response){
	return{
		type: 'FETCH_TEMPLATES',
		payload: response
	}
}


export const createUser = (user) => {
	return (dispatch) => {
		axios.post( URL + '/signup', user).then( (response) =>
			(sessionStorage.setItem('jwt', response.data.jwt),
			sessionStorage.setItem('id', response.data.id),
			dispatch(successfulLogin(response)),
			browserHistory.push('/parties'))).catch((err)=> dispatch(badLogIn(err)))
	}}

export function getUser (){
	var config = {
		headers: {'Authorization': sessionStorage.getItem('jwt')}
	}
	const response = axios.get( URL +'/users' , config)

	return{
		type: 'GET_USER',
		payload: response
	}
}

export function loginUser(user){

	return (dispatch) => {
		axios.post( URL + '/login', user).then( response => (sessionStorage.setItem('jwt', response.data.jwt),
		sessionStorage.setItem('id', response.data.id),
		dispatch(successfulLogin(response)),
			browserHistory.push('/parties')))
			.catch( (err) => dispatch(badLogIn(err)))
		}
}

function successfulLogin(response){
	return {
		type: 'LOGIN_USER',
		payload: response
	}
}

export function checkSession(){
	if (sessionStorage.jwt){
		return {
			type: 'SESSION_VERIFY'
		}
	} else {
		return {
			type: 'Ignore'
		}
	}
}

function badLogIn(err){
	return {
		type: 'GROWLER__SHOW',
  	growler: {
	    text: 'Sorry, no one by that name or with that password is on the guest list.',
	    type: 'growler--error',
	  }
 }
}

function badSignUp(err){
	return {
		type: 'GROWLER__SHOW',
		growler: {
			text: 'Error. Could not successfully add user.',
			type: 'growler--error',
		} 
	}
}

export function logoutUser(){
	sessionStorage.clear()
	return {
		type: 'LOGOUT_USER',
	}
}

export function addTemplate(template){
	return (dispatch) => {
		axios.post( URL + '/party_templates', template).then( response => (dispatch(successfulAddTemplate(response)),
			browserHistory.push(`/parties/${response.data.id}`)))
			.catch( (err) => dispatch(failedAddTemplate(err)))
		}
}

function successfulAddTemplate(response){
	return {
		type: 'ADD_TEMPLATE',
		payload: response.data
	}
}

function failedAddTemplate(err){
	return {
		type: 'ERROR_MESSAGE',
		payload: 'Could not create a new template.'
	}
}

export function updateCurrentTemplate(id){
		return (dispatch) => {
			axios.get(URL + `/party_templates/` + id).then(response => (dispatch(setTemplate(response)))).catch( (err) => dispatch(failedUpdateCurrentTemplate(err)))
		}

}

function failedUpdateCurrentTemplate(err){
	return {
		type: 'GROWLER__SHOW',
		growler: {
			text: 'Error. Could not find that party.',
			type: 'growler--error'
		} 
	}
}

function setTemplate(response){
	return {
		type: 'SET_TEMPLATE',
		payload: response.data
	}
}
export function updateCurrentEvent(id){
		return (dispatch) => {
			axios.get(URL + `/events/` + id).then(response => (dispatch(setEvent(response)))).catch( (err) => dispatch(failedUpdateCurrentEvent(err)))
		}

}

function failedUpdateCurrentEvent(err){
	return {
		type: 'GROWLER__SHOW',
		growler: {
			text: 'Could not retrieve the current event.',
			type: 'growler--error'
		} 
	}
}

function setEvent(response){
	return {
		type: 'SET_EVENT',
		payload: response.data
	}
}

export function addEvent(newevent){
	return (dispatch) => {
		axios.post( URL + '/events', newevent).then( response => (dispatch(successfulAddEvent(response)),
			checkEvent(newevent, response)))
			.catch( (err) => dispatch(failedAddEvent(err)))
		}
}


function failedAddEvent(err){
	return {
		type: 'GROWLER__SHOW',
		growler: {
			text: 'Could not successfully create a new event',
			type: 'growler--error'
		} 
	}
}

function checkEvent(newevent, response){
	debugger
	if (newevent.num_attendees === "10") {
		return browserHistory.push(`/parties`)
	} else {
		return browserHistory.push(`/events/${response.data.id}`)
		}
  }

function successfulAddEvent(response){
	return {
		type: 'ADD_EVENT',
		payload: response.data
	}
}

export function requireAuth(nextState, replace){
	if (!sessionStorage.jwt) {
		replace({
			pathname: this,
			state: { nextPathname: nextState.location.pathname }
		})
	}
}
