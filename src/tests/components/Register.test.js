import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Register from '../../container/Register';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Register', () => {
    test('renders Register component', () => {
      const div = document.createElement('div');
      const { queryAllByTestId } = render(
        (<Provider store={store}>
          <Router>
            <Route path="/register" component={Register} />
          </Router>
        </Provider>),
      );
      const container = queryAllByTestId('container');
      expect(container).toBeTruthy();
    });
  
    test('it should have a Register form', () => {
      const div = document.createElement('div');
      const { queryAllByTestId } = render(
        (<Provider store={store}>
            <Router>
              <Route path="/register" component={Register} />
            </Router>
        </Provider>),
      );
      const form = queryAllByTestId('form');
      expect(form).toBeTruthy();
    });
  });
