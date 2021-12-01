import PropTypes from 'prop-types'
import PercentButton from './PercentButton'

const PercentButtonList = ({ buttonsState, setPercent, setButtonsState }) => {
  return (
    <div className="flex gap-2 my-8">
      {buttonsState.map(button => (
        <PercentButton
          {...button}
          setPercent={setPercent}
          setButtonsState={setButtonsState}
          key={button.id}
        />
      ))}
    </div>
  )
}

PercentButtonList.propTypes = {
  percentValues: PropTypes.array,
  setPercent: PropTypes.func
}

export default PercentButtonList
