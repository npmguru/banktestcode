import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Loading /> with no props', () => {

  const container = shallow(<Loading />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  
});