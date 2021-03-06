import { useDispatch, useSelector } from 'react-redux'
import { decidePopover } from '../../../ducks/popover'
import { Popover as PopoverTiny } from 'react-tiny-popover'
import Buttom from '../../atoms/Button/Button'
import { element, string, arrayOf } from 'prop-types'
import './style.scss'

const Popover = ({ positions, content, buttonIcon, buttonVariation }) => {
  const isPopoverOpen = useSelector(state => state.popover.isPopoverOpen)
  const dispatch = useDispatch()

  return (
    <PopoverTiny
      containerClassName='popover_tiny'
      isOpen={isPopoverOpen}
      positions={positions}
      padding={10}
      content={content}
      onClickOutside={() => dispatch(decidePopover(isPopoverOpen))}
    >
      <Buttom
        handleClick={() => dispatch(decidePopover(isPopoverOpen))}
        variation={buttonVariation}
        type='button'
        icon={buttonIcon}
      />
    </PopoverTiny>
  )
}

export default Popover

Popover.propTypes = {
  positions: arrayOf(string),
  children: element,
  content: element,
  buttonIcon: element,
  buttonVariation: string
}
