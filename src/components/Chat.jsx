import React from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';

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
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(message) {
    let joined = this.state.messages.concat(message);
    this.setState({messages: joined});
  }

  render() {
    return (
      <div className="chat" style={chat}>
        <h1 style={title}>Un tchat</h1>
        <MessageList messages={this.state.messages}/>
        <MessageBar sendMessage={this.addMessage} />
      </div>
    );
  }
}

export default Chat;