import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const login = (currentUser) => (dispatch) =>
  SessionAPIUtil.login(currentUser).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const signup = (currentUser) => (dispatch) =>
  SessionAPIUtil.signup(currentUser).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  SessionAPIUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
