import PropTypes from 'prop-types'

const Input = ({ placeholder = '', type = 'text', name, value }) => {
  return (
    <input
      className='input'
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  )
}

export default Input

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string
}
