// export const url = 'https://jaz-air-tickets.herokuapp.com';
export const url = 'http://localhost:3001';
const header = {
  header: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${localStorage.getItem('token')}`,
  },
};

export default header;
