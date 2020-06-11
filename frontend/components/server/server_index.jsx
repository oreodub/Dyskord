import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    componentDidMount() {
        this.props.getServers();
    }

    handleMouseOver(e) {
        e.preventDefault();

        // e.currentTarget.className = 'server-name';
        document.getElementById('create').className = 'server-name';
    }

    handleMouseOut(e) {
        e.preventDefault();
        // e.currentTarget.className = 'server-name-hide';
        document.getElementById('create').className = 'server-name-hide';
    }

    render() {
        const { servers } = this.props;
        let initials = '';

            const serverList = servers.map(server => (
                <li className='server' key={server.id}>
                    <button>
                    <Link to={`/servers/${server.id}`}>
                        {server.name.split(' ').map(word => {
                            initials += word[0].toUpperCase();
                        })}<div>{initials}</div>
                        {initials = ''}
                    </Link>
                    </button>
                    <div className='server-name-hide'>{server.name}</div>
                </li>
            ))

        
        
        return (
            <div className="server-container">
                <ul className="server-index">
                    <li className='server home'>
                        <button>
                            <Link to='/servers'>
                                <img src={window.dragonURL} className="home-drag"/>
                            </Link>
                        </button>
                    </li>

                    <div className ="home-divider"></div>
                    
                    {serverList}

                    <li className='server'>
                        <button 
                        onMouseOver={this.handleMouseOver} 
                        onMouseOut={this.handleMouseOut} 
                        onClick={this.props.openModal}
                        className="create">+
                        <div id='create' className='server-name-hide'>Add Server</div>
                        </button>
                        
                        
                    </li>
                </ul>
            </div>
        );


    }
}

export default ServerIndex;
