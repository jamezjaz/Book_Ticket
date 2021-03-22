import axios from 'axios';
import { userApiFailure, userApiRequest, userApiSuccess } from '../actions/users/actionCreators';
import header, { url } from './apiLink';

const registration = userObj => dispatch => {
  console.log(userObj);
  dispatch(userApiRequest());
  axios.post(`${url}/auth/register`, userObj, header)
    .then(response => {
      const userRes = response.data;
      dispatch(userApiSuccess(userRes));
      // console.log(userRes);
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(userApiFailure(errorMsg));
    });
};

export default registration;
