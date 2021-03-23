import axios from 'axios';
import { fetchAirlineRequest, fetchAirlineSuccess } from '../actions/airlines/actionCreators';
import header, { url } from './apiLink';

const fetchAirlines = () => dispatch => {
  dispatch(fetchAirlineRequest);
  axios.get(`${url}/airlines`, header)
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
