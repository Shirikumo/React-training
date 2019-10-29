import React from 'react';

const bar = {
  marginTop : "20px"
}

class MessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message : '',
      enabled : false
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleMessageChange(event){
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendMessage(this.state.message)
    this.setState({message : ""})
  }

  handleClear(){
    this.props.clearMessage();
  }

  render() {
    return (
      <div className="message-bar" style={bar}>
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

export default MessageBar;