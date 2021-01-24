import PropTypes from 'prop-types'
import './style.scss'

const Subtitle = ({ text, className = null }) => {
  return (
    <h4 className={`subtitle ${className}`}>
      {text}
    </h4>
  )
}

export default Subtitle

Subtitle.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}
