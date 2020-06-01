import React from 'react';

class SessionForm extends React.Component {
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
    debugger;
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
    let usernameInput;
    if (this.props.formType === 'signup') {
      usernameInput = <label>Username:
                        <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        />
                      </label>
    }

    return (
      <div>
        <h1>{this.props.formType}</h1>
        
        {this.renderErrors()}
        
        <form onSubmit={this.handleSubmit}>

          {usernameInput}

          <label>Email:
              <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>


          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
            
          <input type="submit" value={this.props.formType} />
        </form>

        <h3>{this.props.navLink}</h3>
      </div>
    );
  }
}

export default SessionForm;
