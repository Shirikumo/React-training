import React from 'react';
import MessageListContainer from './MessageListContainer';
import MessageBar from './MessageBar';

const chat = {
  backgroundColor : "#f2b532",
  borderRadius : "15px",
  padding : "20px",
  maxWidth : "800px",
  margin : "auto"
}

const title = {
  marginTop : "0px",
}

class Chat extends React.Component {
  render() {
    return (
      <div style={chat}>
        <h1 style={title}>Un tchat</h1>
        <MessageListContainer />
        <MessageBar />
      </div>
    );
  }
}
export default Chat;