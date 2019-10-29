const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.concat(action.message);
    case 'CLEAR_MESSAGE':
      return [];
    default:
      return state
  }
}

export default messages;