import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signUp, clearErrors, receiveError } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  navLink: <Link to="/login" style={{ fontSize: '14px' }} className="blue">Already have an account?</Link>,
  
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
