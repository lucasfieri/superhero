import { compose, applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import thunk from 'redux-thunk'

import rootReducer from './reducer'

const allStoreEnhancers = compose(applyMiddleware(thunk, logger))

const store = createStore(rootReducer, {}, allStoreEnhancers)

export default store
