import axios from 'axios'
import { browserHistory} from 'react-router'

const URL='http://localhost:3000/api/v1'

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

