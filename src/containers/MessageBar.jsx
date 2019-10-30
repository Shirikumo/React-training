import React from 'react';
import { connect } from 'react-redux';
import { addMessage, clearMessages } from '../actions';

const bar = {
  marginTop : "20px"
}

class MessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message : '',
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleMessageChange(event){
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(addMessage(this.state.message, this.props.username));
    this.setState({ message: '' })
  }

  handleClear() {
    this.props.dispatch(clearMessages());
  }

  render() {
    return (
      <div style={bar}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="message" placeholder="Ecrivez un message"
           value={this.state.message} onChange={this.handleMessageChange}/>
          <button type="submit" disabled={!this.state.message}>Envoyer</button>
        </form>
        <button onClick={this.handleClear}>Effacer</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.user.currentUser
})

export default connect(
  mapStateToProps
)(MessageBar);