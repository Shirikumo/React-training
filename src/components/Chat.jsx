import React from 'react';
import MessageList from '../containers/MessageList';
import MessageBar from '../containers/MessageBar';

const chat = {
  backgroundColor : "#f2b532",
  borderRadius : "15px",
  padding : "20px",
  maxWidth : "400px",
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
        <MessageList />
        <MessageBar />
      </div>
    );
  }
}

export default Chat;