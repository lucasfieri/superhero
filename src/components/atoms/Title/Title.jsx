import PropTypes from 'prop-types'
import './style.scss'

const Title = ({ text, className = '', ...props }) => {
  return (
    <h1 className={`title ${className}`} {...props}>
      {text}
    </h1>
  )
}

export default Title

Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}
