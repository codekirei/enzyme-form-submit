import React from 'react'
import ReactDOM from 'react-dom'

const rootEl = document.getElementById('root')

const handler = text => alert('handler called!')

const render = () => {
  const Form = require('./form.jsx').default
  ReactDOM.render(
    <Form handler={handler} />,
    rootEl
  )
}

if (module.hot) module.hot.accept('./form.jsx', () => setTimeout(render))

render()
