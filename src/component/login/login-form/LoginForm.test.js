import React from 'react';
import Enzyme, { mount } from 'enzyme';
import LoginForm from './LoginForm';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../persistence/reducers';
import { AUTH_USER } from '../../../core/constant/app'
Enzyme.configure({ adapter: new EnzymeAdapter() });


jest.mock("react-redux", () => ({
  connect: () => jest.fn(),
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

describe('<LoginForm /> with no props', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });


  it('should match the snapshot', () => {
    const container = mount(<LoginForm />);
    expect(container.html()).toMatchSnapshot();

  });

  
});