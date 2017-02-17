import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import errorsReducer from './errorsReducer'
import partyTemplateReducer from './partyTemplateReducer'
import sessionsReducer from './sessionsReducer'
import currentPartyTemplateReducer from './currentPartyTemplateReducer'
import eventReducer from './eventReducer'
import growlerReducer  from './growlerReducer';





const rootReducer = combineReducers({
  growler: growlerReducer,
  partyTemplates: partyTemplateReducer,
	user: usersReducer,
	errors: errorsReducer,
  session: sessionsReducer,
  currentPartyTemplate: currentPartyTemplateReducer,
  event: eventReducer,
})

export default rootReducer;
