import axios from 'axios';
import { fetchAirlineRequest, fetchAirlineSuccess } from '../actions/airlines/actionCreators';

const fetchAirlines = () => dispatch => {
  const url = 'http://localhost:3001/airlines';
  dispatch(fetchAirlineRequest);
  axios.get(url, {
    method: 'GET',
    mode: 'cors',
  })
    .then(response => {
      const airRes = response.data;
      dispatch(fetchAirlineSuccess(airRes));
      console.log(airRes);
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchAirlines(errorMsg));
    });
};

export default fetchAirlines;
