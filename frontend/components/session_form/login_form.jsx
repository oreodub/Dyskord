import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '' , errors: false};
    this.handleSubmit = this.handleSubmit.bind(this);

    this.emailLabel = 'EMAIL';
    this.passwordLabel = 'PASSWORD';
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.valid()) this.props.login(this.state);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  valid() {
    let valid = true; 
    let emailLabel = document.getElementsByTagName('label')[0];
    let emailInput = document.getElementsByTagName('input')[0];
    let passwordLabel = document.getElementsByTagName('label')[1];
    let passwordInput = document.getElementsByTagName('input')[1];

    if (!this.state.email) {
      valid = false;
      emailLabel.className += " label-error"
      emailInput.className = " input-error"
      this.emailLabel = <div>EMAIL<div className="inner">- This field is required</div></div>
      
    } else {
      this.emailLabel= 'EMAIL'
    }

    if (!this.state.password) {
      valid = false;
      passwordLabel.className += " label-error";
      passwordInput.className = " input-error";
      this.passwordLabel = <div>PASSWORD<div className="inner">- This field is required</div></div>
      
    } else {
      this.passwordLabel= 'PASSWORD'
    }

    valid ? this.setState({ errors: false }) : this.setState({ errors: true });
    return valid;
  }

  banner() {
    document.getElementsByClassName("naruto")[0].style.display = "none";
    document.getElementsByClassName("wandbanner")[0].style.display = "none";
  }

  render() {
    return (
      <div className="page-container">
        
        <div className="sessionbg"></div>

        <a href="#"><img src={window.dyskordURL} className="logo" /></a>
        
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


              <div className="session-form">
                <label>{this.emailLabel}</label>
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="session-input"
                  />


                <label className=" lgpwlabel">{this.passwordLabel}</label>
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
