import App from '../../components/App';
import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from '../../Routes';
 
Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

  });

  test('renders Routes correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Routes)).toHaveLength(1);
  })
});