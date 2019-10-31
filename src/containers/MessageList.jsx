import { connect } from 'react-redux';
import MessageList from '../components/MessageList'

const mapStateToProps = (state) => ({
  messages: state.messages.messagesList
})

export default connect(
  mapStateToProps
)(MessageList);