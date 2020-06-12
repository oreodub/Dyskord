import ServerCreate from './server_create';
import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
    user: state.entities.users[state.session.id],
    errors: state.errors.server,
})
const mDTP = (dispatch) => ({
    openModal: () => dispatch(openModal('addServer')),
    closeModal: () => dispatch(closeModal()),
    createServer: (server) => dispatch(createServer(server)),
})

export default connect(mSTP, mDTP)(ServerCreate);