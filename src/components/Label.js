import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ htmlFor, text }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-cyan-dark mb-2 block text-sm capitalize"
    >
      {text}
    </label>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string
}

export default Label
