import ServerJoin from './server_join';
import { connect } from 'react-redux';
import { joinServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = (state) => ({
    errors: state.errors,
})

const mDTP = (dispatch) => ({
    openModal: () => dispatch(openModal('addServer')),
    joinServer: (serverId) => dispatch(joinServer(serverId)),
})

export default connect(mSTP, mDTP)(ServerJoin);