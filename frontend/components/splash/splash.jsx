import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.demo = this.demo.bind(this);
  }

  banner() {
    document.getElementsByClassName("naruto")[0].style.display = "none";
    document.getElementsByClassName("wandbanner")[0].style.display = "none";
  }

  demo() {
    this.props.login({email: 'Demo@demo.com', password: 'demodemo'})
  }

  render() {
    const {currentUser} = this.props;

    
      const loginButton = () => (
        <a className ='login-button' href="/#/login">Login</a>
      );
      const openButton = () => (
        <a className='open-button' href="/#/servers">Open</a>
      );

    

    return (
      <div className="splash-container">
        <header>
          
          <nav className="splash-nav">
            <a href="#"><img src={window.dyskordURL} className="splash-logo-dysk" /></a>
            <a href="#"><img src={window.dragonURL} className="splash-logo-drag" /></a>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/williamjsuh/"><i className="fab fa-linkedin"></i></a>
              </li>
              
              <li>
              <a href="https://github.com/oreodub"><i className="fab fa-github"></i></a>
              </li>

              <li>
                {currentUser ? openButton() : loginButton()}
              </li>
            </ul>

          </nav>
        </header>

        <div className="splash-wandbanner">
          <img src={window.narutoURL} className="naruto" />
          <div className="wand">We are now Dyskord.com!</div>
        </div>


        <div className="splash-main">
          <div className="splash-header">A new way to chat with your communities and friends.</div>
          <div className="splash-text">
            Dyskord is the easiest way to communicate over voice, video, and text, whether you’re part of a school club,
             a nightly gaming group, a worldwide art community, or just a handful of friends that want to hang out.
          </div>
          <div className="splash-btns">
            
            <Link className="demo-link" to="/servers" onClick={this.demo}>
              <input type="button" className="left-button" value='Demo'/>
            </Link>

            <Link to={currentUser ? "/servers" : "/login"}>
              <input type="button" className="right-button" value={currentUser ? "Open" : "Open Dyskord"}/>  
            </Link>

          </div>
        </div>

        <img src={window.splashbgURL} className="splashbg" />

        <footer>
          <div>
            <div className="footer-header">Ready to try Dyskord? It's free!</div>
            <div className="footer-subheader">JOIN OVER 1 PLAYER TODAY</div>
          </div>
          <Link to="/register">
            <input type="button" value="Sign Up Now"/>
          </Link>
        </footer>

      </div>
    )
  }
} 





export default Splash;
