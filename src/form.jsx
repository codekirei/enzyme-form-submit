import React, { PropTypes } from 'react'

const Form = ({ handler }) => {
  let input
  const ref = node => { input = node }

  const onSubmit = e => {
    e.preventDefault()
    handler(input.value)
    input.value = ''
  }

  return (
    <form onSubmit={onSubmit} >
      <input ref={ref} />
      <button type="submit">Submit</button>
    </form>
  )
}

Form.propTypes = {
  handler: PropTypes.func.isRequired,
}

export default Form
