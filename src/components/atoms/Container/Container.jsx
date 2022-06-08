import { string, node } from 'prop-types'
import './style.scss'

const Container = ({ children, variation = '' }) => (
  <main className={`container ${variation}`}>
    {children}
  </main>
)

export default Container

Container.propTypes = {
  children: node,
  variation: string
}
