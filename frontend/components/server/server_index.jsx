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
        e.currentTarget.children[0].className = 'server-name';
        // document.getElementById('create').className = 'server-name';
    }

    handleMouseOut(e) {
        e.preventDefault();
        e.currentTarget.children[0].className = 'server-name-hide';
        // document.getElementById('create').className = 'server-name-hide';
    }

    render() {
        const { servers } = this.props;
        let initials = '';

            const serverList = servers.map(server => (
                <li className='server' key={server.id}>
                    <button onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut}>
                        <div className='server-name-hide'>{server.name}</div>
                    <Link to={`/servers/${server.id}/channels`}>
                        {server.name.split(' ').map(word => {
                            initials += word[0].toUpperCase();
                        })}<div>{initials}</div>
                        {initials = ''}
                    </Link>
                    </button>
                </li>
            ))

        return (
            
                <ul className="server-index">
                    <li className='server home'>
                        <button 
                            onMouseOver={this.handleMouseOver}
                            onMouseOut={this.handleMouseOut}>
                            <div className='server-name-hide'>Home</div>
                            <Link to='/servers'>
                                <img src={window.dragonURL} className="home-drag"/>
                            </Link>
                        </button>
                    </li>

                    <div className ="home-divider"></div>
                    
                    {serverList}

                    <li className='server'>
                        <button 
                        onClick={this.props.openModal}
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut}
                        >
                        <div className='server-name-hide'>Add Server</div>
                        <div className="create">+</div>
                        </button>
                    </li>
                </ul>

        );


    }
}

export default ServerIndex;
