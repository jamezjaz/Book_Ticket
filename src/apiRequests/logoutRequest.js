import axios from 'axios';
import { logoutUserAction } from '../actions/users/actionCreators';

const logout = user => dispatch => {
  const url = 'http://localhost:3001/logout';
  axios.delete(url, user, { 'content-type': 'application/json', withCredentials: true })
    .then(response => {
      const logoutRes = response.data;
      dispatch(logoutUserAction(logoutRes));
      console.log(logoutRes);
    });
};

export default logout;
