import { useState } from 'react'
import { Popover as PopoverTiny } from 'react-tiny-popover'
import Buttom from '../../atoms/Button/Button'
import PropTypes from 'prop-types'
import './style.scss'

const Popover = ({ positions, content, buttonIcon, buttonVariation }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState()
  return (
    <PopoverTiny
      containerClassName='popover_tiny'
      isOpen={isPopoverOpen}
      positions={positions}
      padding={10}
      content={content}
      onClickOutside={() => setIsPopoverOpen(!isPopoverOpen)}
    >
      <Buttom
        handleClick={() => setIsPopoverOpen(!isPopoverOpen)}
        variation={buttonVariation}
        type='button'
        icon={buttonIcon}
      />
    </PopoverTiny>
  )
}

export default Popover

Popover.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.element,
  content: PropTypes.element,
  buttonIcon: PropTypes.element,
  buttonVariation: PropTypes.string
}
