import Immutable from 'seamless-immutable'
import { push } from 'connected-react-router'

import SuperHeroAPI from '../services'

export const Types = {
  CHANGE_SEARCH: 'search/CHANGE_SEARCH',
  CLICK_SEARCH: 'search/CLICK_SEARCH',
  FETCH_REQUEST: 'search/FETCH_REQUEST',
  FETCH_SUCCESS: 'search/FETCH_SUCCESS',
  FETCH_FAIL: 'search/FETCH_FAIL'
}

const initialState = Immutable({
  inputSearch: '',
  isFetching: false,
  results: [{}]
})

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.CHANGE_SEARCH:
      return {
        ...state,
        inputSearch: action.payload
      }
    case Types.CLICK_SEARCH:
      return {
        ...state
      }
    case Types.FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        results: action.payload,
        isFetching: false
      }
    case Types.FETCH_FAIL:
      return {
        ...state,
        results: [{}],
        isFetching: false
      }
    default:
      return state
  }
}

export function changeInputSearch (inputSearch) {
  return {
    type: Types.CHANGE_SEARCH,
    payload: inputSearch
  }
}

export const fetchHeroes = () => {
  return async function (dispatch, getState) {
    dispatch({ type: Types.CLICK_SEARCH })
    const { search } = getState()
    dispatch(push(`/${search.inputSearch}`))
  }
}

export const fetchHeroesOnLoadPage = (path) => {
  return async function (dispatch) {
    dispatch({ type: Types.FETCH_REQUEST })
    dispatch({ type: Types.CHANGE_SEARCH, payload: path })
    try {
      const response = await SuperHeroAPI.getByQuery(path)
      if (response.data.error) {
        throw new Error()
      }
      dispatch({ type: Types.FETCH_SUCCESS, payload: response?.data?.results })
    } catch (e) {
      console.error('error', e)
      dispatch({ type: Types.FETCH_FAIL })
    }
  }
}
