import { connect } from "react-redux";
import { getServers, createServer } from "../../actions/server_actions";
import ServerIndex from './server_index'
import { openModal } from '../../actions/modal_actions'
const mSTP = (state) => ({
    servers: Object.values(state.entities.servers)
});

const mDTP = (dispatch) => ({
    getServers: () => dispatch(getServers()),
    createServer: (server) => dispatch(createServer(server)),
    openModal: () => dispatch(openModal('addServer'))
});

export default connect(mSTP, mDTP)(ServerIndex);
