import PropTypes from 'prop-types'

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
