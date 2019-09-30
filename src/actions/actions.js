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
  console.log(user);
  return dispatch => {
    return fetch('http://localhost:8000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.status === 201) {
          history.push('/login');
        } else {
          dispatch(getErrors(res.json()));
        }
      })
      .catch(err => {
        dispatch(getErrors(err));
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
      body: JSON.stringify(user)
    })
      .then(res => {
        const data = res.json();
        if (res.status === 200) {
          localStorage.setItem('token', data.token);
          dispatch(loginUser(data.user));
          history.push('/');
        } else {
          dispatch(getErrors(data));
        }
      })
      .catch(err => {
        dispatch(getErrors(err));
      });
  };
};
