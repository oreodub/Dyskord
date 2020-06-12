import React from 'react';

class ServerJoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.joinServer(this.state.name);
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
                <div className='create-server-header'>JOIN A SERVER</div>
                    <div className='create-server-caption'>Enter an invite below to join an existing server. 
                    The invite will look something like these:</div>

                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder='Enter an invite' 
                    value={this.state.name} 
                    onChange={this.update('name')} />
                    <button className='create-button-confirm'>Join</button>
                </form>
                {errors}
            </div>

            <div className='create-server-button'>
                <button onClick={this.props.openModal}>BACK</button>
            </div>
        </div>
        )
    }
}
export default ServerJoin;