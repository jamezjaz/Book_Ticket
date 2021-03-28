import React from 'react';
import PropTypes from 'prop-types';

const TicketDetails = props => {
  const { ticket } = props;

  return (
    <>
      <div className="container-fluid">
        <div className="text-left">
          <p>Dear Reviewer,</p>
          <p>
            I was able to book/create tickets successfully on the
            back end have them logged to the console but I&apos;m
            unable to render these tickets on the browser, and right now I&apos;m almost saturated.
          </p>
          <p>Please, I need help with this feature.</p>
          <p>Thank you</p>
        </div>
        <h3>{ticket.airline_name}</h3>
        <h3>{ticket.username}</h3>
        <h3>{ticket.city}</h3>
        <h3>{ticket.date}</h3>
      </div>
    </>
  );
};

TicketDetails.propTypes = {
  ticket: PropTypes.string.isRequired,
};

// TicketDetails.defaultProps = {
//   ticket: {},
// };

export default TicketDetails;
