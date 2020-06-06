import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useDispatch, useShallowEqualSelector } from 'react-redux';

configure({ adapter: new Adapter() });

describe('<LoginForm /> with no props', () => {

  jest.mock('react-redux');

  const container = shallow(<LoginForm />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  
});