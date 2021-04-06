import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import DatePicker from 'react-datepicker';
import AirlineDetailsStyles from '../styles/AirlineDetailsStyles.module.css';
import SideNav from '../components/SideNav';
import DropDown from '../components/DropDown';
import BookTicket from './BookTicket';

const AirlineDetails = ({
  user,
  airlines,
  match,
  // history,
}) => {
  const airlineId = parseInt(match.params.id, 10);
  // const [date, setDate] = useState(new Date());
  console.log('USER', user);

  // const handleDate = date => {
  //   setDate(date);
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   history.push('/bookTicket');
  // };

  return (
    <div className="d-flex container-fluid">
      <div className="col-2 d-none d-md-flex border min-vh-100 px-0">
        <SideNav />
      </div>
      <div className="col-10 px-0">
        <DropDown />
        {airlines.filter(airline => airline.id === airlineId).map(airline => (
          <div key={airline.id} className={AirlineDetailsStyles.details}>
            <img src={airline.image.url} className={AirlineDetailsStyles.img} alt={airline.name} />
            <div className={AirlineDetailsStyles.data}>
              <div className="mb-5">
                <h2 className={AirlineDetailsStyles.name}>{airline.name}</h2>
                <span>{airline.description}</span>
              </div>
              <BookTicket />
              {/* <form>
                <label htmlFor="name">
                  Name Of Airline:
                  <br />
                  <input type="text" name="name" id="name" value={airline.name} readOnly />
                </label>
                <br />
                <label htmlFor="price">
                  Price:
                  <br />
                  <input
                    type="text" name="price" id="price" value={`$ ${airline.price}`} readOnly />
                </label>
                <br />
                <label htmlFor="location">
                  Location:
                  <br />
                  <input
                    type="text" name="location" id="location" value={airline.location} readOnly />
                </label>
                <br />
                <div htmlFor="date">
                  Date:
                  <br />
                  <DatePicker
                    name="date"
                    type="date"
                    id="date"
                    selected={date}
                    onChange={handleDate}
                  />
                </div>
                <br />
                <div className="text-center">
                  <button
                    type="submit"
                    className={`${AirlineDetailsStyles.bookTicket} btn`}
                    onClick={handleSubmit}>Book Ticket</button>
                </div>
              </form> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AirlineDetails.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  airlines: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  // history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  airlines: state.airline.airlines,
  user: state.user.user,
});

export default connect(mapStateToProps, null)(AirlineDetails);
