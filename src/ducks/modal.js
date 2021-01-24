import Immutable from 'seamless-immutable'

export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE'
}

const initialState = Immutable({
  isModalOpen: false
})

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.OPEN:
      return {
        ...state,
        isModalOpen: true
      }
    case Types.CLOSE:
      return {
        ...state,
        isModalOpen: false
      }
    default:
      return state
  }
}

export function decideModal (modalState) {
  if (modalState) {
    return {
      type: Types.CLOSE
    }
  }
  return {
    type: Types.OPEN
  }
}

export function closeModal () {
  return {
    type: Types.CLOSE
  }
}
