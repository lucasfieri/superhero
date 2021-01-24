import { oneOfType, string, element, arrayOf } from 'prop-types'
import './style.scss'

const Label = ({ children, htmlFor = null, className = '' }) => {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      {children}
    </label>
  )
}

export default Label

Label.propTypes = {
  children: oneOfType([string, element, arrayOf(element)]),
  htmlFor: string,
  className: string
}
