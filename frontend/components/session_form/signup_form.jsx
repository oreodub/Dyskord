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
      <div className="m-container">
        <h1>{this.props.formType}</h1>
        
        <h1>AAGWGAGAAGAWGA
          AAGWGAGAAGAWGAAGAWG

          aGWWAE
          ADAWD

          ADASAS
          
        </h1>
        
        <form onSubmit={this.handleSubmit} className="m-box">
          
          {/* {this.renderErrors()} */}

          <div className="m">
            <label>Username:
                <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="ut"
              />
            </label>

            <label>Email:
                <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="ut"
              />
            </label>


            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="ut"
              />
            </label>
              
            <input className="mit" type="submit" value={this.props.formType} />
          </div>
          
        </form>

        <h3>{this.props.navLink}</h3>
      </div>
    );
  }
}

export default SignupForm;
