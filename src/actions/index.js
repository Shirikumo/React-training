export const addMessage = message => ({
  type: 'ADD_MESSAGE',
  message
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