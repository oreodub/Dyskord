import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser 
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
    
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const receiveError = error => {
    return {
        type: RECEIVE_ERROR,
        error
    }
}

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const login = (user) => dispatch => (
    APIUtil.login(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
    error => (dispatch(receiveErrors(error)))
));

export const signUp = (user) => dispatch => (
    APIUtil.signUp(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
    error => (dispatch(receiveErrors(error)))
));

export const logout = () => dispatch => (
    APIUtil.logout()
    .then(user => (dispatch(logoutCurrentUser(user))),
    error => (dispatch(receiveErrors(error)))
));