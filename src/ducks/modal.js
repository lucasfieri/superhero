import Immutable from 'seamless-immutable'

export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE',
  CONTENT: 'modal/CONTENT',
}

const initialState = Immutable({
  isModalOpen: false,
  content: {},
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
    case Types.CONTENT:
      return {
        ...state,
        content: action.payload
      }
    default:
      return state
  }
}

export function selectHero (hero) {
  return (dispatch) => {
    dispatch({ type: Types.OPEN })
    dispatch({ type: Types.CONTENT, payload: hero })
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
