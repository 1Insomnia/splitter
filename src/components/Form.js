import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import PercentButtonList from './PercentButtonList'
import Label from './Label'
import Input from './Input'
import Result from './Result'

const percentValues = [0.1, 0.15, 0.2, 0.25]

const Form = ({ setTip }) => {
  const billRef = useRef(0)
  const peopleRef = useRef(0)
  const [percent, setPercent] = useState(5)

  const handleSubmit = e => {
    e.preventDefault()

    const billValue = parseInt(billRef.current.value)
    const peopleValue = parseInt(billRef.current.value)

    if (
      !isNaN(billValue) &&
      billValue !== 0 &&
      !isNaN(peopleValue) &&
      peopleValue !== 0
    ) {
      setTip(
        (parseInt(billRef.current.value) * percent) /
          parseInt(peopleRef.current.value)
      )
    }
  }

  return (
    <form
      className="p-4 bg-light shadow-lg rounded-xl max-w-2xl mx-auto"
      onSubmit={handleSubmit}
    >
      <Label htmlFor="bill" text="Bill" />
      <Input
        type="number"
        id="bill"
        name="bill"
        refTarget={billRef}
        placeholder="0"
      />
      <PercentButtonList
        setPercent={setPercent}
        percentValues={percentValues}
      />
      <Label htmlFor="people" text="Number of people" />
      <Input
        type="number"
        id="people"
        name="people"
        placeholder="0"
        refTarget={peopleRef}
      />
      <Result />
    </form>
  )
}

Form.propTypes = {
  setTip: PropTypes.func
}

export default Form
