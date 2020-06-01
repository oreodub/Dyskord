import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  navLink: <Link to="/login">Already have an account?</Link>,
  
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
