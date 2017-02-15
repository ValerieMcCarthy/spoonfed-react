import axios from 'axios'
import { browserHistory} from 'react-router'

const URL='http://localhost:3000/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
// export const fetchTemplates = () => {
// 	return(dispatch) => {
// 		axios.get(URL + '/party_templates').then((response) => (dispatch((response) => return{type:'FETCH_TEMPLATES', payload: response.data})))
// 	}
// }


export const fetchTemplates = () => {
	return (dispatch) => {
		axios.get( URL + '/party_templates').then( (response) =>
			(dispatch(successfulFetch(response.data))))
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
		type: 'ERROR_MESSAGE',
		payload: 'Error. Bad Error.'
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
			.catch( (err) => dispatch(badLogIn(err)))
		}
}

function successfulAddTemplate(response){
	return {
		type: 'ADD_TEMPLATE',
		payload: response.data
	}
}
	// const response = axios.post( URL + '/login', user).then( (response) => {
	// 		sessionStorage.setItem('jwt', response.data.jwt)
	// 		return {
	// 			type: 'LOGIN_USER',
	// 			payload: response
	// 		}
	// 	}).catch(function () {
	// 	console.log(error)
	// 	return {
	// 		type: 'ERROR_MESSAGE',
	// 		payload: "error"
	// 	}
	// })



// }
