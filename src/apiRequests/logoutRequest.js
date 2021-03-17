import axios from 'axios'
import { logoutUserAction } from '../actions';

const logout = dispatch => {
  const url = 'http://localhost:3001/logout';
  axios.delete(url, { 'content-type': 'application/json', withCredentials: true })
    .then(response => {
      const logoutRes = response.data;
      dispatch(logoutUserAction(logoutRes));
    })
    // console.log(logoutRes);
};

export default logout;