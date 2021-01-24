import Immutable from 'seamless-immutable'

export const Types = {
  OPEN: 'popover/OPEN',
  CLOSE: 'popover/CLOSE'
}

const initialState = Immutable({
  isPopoverOpen: false
})

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.OPEN:
      return {
        ...state,
        isPopoverOpen: true
      }
    case Types.CLOSE:
      return {
        ...state,
        isPopoverOpen: false
      }
    default:
      return state
  }
}

export function decidePopover (popoverState) {
  if (popoverState) {
    return {
      type: Types.CLOSE
    }
  }
  return {
    type: Types.OPEN
  }
}
