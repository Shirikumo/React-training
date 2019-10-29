import React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'react-emoji-render';

const messageItem = {
  borderRadius: "15px",
  backgroundColor: "#fff",
  margin: "15px",
  padding: "15px 20px",
  textAlign: "left"
}

class MessageItem extends React.Component {
  render() {
    return (
      <div className="message-item" style={messageItem}>
        <Emoji text={this.props.message} />
      </div>
    );
  }
}

MessageItem.propTypes = {
  message: PropTypes.string.isRequired
};

export default MessageItem;