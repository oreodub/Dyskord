import React from 'react';
// import { Link } from 'react-router-dom';
import ServerIndexContainer from '../server/server_index_container'
import ChannelIndexContainer from '../channel/channel_index_container'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const {currentUser} = this.props;


    return (
      <div className="home-container">
        <div className="friend-container">
          <ProtectedRoute exact path="/servers/:serverId/channels" component={ChannelIndexContainer} />
          <div className="searchbar"></div>
        </div>
        <div className="server-container">
            <ServerIndexContainer/>
        </div>
        <nav className="home-nav">
          <div></div>
          <div></div>
        </nav>

      <div className="user-container">

        <div className="user">

          <div className="profile-pic">
            PP
          </div>
          <div className="title">
            <div className="name">{currentUser.username}</div>
            <div>#usernumber</div>
          </div>
        </div>

        <ul className="user-buttons">
            <button> <i className="fas fa-microphone"></i> </button>
            
            <button> <i className="fas fa-headset"></i> </button>
            
            <button onClick={this.props.logout}> <i className="fas fa-cog"></i> </button>
           
        </ul>
      </div>




      </div>
    )



  }
} 





export default Home;
