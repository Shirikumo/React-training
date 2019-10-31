import React from 'react';
import { connect } from 'react-redux';
import MessageList from '../components/MessageList';
import Ws from '../services/websocket';

class MessageListContainer extends React.Component {
  componentDidMount() {
    Ws.onmessage = (event) => {
      try {
        console.log(event)
        let action = JSON.parse(event.data);
        this.props.dispatch(action)
      } catch (error) {
        console.warn(error)
      }
    }
  }
  render () {
    return <MessageList messages={this.props.messages} />
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages.messagesList
})

export default connect(
  mapStateToProps,
  null
)(MessageListContainer);