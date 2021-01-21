import PropTypes from 'prop-types'

const Title = ({ text }) => {
  return (
    <h1 className='title'>
      {text}
    </h1>
  )
}

export default Title

Title.propTypes = {
  text: PropTypes.string
}
