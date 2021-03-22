export const url = 'https://jaz-air-tickets.herokuapp.com';
const header = {
  header: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${localStorage.getItem('token')}`,
  },
};

export default header;
