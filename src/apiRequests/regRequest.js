import axios from 'axios';
import { userApiFailure, userApiRequest, userApiSuccess } from '../actions/users/actionCreators';

const registration = userObj => dispatch => {
  console.log(userObj);
  const url = 'http://localhost:3001/registrations';
  // const url = 'https://jaz-book-ticket-api.herokuapp.com/registrations';
  dispatch(userApiRequest());
  axios.post(url, userObj, { 'content-type': 'application/json', withCredentials: true })
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
