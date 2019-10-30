// messages
export const addMessage = (message, username) => ({
  type: 'ADD_MESSAGE',
  message,
  username
})
export const clearMessages = () => ({
  type: 'CLEAR_MESSAGES'
})
export const getMessages = () => ({
  type: 'GET_MESSAGES_PENDING'
})
export const loadMessages = (messages) => ({
  type: 'GET_MESSAGES_SUCCESS',
  messages
})
export const errorMessages = (error) => ({
  type: 'GET_MESSAGES_ERROR',
  error
})

// user
export const addUser = (name) => ({
  type: 'ADD_USER',
  name
})