const userReducer = (state='', action) => {
	switch(action.type){
	case "CREATE_USER":
		return action.payload.data.name
	case  "GET_USER":
	  return action.payload
	case  "LOGIN_USER":
		return action.payload.data.name
	default:
		return state
	}
}

export default userReducer
