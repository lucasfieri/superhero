import { arrayOf, element, bool, string, oneOfType } from 'prop-types'
import './style.scss'

const Container = ({ children, variation = '' }) => (
  <main className={`container ${variation}`}>
    {children}
  </main>
)

export default Container

Container.propTypes = {
  children: oneOfType([arrayOf(element), bool, string]),
  variation: string
}
