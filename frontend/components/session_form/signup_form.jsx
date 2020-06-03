import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  // renderErrors() {
  //   if (!this.props.errors.length) return;
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="page-container">

        <div className="sessionbg"></div>

        <div style={{ textAlign: 'center' }}>DYSKORD</div>
      
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
                />

              <label className="lightgray">Username</label>
                  <input type="text"
                  onChange={this.update('username')}
                  className="session-input"
                />
             
              <label className="lightgray">Password</label>
                <input type="password"
                  onChange={this.update('password')}
                  className="session-input"
                />
              
                
              <input className="session-submit" type="submit" value="Continue" />
            </div>
            
          </form>

          {this.props.navLink}

          <div className="tos darkgray">By registering, you agree to Dyskord's {' '}
              <a className="blue" href="">Terms of Service {' '}</a>
              and {' '}
              <a className="blue" href="">Privacy Policy</a>
              .
          </div>

        </div>
      </div>
    );
  }
}

export default SignupForm;
