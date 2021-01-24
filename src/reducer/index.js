import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import popoverReducer from '../ducks/popover'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  popover: popoverReducer
})

export default createRootReducer
