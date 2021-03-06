import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);

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
    this.props.clearErrors();
    if (this.valid()) this.props.login(this.state);
  }

  demo(e) {
    e.preventDefault();
    this.props.login({ email: 'Demo@demo.com', password: 'demodemo' })
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
      emailLabel.className += " label-error";
      emailInput.className = "input-error";
      this.emailLabel = <div>EMAIL<div className="inner">- This field is required</div></div>
      
    } else {
      this.emailLabel= 'EMAIL';
      emailLabel.className = "";
      emailInput.className = "session-input";
    }

    if (!this.state.password) {
      valid = false;
      passwordLabel.className += " label-error";
      passwordInput.className = "input-error";
      this.passwordLabel = <div>PASSWORD<div className="inner">- This field is required</div></div>
      
    } else {
      this.passwordLabel= 'PASSWORD';
      passwordLabel.className = "lgpwlabel";
      passwordInput.className = "session-input";
    }
    return valid;
  }

  banner() {
    document.getElementsByClassName("naruto")[0].style.display = "none";
    document.getElementsByClassName("wandbanner")[0].style.display = "none";
  }


  render() {
    let emailLabel = document.getElementsByTagName('label')[0];
    let emailInput = document.getElementsByTagName('input')[0];
    let passwordLabel = document.getElementsByTagName('label')[1];
    let passwordInput = document.getElementsByTagName('input')[1];

    this.props.errors.map((err) => {
      if (err.includes('Email')) {
        this.emailLabel = <div>EMAIL<div className="inner">- {err}</div></div>
        emailLabel.className += " label-error";
        emailInput.className = "input-error";
      } else {
        emailLabel.className = "";
        emailInput.className = "session-input";
      }
  
      if (err.includes('Password')) {
        this.passwordLabel = <div>PASSWORD<div className="inner">- {err}</div></div>
        passwordLabel.className += " label-error";
        passwordInput.className = " input-error";
      } else {
        passwordLabel.className = "lgpwlabel";
        passwordInput.className = "session-input";
      }
    })

    return (
      <div className="page-container">
        
        <div><img src={window.loginbgURL} className="sessionbg" /></div>

        <a href="#"><img src={window.dyskordURL} className="logo-dysk" /></a>
        <a href="#"><img src={window.dragonURL} className="logo-drag" /></a>

          <div className="wandbanner">
          <img src={window.narutoURL} className="naruto" />
          <div className="wand">We are now Dyskord.com!</div>
          <button onClick={this.banner} className="x lightergray">x</button>
        </div>

        <div className="login-qr-container">
          <div className="login-form-container">
            
            <h1 >Welcome back!</h1>
            <h2 className="lightergray">We're so excited to see you again!</h2>
            
            <form onSubmit={this.handleSubmit} className="login-form-box">


              <div className="session-form">
                <label>{this.emailLabel}</label>
                  <input type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="session-input"
                  />


                <label className="lgpwlabel">{this.passwordLabel}</label>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="session-input"
                  />
                
                <a href="#" className="fyp">{/* Forgot your password? */}</a>
                  
                    
                  <input className="session-submit" type="submit" value="Login" />


              </div>

            </form>
      
            {this.props.navLink}

                  
          </div>

          <div className="qr-container">
            {/* <img src={window.qrcodeURL} className="qrcode" /> */}
            <div className="qrcode-container"> <input type="button" className="qrcode" value="DEMO" onClick={this.demo}/></div>
            <div className="qr-text">
              <h1>Log in with Demo {/*QR Code*/}</h1>
              <h2 className="lightergray">Demo account to {' '}
                <strong>check Dyskord functionality. </strong>
                </h2>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default LoginForm;
