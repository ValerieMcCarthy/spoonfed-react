import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import errorsReducer from './errorsReducer'
import partyTemplateReducer from './partyTemplateReducer'


export default combineReducers({
  partyTemplates: partyTemplateReducer,
	users: usersReducer,
	errors: errorsReducer
})
