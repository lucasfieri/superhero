import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import popoverReducer from '../ducks/popover'
import modalReducer from '../ducks/modal'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  popover: popoverReducer,
  modal: modalReducer
})

export default createRootReducer
