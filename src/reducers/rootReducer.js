import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import errorsReducer from './errorsReducer'
import partyTemplateReducer from './partyTemplateReducer'
import sessionsReducer from './sessionsReducer'


export default combineReducers({
  partyTemplates: partyTemplateReducer,
	users: usersReducer,
	errors: errorsReducer,
  session: sessionsReducer
})
