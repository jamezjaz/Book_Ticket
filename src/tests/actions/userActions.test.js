import {
  logoutUserAction,
  userApiFailure,
  userApiRequest,
  userApiSuccess,
} from '../../actions/users/actionCreators';

const userRequest = userApiRequest();
const userSuccess = userApiSuccess();
const anotherUserSuccess = userApiSuccess('Microverse');
const userFailure = userApiFailure();
const userFailure2 = userApiFailure('error');
const logOut = logoutUserAction();

describe('user actions', () => {
  test('value of type on userApiRequest should be USER_API_REQUEST', () => {
    expect(userRequest.type).toBe('USER_API_REQUEST');
  });

  test('value of payload on userApiRequest should be undefined', () => {
    expect(userRequest.payload).toBe(undefined);
  });

  test('value of type on userApiSuccess should be USER_API_SUCCESS', () => {
    expect(userSuccess.type).toBe('USER_API_SUCCESS');
  });

  test('value of payload on userApiSuccess should be undefined', () => {
    expect(userSuccess.payload).toBe(undefined);
  });

  test('value of payload on userApiSuccess should not be null', () => {
    expect(userSuccess.payload).not.toBe(null);
  });

  test('value of payload on userApiSuccess should be "Microverse"', () => {
    expect(anotherUserSuccess.payload).toBe('Microverse');
  });

  test('value of type on userApiFailure should be USER_API_FAILURE', () => {
    expect(userFailure.type).toBe('USER_API_FAILURE');
  });

  test('value of payload on userApiFailure should be undefined', () => {
    expect(userFailure2.payload).toBe('error');
  });

  test('value of type on logoutUserAction should be LOGOUT_USER', () => {
    expect(logOut.type).toBe('LOGOUT_USER');
  });
});
