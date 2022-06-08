import { createBrowserHistory } from 'history'
import { compose, applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import createRootReducer from './reducer'

export const history = createBrowserHistory()
const isDev = process.env.NODE_ENV === 'development'

export default function configureStore (preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        isDev && logger
      )
    )
  )
  return store
}
