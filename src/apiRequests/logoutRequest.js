// import axios from 'axios';
// import { logoutUserAction } from '../actions/users/actionCreators';
// import { url } from './apiLink';

// const logout = user => dispatch => {
//   axios.delete(url, user, {
//     'Content-Type': 'application/json',
//     Authorization: `bearer ${localStorage.clear('token')}`,
//   })
//     .then(response => {
//       const logoutRes = response.data;
//       dispatch(logoutUserAction(logoutRes));
//       console.log(logoutRes);
//     });
// };

// export default logout;
