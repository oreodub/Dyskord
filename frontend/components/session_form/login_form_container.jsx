import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({

  errors: errors.session,
  formType: 'login',
  navLink: <div>Need an account? {' '}
              <Link to="/signup">Register</Link>
            </div>

});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);