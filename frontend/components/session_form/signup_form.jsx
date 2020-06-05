import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.errors = {
    //   emailError: false,
    //   usernameError: false,
    //   passwordError: false,
    //   emailInvalid: false
    // }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  renderErrors(email, username, password) {
    
  }

  render() {
    return (
      <div className="page-container">

        <div className="sessionbg"></div>

        <img src={window.dyskordURL} className="logo" />
      
        <div className="signup-form-container">
          
          <div className="h1">Create an account</div>
          
          <h1></h1>
          
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            
            {/* {this.renderErrors()} */}

            <div className="session-form">

              <label className="lightgray">Email</label>
                  <input type="text"
                  onChange={this.update('email')}
                  className="session-input"
                  value={this.state.email}
                />

              <label className="sul lightgray">Username</label>
                  <input type="text"
                  onChange={this.update('username')}
                  className="session-input"
                  value={this.state.username}
                />
             
              <label className="sul lightgray">Password</label>
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
