import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  renderErrors() {
    if (!this.props.errors.length) return;
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }    

  banner() {
    document.getElementsByClassName("naruto")[0].style.display = "none";
    document.getElementsByClassName("wandbanner")[0].style.display = "none";
  }

  render() {
    return (
      <div className="page-container">
        
        <div className="sessionbg"></div>

        <img src={window.dyskordURL} className="logo"/>
        
          <div className="wandbanner">
          <img src={window.narutoURL} className="naruto" />
          <div className="wand">We are now Dyskord.com!</div>
          <button onClick={this.banner} className="x lightergray">x</button>
        </div>

        <div className="login-qr-container">
          <div className="login-form-container">
            
            <div className="h1">Welcome back!</div>
            <div className="h2 lightergray">We're so excited to see you again!</div>
            
            <form onSubmit={this.handleSubmit} className="login-form-box">

              {/* {this.renderErrors()} */}

              <div className="session-form">
                <label className="lightgray">Email</label>
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="session-input"
                  />


                <label className="lightgray lgpwlabel">Password</label>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="session-input"
                  />

                  <a href="#" className="fyp">Forgot your password?</a>
                  {/* <div className="fyp">Forgot your password?</div> */}
                    
                  <input className="session-submit" type="submit" value="Login" />


              </div>

            </form>
      
            {this.props.navLink}

                  
          </div>

          <div className="qr-container">
            <div className="qrcode-container"><img src={window.qrcodeURL} className="qrcode" /></div>
            <div className="qr-text">
              <div className="h1">Log in with QR Code</div>
              <div className="h2 lightergray">Scan this with the {' '}
                <strong>Discord mobile app {' '}</strong>
                      to log in instantly.</div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default LoginForm;
