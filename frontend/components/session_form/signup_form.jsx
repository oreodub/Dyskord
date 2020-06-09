import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);

    this.emailLabel = 'EMAIL';
    this.usernameLabel = 'USERNAME';
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
    if (this.valid()) this.props.signup(this.state);

  }

  componentDidMount() {
    this.props.clearErrors();
  }



  valid() {
    let valid = true;
    let emailLabel = document.getElementsByTagName('label')[0];
    let emailInput = document.getElementsByTagName('input')[0];
    let usernameLabel = document.getElementsByTagName('label')[1];
    let usernameInput = document.getElementsByTagName('input')[1];
    let passwordLabel = document.getElementsByTagName('label')[2];
    let passwordInput = document.getElementsByTagName('input')[2];

    if (!this.state.email) {
      valid = false;
      emailLabel.className += " label-error";
      emailInput.className = "input-error";
      this.emailLabel = <div>EMAIL<div className="inner">- This field is required</div></div>

    } else {
      this.emailLabel = 'EMAIL';
      emailLabel.className = "";
      emailInput.className = "session-input";
    }

    if (!this.state.username) {
      valid = false;
      usernameLabel.className += " label-error";
      usernameInput.className = "input-error";
      this.usernameLabel = <div>USERNAME<div className="inner">- This field is required</div></div>

    } else {
      this.usernameLabel = 'USERNAME';
      usernameLabel.className = "sul";
      usernameInput.className = "session-input";
    }

    if (!this.state.password) {
      valid = false;
      passwordLabel.className += " label-error";
      passwordInput.className =  "input-error";
      this.passwordLabel = <div>PASSWORD<div className="inner">- This field is required</div></div>

    } else {
      this.passwordLabel = 'PASSWORD';
      passwordLabel.className = "sul";
      passwordInput.className = "session-input";
    }

    return valid;
  }


 
  render() {
    let emailLabel = document.getElementsByTagName('label')[0];
    let emailInput = document.getElementsByTagName('input')[0];
    let usernameLabel = document.getElementsByTagName('label')[1];
    let usernameInput = document.getElementsByTagName('input')[1];
    let passwordLabel = document.getElementsByTagName('label')[2];
    let passwordInput = document.getElementsByTagName('input')[2];

    this.props.errors.map((err) => {
      if (err.includes('Email')) {
        this.emailLabel = <div>EMAIL<div className="inner">- {err}</div></div>
        emailLabel.className += " label-error";
        emailInput.className = "input-error";
      } else {
        emailLabel.className = "";
        emailInput.className = "session-input";
      }

      if (err.includes('Username')) {
        this.usernameLabel = <div>USERNAME<div className="inner">- {err}</div></div>
        usernameLabel.className += " label-error";
        usernameInput.className = "input-error";
      } else {
        usernameLabel.className = "sul";
        usernameInput.className = "session-input";
      }

      if (err.includes('Password')) {
        this.passwordLabel = <div>PASSWORD<div className="inner">- {err}</div></div>
        passwordLabel.className += " label-error";
        passwordInput.className = "input-error";
      } else {
        passwordLabel.className = "sul";
        passwordInput.className = "session-input";
      }
    })
    
      return (
        <div className="page-container">

        <div><img src={window.loginbgURL} className="sessionbg" /></div>

        <a href="#"><img src={window.dyskordURL} className="logo" /></a>
        
      
        <div className="signup-form-container">
          
          <h1>Create an account</h1>
          
          <form onSubmit={this.handleSubmit} className="signup-form-box">

            <div className="session-form">

              <label>{this.emailLabel}</label>
                  <input type="email"
                  onChange={this.update('email')}
                  className="session-input"
                  value={this.state.email}
                />

              <label className="sul">{this.usernameLabel}</label>
                  <input type="text"
                  onChange={this.update('username')}
                  className="session-input"
                  value={this.state.username}
                />
             
              <label className="sul">{this.passwordLabel}</label>
                <input type="password"
                  onChange={this.update('password')}
                  className="session-input"
                  value={this.state.password}
                />
              
                
              <input className="cont session-submit" type="submit" value="Continue" />
            </div>
            
          </form>

          {this.props.navLink}

          <div className="tos darkgray">By registering, you agree to Dyskord's {' '}
              <a className="blue" href="/#/signup">Terms of Service {' '}</a>
              and {' '}
            <a className="blue" href="/#/signup">Privacy Policy</a>
              .
          </div>

        </div>
      </div>
    );
  }
}

export default SignupForm;
