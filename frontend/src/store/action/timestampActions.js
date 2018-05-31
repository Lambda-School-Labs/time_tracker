import axios from 'axios';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
const backend =
  process.env.NODE_ENV === 'production'
    ? `https://ls-time-tracker.herokuapp.com`
    : `http://localhost:5000`;

export const startNewTimer = (vendorId, clientId) => {
  return dispatch => {
    axios
      .post(`${backend}/timestamp/start`, { vendorId, clientId })
      .then(({ data }) => {
        dispatch({ type: START_TIMER, payload: data });
      });
  };
};

export const stopActiveTimer = timestampId => {
  return dispatch => {
    axios
      .put(`${backend}/timestamp/stop`, { timestampId })
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: STOP_TIMER, payload: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
