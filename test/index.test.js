/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render} from 'enzyme';
import Index from '../client/src/index';

// Enzyme.configure({ adapter: new Adapter() });

describe('Index', () => {
  it('it should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  });
});

describe('A suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<div></div>).exists()).toBe(true);
  });
  it('should render without throwing an error', () => {
    expect(shallow(<h1>HI IM WORKING!</h1>).exists()).toBe(true);
  });
});

describe('B suite', () => {
  it('should show text', () => {
    const wrapper = mount(<Index />);
    const text = wrapper.find('div').first();
    expect(text.text()).toBe('HI IM WORKING!');
  });
});
