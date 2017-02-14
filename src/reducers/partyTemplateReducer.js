const partyTemplateReducer = ( state=[], action) => {
  switch (action.type){
    case "FETCH_TEMPLATES":
      return action.payload
    default:
      return state
  }
}

export default partyTemplateReducer