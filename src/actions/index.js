import axios from 'axios'
import { browserHistory} from 'react-router'

const URL='http://localhost:3000/api/v1'

export const fetchTemplates = () => {
	const response = axios.get( URL + '/party_templates')
		.then( ( response ) => response.data )
	debugger
	return {
		type: 'FETCH_TEMPLATES',
		payload: response
	}

}

export const createUser = (user) => {
	const response = axios.post( URL + '/signup', user).then( (response) => {
			sessionStorage.setItem('jwt', response.data.jwt)
			// browserHistory.push('/parties')
			return response
	})


	return {
		type: 'CREATE_USER',
		payload: response
	}
}


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
		axios.post( URL + '/login', user).then( response => dispatch(succesfulLogin(response)))
			.catch( (err) => dispatch(badLogIn(err)))
		}
}

function succesfulLogin(response){
	return {
		type: 'LOGIN_USER',
		payload: response
	}
}

function badLogIn(err){
	return {
		type: 'ERROR_MESSAGE',
		payload: 'Error. Bad Error.' 
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
