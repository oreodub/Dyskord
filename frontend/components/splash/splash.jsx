import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash_container">
        <header> header 
          <nav> navbar
            <div>
              <img src="" alt=""/>
            </div>

            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li>
                <ul>

                </ul>
              </li>
              <li>
                <ul>

                </ul>
              </li>
              <li>
                <ul>

                </ul>
              </li>
            </ul>

            <ul>
              
            </ul>

          </nav>
        </header>
      </div>
    )
  }
} 


// = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <Link to="/login">Login</Link>
//       &nbsp;or&nbsp;
//       <Link to="/signup">Sign up!</Link>
//     </nav>
//   );
//   const personalSplash = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {currentUser.username}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
//   );

//   return currentUser ? personalSplash() : sessionLinks();
// };


export default Splash;
