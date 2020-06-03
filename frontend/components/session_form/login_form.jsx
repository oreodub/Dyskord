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

  render() {
    return (
      <div className="page-container">
        
        <div className="sessionbg"></div>

        <div style={{textAlign: 'center'}}>DYSKORD</div>

        <div className="wandbanner">
          <div>IMG</div>
          <div style={{fontSize: '16px'}}>We are now Dyskord.com!</div>
          <div className="x lightergray">x</div>
        </div>

        <div className="login-qr-container">
          <div className="login-form-container">
            
            <div className="h1">Welcome back!</div>
            <div className="h2 lightergray">We're so excited to see you again!</div>
            
            <form onSubmit={this.handleSubmit} className="login-form-box">

              {this.renderErrors()}

              <div className="session-form">
                <label className="lightgray">Email</label>
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="session-input"
                  />


                <label className="lightgray">Password</label>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="session-input"
                  />

                  <a href="#" className="fyp">Forgot your password?</a>
                  {/* <div className="fyp">Forgot your password?</div> */}
                    
                  <input className="session-submit" type="submit" value={this.props.formType} />


              </div>

            </form>
      
            {this.props.navLink}

                  
          </div>

          <div className="qr-container">
            {/* <div> <img src={qrcode} alt="QRCode"/> </div> */}
            {/* <div className="qrcode"></div> */}
            <div className="qrcode-container"><img src={window.qrcodeURL} className="qrcode" /></div>
            <div className="h1">Log in with QR Code</div>
            <div className="h2 lightergray">Scan this with the {' '}
              <strong>Discord Mobile app {' '}</strong>
                    to log in instantly.</div>
          </div>

        </div>

      </div>
    );
  }
}

export default LoginForm;
