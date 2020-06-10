import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getServers, createServer } from "../../actions/server_actions";
import Home from './home';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getServers: () => dispatch(getServers()),
  createServer: (server) => dispatch(createServer(server)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
