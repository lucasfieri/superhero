import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import popoverReducer from '../ducks/popover'
import modalReducer from '../ducks/modal'
import searchReducer from '../ducks/search'
import paginationReducer from '../ducks/pagination'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  popover: popoverReducer,
  modal: modalReducer,
  search: searchReducer,
  pagination: paginationReducer
})

export default createRootReducer
