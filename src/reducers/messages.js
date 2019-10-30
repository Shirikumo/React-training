const INITIAL_STATES = {
  messagesList : [],
  loading : false,
  error : {}
}

const messages = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      let added = state.messagesList.concat({username: action.username, message: action.message});
      return Object.assign({}, state, {messagesList: added} )
    case 'CLEAR_MESSAGES':
      let cleared = Object.assign({}, state);
      cleared.messagesList = [];
      return cleared;
    case 'GET_MESSAGES_PENDING':
      return Object.assign({}, state, {loading : true});
    case 'GET_MESSAGES_SUCCESS':
      return Object.assign({}, state, {messagesList : action.messages, loading : false});
    case 'GET_MESSAGES_ERROR':
      return Object.assign({}, state, {error : action.error});
    default:
      return state
  }
}

export default messages;