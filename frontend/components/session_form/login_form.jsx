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
        <div className="wandbanner">
          <p className="wand">We are now Discord.com!</p>
          <p className="x">x</p>
        </div>

        <div className="login-form-container">
          
          <p className ="welcome">Welcome back!</p>
          <p className ="excited">We're so excited to see you again!</p>
          
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

                  <p className="fyp">Forgot your password?</p>
                  
                <input className="login-submit" type="submit" value={this.props.formType} />
              </div>

          </form>

          <h3>{this.props.navLink}</h3>
        </div>
      </div>
    );
  }
}

export default LoginForm;
