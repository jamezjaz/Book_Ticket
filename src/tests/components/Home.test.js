import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../container/Home';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Home />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it contains a button element', () => {
    const wrapper = shallow(<Home />);
    const button = <button type="button">Login</button>;
    expect(wrapper.containsMatchingElement(button)).toBe(true);
  });

  test('renders text in the dom correctly', () => {
    render(
      <Router>
        <Home />
      </Router>,
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
