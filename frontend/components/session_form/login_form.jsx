import React from 'react';
// import qrcode from '../../../app/assets/images/frame.png'

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
    this.props.processForm(this.state);
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

        <div style={{textAlign: 'center'}}>DYSKORD</div>

        <div className="wandbanner">
          <div>IMG</div>
          <div className="wand">We are now Discord.com!</div>
          <div className="x">x</div>
        </div>

        <div className="login-qr-container">
          <div className="login-form-container">
            
            <div className="h1">Welcome back!</div>
            <div className="h2">We're so excited to see you again!</div>
            
            <form onSubmit={this.handleSubmit} className="login-form-box">

              {this.renderErrors()}

              <div className="login-form">
                <label className="label">Email</label>
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                  />


                  <label className="label">Password</label>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />

                  <div className="fyp">Forgot your password?</div>
                    
                  <input className="login-submit" type="submit" value={this.props.formType} />


              </div>

            </form>
      
            {this.props.navLink}

                  
          </div>

          <div className="qr-container">
            {/* <div> <img src={qrcode} alt="QRCode"/> </div> */}
            {/* <div className="qrcode"></div> */}
            <div className="qrcode">QR CODE EVENTUALLY</div>
            <div className="h1">Log in with this QR Code</div>
            <div className="h2">Scan this with the {' '}
              <strong>Discord Mobile app {' '}</strong>
                    to log in instantly.</div>
          </div>

        </div>

      </div>
    );
  }
}

export default LoginForm;
