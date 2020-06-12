import { connect } from 'react-redux';
import { deleteServer, leaveServer } from '../../actions/server_actions';
import ChannelIndex from './channel_index';

const mSTP = (state, ownProps) => ({
    server: state.entities.servers[ownProps.match.params.serverId],
    userId: state.session.id,
    channels: Object.values(state.entities.channels),
})
const mDTP = (dispatch) => ({
    deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    leaveServer: (serverUser) => dispatch(leaveServer(serverUser)),
})


export default connect(mSTP, mDTP)(ChannelIndex);