import React from 'react';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getServer(this.props.match.params.serverId);
    }

    render() {
        debugger;
        const {channels} = this.props;

        const channelList = channels.map(channel => (
            <li className='channel' key={channel.id}>
                    <div>{channel.name}</div>
            </li>
            ))

        return (
            <div className="channel-container">
                {channelList}
            </div>
        )
    }
}
export default ChannelIndex;