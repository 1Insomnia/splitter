import { FaPercent } from 'react-icons/fa'

const PercentButton = ({ id, value, setPercent, active, setButtonsState }) => {
  const handleState = () => {
    setButtonsState(prevState =>
      prevState.map(button => {
        if (button.id === id) {
          return {
            id: button.id,
            value: button.value,
            active: true
          }
        }
        return {
          id: button.id,
          value: button.value,
          active: false
        }
      })
    )
  }

  return (
    <button
      className={
        active
          ? 'flex items-center justify-center bg-cyan text-cyan-dark rounded-md overflow-hidden w-16 h-8'
          : 'flex items-center justify-center bg-cyan-dark rounded-md overflow-hidden w-16 h-8'
      }
      onClick={() => {
        setPercent(value)
        handleState()
      }}
      type="button"
    >
      <span className="text-cyan-light">{value * 100}</span>
      <FaPercent size={10} className="text-cyan-light ml-1" />
    </button>
  )
}

export default PercentButton
