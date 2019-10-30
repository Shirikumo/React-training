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
        <p>{this.props.username ? `Votre nom d'utilisateur est : ${this.props.username}` : 'Vous êtes Anonyme'}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Votre pseudo"
            value={this.state.username} onChange={this.handleMessageChange} />
          <button type="submit">Valider</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addUser
}

const mapStateToProps = (state) => ({
  username: state.user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);