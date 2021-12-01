const Input = ({ value, onChange, type, id, name, placeholder }) => {
  return (
    <div className="flex items-center bg-cyan-light py-3 px-2 rounded-md overflow-hidden">
      <input
        type={type}
        id={id}
        name={name}
        className="bg-cyan-light block w-full outline-none text-cyan-dark placeholder-cyan-dark text-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
