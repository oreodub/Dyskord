import ServerCreate from './server_create';
import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
    user: state.entities.users[state.session.id],
    errors: state.errors,
})
const mDTP = (dispatch) => ({
    openModal: () => dispatch(openModal('addServer')),
    createServer: (server) => dispatch(createServer(server)),
})

export default connect(mSTP, mDTP)(ServerCreate);