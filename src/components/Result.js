import PropTypes from 'prop-types'
import React from 'react'
import SubmitButton from './SubmitButton'

const Result = ({ result }) => {
  return (
    <div className="p-4 bg-cyan-dark text-light rounded-lg mt-8">
      <div></div>
      <SubmitButton />
    </div>
  )
}

Result.propTypes = {
  result: PropTypes.number
}

export default Result
