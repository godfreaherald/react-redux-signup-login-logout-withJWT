import { history } from '../_helpers';

const loginUser = user => ({
  type: 'LOGIN_USER',
  payload: user
});
const getErrors = payload => ({
  type: 'GET_ERRORS',
  payload
});

export const userPostFetch = user => {
  return dispatch => {
    return fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          dispatch(getErrors(data.errors));
        } else {
          history.push('/login');
        }
      })
      .catch(err => {
        dispatch(getErrors(err.response));
      });
  };
};

export const userLoginFetch = user => {
  return dispatch => {
    return fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          dispatch(getErrors(data.errors));
        } else {
          localStorage.setItem('token', data.jwt);
          dispatch(loginUser(data.user));
          history.push('/');
        }
      });
  };
};
