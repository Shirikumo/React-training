import React from 'react';
import { connect } from 'react-redux';
import MessageItem from '../components/MessageItem';

const list = {
  height : "400px",
  overflow : "scroll"
}

class MessageList extends React.Component {
  render() {
    return (
      <div style={list}>
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

const mapStateToProps = (state) => ({
  messages: state.messages
})

export default connect(
  mapStateToProps
)(MessageList);