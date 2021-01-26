import {
  useImperativeHandle,
  forwardRef,
  useCallback,
  useEffect
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decideModal, closeModal } from '../../../ducks/modal'
import { createPortal } from 'react-dom'
import { element, string, arrayOf, bool } from 'prop-types'

import './style.scss'

const modalElement = document.getElementById('modal-root')

const Modal = ({ className = '', fade = false, children }, ref) => {
  const isModalOpen = useSelector(state => state.modal.isModalOpen)
  const dispatch = useDispatch()

  const close = useCallback(() => dispatch(decideModal(isModalOpen)), [dispatch, isModalOpen])

  useImperativeHandle(ref, () => ({
    open: () => dispatch(decideModal(isModalOpen)),
    close
  }), [dispatch, isModalOpen, close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) dispatch(closeModal())
  }, [dispatch])

  useEffect(() => {
    if (isModalOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isModalOpen])

  return createPortal(
    isModalOpen
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
  fade: bool
}
