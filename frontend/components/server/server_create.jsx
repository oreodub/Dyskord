import React from 'react';

class ServerCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: `${props.user.username}'s server`, owner_id: props.user.id, private: false };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createServer(this.state);
    }

    update(type) {
        return (e) => (this.setState({ [type]: e.currentTarget.value }))
    }

    render() {
        let errors = null;
        if (this.props.errors.length > 0) {
            errors = (<ul className='errors-ul'>
                {this.props.errors.map(error => (<li className={'errors-li'} key={error}>{error}</li>))}
            </ul>)
        }
        return (
        
        <div className='create-server'>
            <div className='create-server-top'>
                <div className='create-server-header'>CREATE YOUR SERVER</div>
                <div className='create-server-caption'>By creating a server, you will have access to <strong>free</strong> voice and text chat to use amongst your friends.</div>

                <form action="" onSubmit={this.handleSubmit}>
                    <div className='create-server-left'>
                        <div className='create-server-title'>SERVER NAME</div>
                        <input type="text" placeholder='Enter a Server Name' value={this.state.name} onChange={this.update('name')} />
                        <div className='cg'>By creating a server, you agree to Dyskord's Community Guidelines</div>
                    </div>
                    <div className='create-server-right'>
                        <div className='create-server-img'>
                                <div>IMAGE</div></div>
                        <div className="create-min">Minimum Size:
                            <strong>128x128</strong>
                        </div>
                            <button className='create-button-confirm'>Create</button>
                    </div>
                </form>
                {errors}
            </div>
            
            <div className='create-server-button'>
                <button onClick={this.props.openModal}>BACK</button>
            </div>
        </div>)
    }
}
export default ServerCreate;