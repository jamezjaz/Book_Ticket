import axios from 'axios';
import { userApiFailure, userApiRequest, userApiSuccess } from '../actions/users/actionCreators';
import header, { url } from './apiLink';

const login = user => dispatch => {
  dispatch(userApiRequest());
  axios.post(`${url}/auth/login`, user, header)
    .then(response => {
      const userRes = response.data;
      if (userRes.message === 'Login Successful') {
        dispatch(userApiSuccess(userRes));
        // console.log('RESPONSE', user);
        // console.log('RESPONSE2', userRes);
        localStorage.setItem('user', JSON.stringify(userRes.user.username));
        window.location.replace('/airlinesList');
      }
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(userApiFailure(errorMsg));
    });
};

export default login;
