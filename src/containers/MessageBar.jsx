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
      data : {},
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleMessageChange(event){
    this.setState({data: {
      username: 'theo',
      message: event.target.value,
    }});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(addMessage(this.state.data));
    this.setState({message : ""})
  }

  handleClear() {
    this.props.dispatch(clearMessages());
  }

  render() {
    return (
      <div style={bar}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="message" placeholder="Ecrivez un message"
           value={this.state.data.message} onChange={this.handleMessageChange}/>
          <button type="submit" disabled={!this.state.data.message}>Envoyer</button>
        </form>
        <button onClick={this.handleClear}>Effacer</button>
      </div>
    );
  }
}

export default connect()(MessageBar);