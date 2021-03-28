import {
  addAirlineAction, fetchAirlineFailure, fetchAirlineRequest, fetchAirlineSuccess,
} from '../../actions/airlines/actionCreators';

const airlineRequest = fetchAirlineRequest();
const airlineSuccess = fetchAirlineSuccess();
const airlineSuccess2 = fetchAirlineSuccess('airlines');
const airlineFailure = fetchAirlineFailure();
const airlineFailure2 = fetchAirlineFailure('error');
const addAirline = addAirlineAction();
const addAirline2 = addAirlineAction('airline');

describe('airline actions', () => {
  test('value of type on fetchAirlineAction should be FETCH_AIRLINE_REQUEST', () => {
    expect(airlineRequest.type).toBe('FETCH_AIRLINE_REQUEST');
  });

  test('value of type on fetchAirlineAction should be FETCH_AIRLINE_REQUEST', () => {
    expect(airlineRequest.type).not.toBe(null);
  });

  test('value of payload on fetchAirlineAction should be undefined', () => {
    expect(airlineRequest.payload).toBe(undefined);
  });

  test('value of type on fetchAirlineSuccess should be FETCH_AIRLINE_SUCCESS', () => {
    expect(airlineSuccess.type).toBe('FETCH_AIRLINE_SUCCESS');
  });

  test('value of type on fetchAirlineSuccess should be FETCH_AIRLINE_SUCCESS', () => {
    expect(airlineSuccess.type).not.toBe(null);
  });

  test('value of payload on fetchAirlineSuccess should be undefined', () => {
    expect(airlineSuccess2.payload).toBe('airlines');
  });

  test('value of type on fetchAirlineFailure should be FETCH_AIRLINE_FAILURE', () => {
    expect(airlineFailure.type).toBe('FETCH_AIRLINE_FAILURE');
  });

  test('value of type on fetchAirlineFailure should be FETCH_AIRLINE_FAILURE', () => {
    expect(airlineFailure.type).not.toBe(null);
  });

  test('value of payload on fetchAirlineFailure should be undefined', () => {
    expect(airlineFailure2.payload).toBe('error');
  });

  test('value of type on addAirlineAction should be ADD_AIRLINE', () => {
    expect(addAirline.type).toBe('ADD_AIRLINE');
  });

  test('value of type on addAirlineAction should be ADD_AIRLINE', () => {
    expect(addAirline.type).not.toBe(null);
  });

  test('value of payload on addAirlineAction should be undefined', () => {
    expect(addAirline2.payload).toBe('airline');
  });
});
