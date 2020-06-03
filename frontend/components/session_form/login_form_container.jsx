import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => ({

  errors: errors.session,
  formType: 'login',
  navLink: <div className="naa darkgray">Need an account? {' '}
              <Link to="/signup" style={{fontSize: '14px'}}className="register blue">Register</Link>
            </div>

});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
