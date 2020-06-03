import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  navLink: <Link to="/login" style={{ fontSize: '14px' }} className="blue">Already have an account?</Link>,
  
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
