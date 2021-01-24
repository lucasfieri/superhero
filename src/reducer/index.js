import { combineReducers } from 'redux'

import popoverReducer from '../ducks/popover'

const rootReducer = combineReducers({
  popover: popoverReducer
})

export default rootReducer
