import PropTypes from 'prop-types'
import './style.scss'

const Input = ({ placeholder = '', type = 'text', name, value, className = '' }) => {
  return (
    <input
      className={`input ${className}`}
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
  value: PropTypes.string,
  className: PropTypes.string
}
