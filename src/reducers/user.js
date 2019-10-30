const INITIAL_STATES = {
  currentUser: ''
}

const user = (state = INITIAL_STATES, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, {currentUser : (action.name) });
    default:
      return state
  }
}

export default user;