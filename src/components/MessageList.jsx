import React from 'react';
import MessageItem from './MessageItem'

const list = {
  height : "400px",
  overflow : "scroll"
}

class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list" style={list}>
        {
          (this.props.messages && this.props.messages.length > 0) ? 
          this.props.messages.map((item, key) => 
          <MessageItem key={key} message={item}/>
        )
        : 
        <div>Il n'y a aucun message...</div>
        }
      </div>
    );
  }
}

export default MessageList;