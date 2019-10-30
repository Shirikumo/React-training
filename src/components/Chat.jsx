import React from 'react';
import MessageList from '../containers/MessageList';
import MessageBar from '../containers/MessageBar';
import { connect } from 'react-redux';
import { getMessages, loadMessages, errorMessages } from '../actions';
import axios from 'axios';

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
  componentDidMount() {
    this.getMessage();
  }

  getMessage() {
    this.props.dispatch(getMessages());
    axios.get('https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages')
    .then(response => {
      this.props.dispatch(loadMessages(response.data));
    })
    .catch(error => {
      this.props.dispatch(errorMessages(error));
    })
  }

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

// const mapDispatchToProps = dispatch => {
//   return {
//     // getMessages
//   }
// }

// export default connect(null, mapDispatchToProps)(Chat);
export default connect()(Chat);