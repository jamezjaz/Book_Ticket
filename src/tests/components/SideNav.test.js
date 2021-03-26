import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SideNav from '../../components/SideNav';

import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});


describe('<SideNav />', () => {
  test('matches SideNav snapshot', () => {
    const tree = renderer
      .create(
      (<Provider store={store}>
        <Router>
          <SideNav />
        </Router>
      </Provider>),
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders SideNav component correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <SideNav />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('AIRLINES')).toBeInTheDocument();
  });
});