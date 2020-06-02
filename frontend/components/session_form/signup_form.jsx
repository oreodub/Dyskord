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
      <div className="signup-form-container">
        <h1>{this.props.formType}</h1>
        
        
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          
          {this.renderErrors()}

          <div className="login-form">
            <label>Username:
                <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
              />
            </label>

            <label>Email:
                <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>


            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>
              
            <input className="signup-submit" type="submit" value={this.props.formType} />
          </div>
          
        </form>

        <h3>{this.props.navLink}</h3>
      </div>
    );
  }
}

export default SignupForm;
