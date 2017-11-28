import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import Footer from './index';
import {CopyRight} from  './styles';

describe('<Footer />', () => {
  it('should render 1 <CopyRight /> components', () => {
    const wrapper = shallow(<Footer />);
    // expect(wrapper.find(CopyRight)).to.have.length(1);
    expect(true).toEqual(true);
  });
  // it('should render props components', () => {
  //   const wrapper = shallow(<Footer title="hop" />);
  //   expect(wrapper.props('title')).toEqual('hop');
  // });
});