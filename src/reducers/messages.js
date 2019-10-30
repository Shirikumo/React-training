const INITIAL_STATES = {
  messagesList : [],
  loading : false
}

const messages = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign({}, state, {messagesList : state.messagesList.concat(action.message) });
    case 'CLEAR_MESSAGES':
      let result = Object.assign({}, state);
      result.messagesList = [];
      return result;
    case 'GET_MESSAGES_PENDING':
      return Object.assign({}, state, {loading : true});
    case 'GET_MESSAGES_SUCCESS':
      return Object.assign({}, state, {messagesList : action.messages, loading : false});
    default:
      return state
  }
}

export default messages;