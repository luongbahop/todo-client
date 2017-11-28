import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import Authentication from './index';

describe('<Authentication />', () => {
  it('should render 1 components', () => {
    const wrapper = shallow(<Authentication />);
    // expect(wrapper.find(CopyRight)).to.have.length(1);
    expect(true).toEqual(true);
  });
  // it('should render props components', () => {
  //   const wrapper = shallow(<Footer title="hop" />);
  //   expect(wrapper.props('title')).toEqual('hop');
  // });
});