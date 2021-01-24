import {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useEffect
} from 'react'
import { createPortal } from 'react-dom'
import { element, string, arrayOf, bool } from 'prop-types'

import './style.scss'

const modalElement = document.getElementById('modal-root')

const Modal = ({ className = null, fade = false, children, defaultOpened = false }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpened)

  const close = useCallback(() => setIsOpen(false), [])

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [close])

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  return createPortal(
    isOpen
      ? (
        <div className={`modal ${fade ? 'modal-fade' : ''} ${className}`}>
          <div aria-hidden className='modal-overlay' onClick={close} />
          <div className='modal-body'>{children}</div>
        </div>
        )
      : null,
    modalElement
  )
}

export default forwardRef(Modal)

Modal.propTypes = {
  className: string,
  children: arrayOf([string, element]),
  defaultOpened: bool,
  fade: bool
}
