import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    const {currentUser} = this.props;


    return (
      <div className="home-container">
        <div className="friend-container"></div>
        <div className="server-container"></div>
      

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
            <input type="button" value='m' />
            <input type="button" value='d' />
            <input type="button" onClick={this.props.logout} value='lo' />
        </ul>
      </div>




      </div>
    )



  }
} 





export default Home;
