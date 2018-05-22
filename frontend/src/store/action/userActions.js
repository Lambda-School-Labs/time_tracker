import axios from 'axios';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signUp = ({ name, email, password, type }) => {
  return dispatch => {
    if (type === 'client') {
      axios
        .post('/client', { name, email, password })
        .then(({ data }) => {
          dispatch({ type: SIGNUP, payload: data });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .post('/vendor', { name, email, password })
        .then(({ data }) => {
          dispatch({ type: SIGNUP, payload: data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};
<<<<<<< HEAD

export const logIn = ({ email, password, type }) => {
  return dispatch => {
    if (type === 'client') {
      axios
        .post('http://localhost:5000/client/login', { email, password })
        .then(({ data }) => {
          dispatch({ type: LOGIN, payload: data });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .post('http://localhost:5000/vendor/login', { email, password })
        .then(({ data }) => {
          dispatch({ type: LOGIN, payload: data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};
||||||| merged common ancestors
=======

export const logIn = ({ email, password, type }) => {
  return dispatch => {
    if (type === 'client') {
      axios
        .post('/client/login', { email, password })
        .then(({ data }) => {
          dispatch({ type: LOGIN, payload: data });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .post('/vendor/login', { email, password })
        .then(({ data }) => {
          dispatch({ type: LOGIN, payload: data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
};
>>>>>>> 8a2d67d367e2e32f412549668d8943db457dd0c3
