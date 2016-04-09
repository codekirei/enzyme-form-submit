import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Form from '../src/form.jsx'

const render = () => {
  const spy = sinon.spy()
  const output = mount(<Form handler={spy} />)
  const form = output.find('form')
  const button = output.find('button')
  return { spy, form, button }
}

exports['<Form />'] = {

  'handles submit with submit event on form': () => {
    const { spy, form } = render()
    form.simulate('submit')
    expect(spy.called).to.equal(true)
  },

  'handles submit with click event on button': () => {
    const { spy, button } = render()
    button.simulate('click')
    expect(spy.called).to.equal(true)
  },
}
