import React from 'react';/* 
import { render } from '@testing-library/react'; */
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdaptor from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter: new EnzymeAdaptor()})

test('renders without error', ()=> {
  const wrapper=shallow(<App />)
  const appComponent=wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
})

test('renders increment button', ()=> {
  
})

test('renders counter display', ()=> {
  
})

test('counter starts at zero', ()=> {
  
})

test('clicking button implements the counter display', ()=> {
  
})
