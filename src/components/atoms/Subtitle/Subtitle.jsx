import PropTypes from 'prop-types'
import './style.scss'

const Subtitle = ({ text }) => {
  return (
    <h4 className='subtitle'>
      {text}
    </h4>
  )
}

export default Subtitle

Subtitle.propTypes = {
  text: PropTypes.string
}
