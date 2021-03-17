import axios from 'axios';
import { userApiFailure, userApiRequest, userApiSuccess } from '../actions';

const login = user => dispatch => {
  console.log(user);
  const url = 'http://localhost:3001/sessions';
  dispatch(userApiRequest());
  axios.post(url, user, { 'content-type': 'application/json', withCredentials: true })
    .then(response => {
      const userRes = response.data;
      dispatch(userApiSuccess(userRes));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(userApiFailure(errorMsg));
    });
};

export default login;
