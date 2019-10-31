import React from 'react';
import MessageItem from '../components/MessageItem';

const list = {
  height : "400px",
  overflow : "scroll"
}

export default class MessageList extends React.Component {
  componentDidUpdate() {
    let list = document.getElementById("messageList");
    list.scrollTop = list.scrollHeight;
  }

  render() {
    return (
      <div id="messageList" style={list}>
        {
          (this.props.messages && this.props.messages.length > 0) ? 
            this.props.messages.map((item, key) => 
            <MessageItem key={key} message={item.message} user={item.username}/>
          )
        : 
          <div>Il n'y a aucun message...</div>
        }
      </div>
    );
  }
}