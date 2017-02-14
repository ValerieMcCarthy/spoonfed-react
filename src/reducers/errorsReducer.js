const errorsReducer = (state='', action) => {
	switch(action.type){
	case  "ERROR_MESSAGE":
    debugger
		return action.payload
	default:
		return state
	}
}

export default errorsReducer
