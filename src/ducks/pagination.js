import Immutable from 'seamless-immutable'

export const Types = {
  SET_OFFSET: 'pagination/SET_OFFSET',
  SET_DATA: 'pagination/SET_DATA'
}

const initialState = Immutable({
  offset: 0,
  perPage: 8,
  data: [{}]
})

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.SET_OFFSET:
      return {
        ...state,
        offset: action.payload
      }
    case Types.SET_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export function getCards () {
  return (dispatch, getState) => {
    console.log('entrou')
    const { pagination, search } = getState()
    const { results } = search
    const { offset, perPage } = pagination
    if (results.length) {
      const slice = results.slice(offset, offset + perPage)
      console.log('aaaaaaaaa', slice)
      dispatch({ type: Types.SET_DATA, payload: slice })
    }
  }
}

export function changeOffSet (selectedPage) {
  return {
    type: Types.SET_OFFSET,
    payload: selectedPage
  }
}
