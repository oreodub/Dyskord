import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => ({

  errors: state.errors.session,
  navLink: <div className="naa darkgray">Need an account? {' '}
              <Link to="/signup" style={{fontSize: '14px'}}className="register blue">Register</Link>
            </div>

});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
