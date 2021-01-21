import PropTypes from 'prop-types'

const Container = ({ children }) => (
  <main className='container'>
    {children}
  </main>
)

export default Container

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}
