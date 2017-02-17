import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import errorsReducer from './errorsReducer'
import partyTemplateReducer from './partyTemplateReducer'
import sessionsReducer from './sessionsReducer'
import currentPartyTemplateReducer from './currentPartyTemplateReducer'
import eventReducer from './eventReducer'
import { GrowlerReducer } from 'react-redux-flash-notification';




export default combineReducers({
  partyTemplates: partyTemplateReducer,
	user: usersReducer,
	errors: errorsReducer,
  session: sessionsReducer,
  currentPartyTemplate: currentPartyTemplateReducer,
  growler: GrowlerReducer,
  event: eventReducer,
})
