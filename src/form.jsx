import React, { PropTypes } from 'react'

const Form = ({ handler }) => {
  const onSubmit = e => {
    e.preventDefault()
    handler()
  }

  return (
    <form onSubmit={onSubmit} >
      <input />
      <button type="submit">Submit</button>
    </form>
  )
}

Form.propTypes = {
  handler: PropTypes.func.isRequired,
}

export default Form
