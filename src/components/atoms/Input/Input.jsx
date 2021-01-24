import { forwardRef } from 'react'
import { string, number, oneOfType } from 'prop-types'
import './style.scss'

const Input = ({
  placeholder = null,
  type = 'text',
  className = '',
  name,
  value,
  id,
  ...props
}, ref) => {
  return (
    <input
      className={`input ${className}`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      id={id}
      ref={ref}
      {...props}
    />
  )
}

export default forwardRef(Input)

Input.propTypes = {
  placeholder: string,
  type: string,
  name: string.isRequired,
  value: oneOfType([string, number]),
  className: string,
  id: string
}
