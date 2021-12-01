import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import PercentButtonList from './PercentButtonList'
import Label from './Label'
import Input from './Input'
import Result from './Result'

const validationRules = {
  bill: Yup.number().required('Required'),
  people: Yup.number().required('Required')
}

const Form = () => {
  const [buttonsState, setButtonsState] = useState([
    {
      id: 1,
      value: 0.1,
      active: true
    },
    {
      id: 2,
      value: 0.15,
      active: false
    },
    {
      id: 3,
      value: 0.25,
      active: false
    },
    {
      id: 4,
      value: 0.5,
      active: false
    }
  ])
  const [percent, setPercent] = useState(10)
  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)

  const formik = useFormik({
    initialValues: {
      bill: 0,
      people: 0
    },
    validationSchema: Yup.object(validationRules),
    onSubmit: values => {
      setTip((values.bill * percent) / values.people)
      setTotal(
        values.bill / values.people + (values.bill * percent) / values.people
      )
    }
  })

  return (
    <form
      className="p-4 bg-light shadow-lg rounded-xl max-w-3xl mx-auto lg:flex lg:gap-8 lg:p-8"
      onSubmit={formik.handleSubmit}
    >
      <div className="lg:flex-1">
        <Label htmlFor="bill" text="Bill" />
        <Input
          type="number"
          id="bill"
          name="bill"
          placeholder="0"
          onChange={formik.handleChange}
          value={formik.values.bill}
        />
        <PercentButtonList
          buttonsState={buttonsState}
          setButtonsState={setButtonsState}
          setPercent={setPercent}
        />
        <Label htmlFor="people" text="Number of people" />
        <Input
          type="number"
          id="people"
          name="people"
          placeholder="0"
          onChange={formik.handleChange}
          value={formik.values.people}
        />
      </div>
      <Result total={total} tip={tip} />
    </form>
  )
}

export default Form
