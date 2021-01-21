import PropTypes from 'prop-types'

const Button = ({ placeholder = '', icon, type = 'submit', className = '', handleClick }) => {
  return (
    <button className={`button ${className}`} onClick={handleClick} type={type}>
      {placeholder}
      {icon}
    </button>
  )
}

export default Button

Button.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.element
}
