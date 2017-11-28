import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import App from '../App';

it('renders App without crashing', () => {
  shallow(<App />);
});