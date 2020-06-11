import React from 'react';

class AddServer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className='add-server-container'>
            <div className="add-server-header">Oh, another server huh?</div>
            <div className='create-join-container'>
                <div className='create-join' 
                    onClick={() => this.props.openModal('serverCreate')}>
                    <div className="create-join-caption"><strong>Create</strong> a new server and invite your friends. It's free!</div>
                    <img className="create-join-img" src={window.createServerURL} alt="" />
                    <button className='create-button' >Create a server</button>
                </div>
                <div className='create-join' 
                onClick={() => this.props.openModal('serverJoin')}>
                    <div className="create-join-caption"><strong>Join</strong> a server with an invite code or link.</div>
                    <img className="create-join-img" src={window.joinServerURL} alt="" />
                    <button className='join-button' >Join a server</button>
                </div>
            </div>

        </div>)
    }
}

import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = (state) => ({
})

const mDTP = (dispatch) => ({
    openModal: (coj) => dispatch(openModal(coj)),
})

export default connect(mSTP, mDTP)(AddServer);

