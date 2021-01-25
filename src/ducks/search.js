import Immutable from 'seamless-immutable'
import SuperHeroAPI from '../services'

export const Types = {
  CHANGE: 'search/CHANGE',
  CLICK: 'serach/CLICK',
  FETCH_REQUEST: 'search/FETCH_REQUEST',
  FETCH_SUCCESS: 'search/FETCH_SUCCESS',
  FETCH_FAIL: 'search/FETCH_FAIL'
}

const initialState = Immutable({
  inputSearch: '',
  results: [{}]
})

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.CHANGE:
      return {
        ...state,
        inputSearch: action.payload
      }
    case Types.CLICK:
      return {
        ...state
      }
    case Types.FETCH_REQUEST:
      return {
        ...state
      }
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        results: action.payload
      }
    case Types.FETCH_FAIL:
      return {
        ...state,
        results: [{}]
      }
    default:
      return state
  }
}

export const fetchHeroes = () => {
  return async function (dispatch, getState) {
    dispatch({ type: Types.CLICK })
    dispatch({ type: Types.FETCH_REQUEST })
    try {
      const { search } = getState()
      const response = await SuperHeroAPI.getByQuery(search.inputSearch)
      console.log(response)
      return dispatch({ type: Types.FETCH_SUCCESS, payload: response.data.results })
    } catch (e) {
      dispatch({ type: Types.FETCH_FAIL })
    }
  }
}

export function changeInputSearch (inputSearch) {
  return {
    type: Types.CHANGE,
    payload: inputSearch
  }
}
