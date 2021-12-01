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

export default Label
