import React from 'react';/* 
import { render } from '@testing-library/react'; */
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdaptor from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter: new EnzymeAdaptor()})

const setup=(props={}, state=null)=> {
  const wrapper = shallow(<App {...props} />)
  if(state) wrapper.setState(state)
  return wrapper
}

const findByTestAttr=(wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders without error', ()=> {
  const wrapper=setup()
  const appComponent=findByTestAttr(wrapper,'component-app')
  expect(appComponent.length).toBe(1);
})

test('renders increment button', ()=> {
  const wrapper=setup()
  const button=findByTestAttr(wrapper,'increment-button')
  expect(button.length).toBe(1);
})

test('renders decrement button', ()=> {
  const wrapper=setup()
  const button=findByTestAttr(wrapper, 'decrement-button')
  expect(button.length).toBe(1)
})

test('renders counter display', ()=> {
  const wrapper=setup()
  const counterDisplay=findByTestAttr(wrapper,'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('counter starts at zero', ()=> {
  const wrapper=setup()
  const initialCounterState=wrapper.state('counter')
  expect(initialCounterState).toBe(0)
})

test('clicking increment button icrements the counter display', ()=> {
  const counter=7
  const wrapper=setup(null, {counter})
  const button=findByTestAttr(wrapper,'increment-button')
  button.simulate('click')
  const counterDisplay=findByTestAttr(wrapper,'counter-display')
  expect(counterDisplay.text()).toContain('The counter is currently 8')
})

test('clicking decrement button decrements the counter display', ()=> {
const counter=7
const wrapper=setup(null, {counter})
const button=findByTestAttr(wrapper, 'decrement-button')
button.simulate('click')
const counterDisplay=findByTestAttr(wrapper,'counter-display')
 expect(counterDisplay.text()).toContain('The counter is currently 6')
})

test('clicking decrement button below zero displays the error message', ()=> {
  const counter=0
  const wrapper=setup(null, {counter})
  const button=findByTestAttr(wrapper, 'decrement-button')
  button.simulate('click')
  let errorDisplay=findByTestAttr(wrapper,'error-display')
  expect(errorDisplay.length).toBe(1)
  expect(errorDisplay.hasClass('redfont'))
})

test('clicking increment button upon receiving error message hides the error message', ()=> {
  const error=true
  const counter=0
  const wrapper=setup(null, {counter, error})
  let errorDisplay=findByTestAttr(wrapper,'error-display')
  expect(errorDisplay.length).toBe(1)
  const button=findByTestAttr(wrapper,'increment-button')
  button.simulate('click')
  errorDisplay=findByTestAttr(wrapper,'error-display')
  expect(errorDisplay.length).toBe(0)
  const counterDisplay=findByTestAttr(wrapper,'counter-display')
  expect(counterDisplay.text()).toContain('The counter is currently 1')
})