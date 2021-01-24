import PropTypes from 'prop-types'
import { forwardRef } from 'react'

import './style.scss'

const Button = ({ placeholder = null, icon, type = 'button', variation = null, handleClick }, ref) => {
  return (
    <button className={`button ${variation}`} onClick={handleClick} type={type} ref={ref}>
      {placeholder}
      {icon}
    </button>
  )
}

export default forwardRef(Button)

Button.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  variation: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.element
}
