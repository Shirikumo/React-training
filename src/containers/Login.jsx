import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : ''
    }
  }

  handleMessageChange = (event) => {
    this.setState({username: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state.username);
  }

  render() {
    return (
      <div className="mt-5">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Votre pseudo"
            value={this.state.username} onChange={this.handleMessageChange} />
          <button type="submit" disabled={!this.state.username}>Valider</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addUser
}

export default connect(null, mapDispatchToProps)(Login);