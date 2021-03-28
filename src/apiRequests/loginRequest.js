import axios from 'axios';
import { userApiFailure, userApiRequest, userApiSuccess } from '../actions/users/actionCreators';
import header, { url } from './apiLink';

const login = user => dispatch => {
  dispatch(userApiRequest());
  axios.post(`${url}/auth/login`, user, header)
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
