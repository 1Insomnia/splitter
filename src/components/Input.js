import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ refTarget, type, id, name, placeholder }) => {
  return (
    <div className="flex items-center bg-cyan-light py-3 px-2 rounded-md overflow-hidden">
      <input
        type={type}
        id={id}
        name={name}
        className="bg-cyan-light block w-full outline-none text-cyan-dark placeholder-cyan-dark text-sm"
        placeholder={placeholder}
        ref={refTarget}
      />
    </div>
  )
}

Input.propTypes = {
  refTarget: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string
}

export default Input
