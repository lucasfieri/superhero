import PropTypes from 'prop-types'
import './style.scss'

const Container = ({ children }) => (
  <main className='container'>
    {children}
  </main>
)

export default Container

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}
