import { oneOfType, string, element, arrayOf, number } from 'prop-types'
import './style.scss'

const Span = ({ children, className = null }) => {
  return (
    <span className={`span ${className}`}>
      {children}
    </span>
  )
}

export default Span

Span.propTypes = {
  children: oneOfType([string, element, arrayOf(element), number]),
  className: string
}
