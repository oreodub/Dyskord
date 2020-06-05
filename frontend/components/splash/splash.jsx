import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  banner() {
    document.getElementsByClassName("naruto")[0].style.display = "none";
    document.getElementsByClassName("wandbanner")[0].style.display = "none";
  }

  render() {
    return (
      <div className="splash-container">
        <header>
          <nav className="splash-nav">
            <div>
              <img src="" alt=""/>
            </div>

            <ul className="nav">
              <li>Download</li>
              <li>Why Discord?</li>
              <li>Nitro</li>
              <li>Jobs</li>

              <li>Developers
                <ul>

                </ul>
              </li>

              <li>Community
                <ul>

                </ul>
              </li>

              <li>Support
                <ul>

                </ul>
              </li>   
            </ul>


            <ul className='nav n'>
              <li>twit</li>
              <li>fb</li>
              <li>ig</li>
              
              <li><a href="/#/login">login</a></li>
              <li>languages</li>
            </ul>

          </nav>
        </header>

        <div className="wandbanner">
          <img src={window.narutoURL} className="naruto" />
          <div className="wand">We are now Dyskord.com!</div>
          <button onClick={this.banner} className="x lightergray">x</button>
        </div>

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
