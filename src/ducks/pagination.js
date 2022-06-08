import Immutable from 'seamless-immutable'

export const Types = {
  SET_CURRENT_ITENS: 'pagination/SET_CURRENT_ITENS',
  SET_ITEM_OFFSET: 'pagination/SET_ITEM_OFFSET',
  SET_PAGE_COUNT: 'pagination/SET_PAGE_COUNT'
}

const initialState = Immutable({
  currentItems: [{}],
  pageCount: 0,
  itemOffset: 0
})

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.SET_CURRENT_ITENS:
      return {
        ...state,
        currentItems: action.payload
      }
    case Types.SET_ITEM_OFFSET:
      return {
        ...state,
        itemOffset: action.payload
      }
    case Types.SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: action.payload
      }
    default:
      return state
  }
}

export function getCards () {
  return (dispatch, getState) => {
    const { pagination, search } = getState()
    const { results } = search
    const { itemOffset } = pagination

    const endOffset = itemOffset + 8;
    const slice = results.slice(itemOffset, endOffset)
    dispatch({ type: Types.SET_CURRENT_ITENS, payload: slice })
    dispatch({ type: Types.SET_PAGE_COUNT, payload: Math.ceil(results.length / 8) })
  }
}

export function changeOffSet (event) {
  return (dispatch, getState) => {
    const { search } = getState()
    const { results } = search
    const newOffset = (event.selected * 8) % results.length;
    dispatch({ type: Types.SET_ITEM_OFFSET, payload: newOffset })
  }
}


